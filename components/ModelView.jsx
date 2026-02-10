import { useState } from 'react';
import { MessageSquare, Paperclip, Plus, ChevronUp, ChevronDown, Star, ClipboardList, AlertTriangle } from 'lucide-react';
import CommentDialog from './dialogs/CommentDialog.jsx';
import RatingDialog from './dialogs/RatingDialog.jsx';
import SourcesView from './SourcesView.jsx';
import { MODEL_DATA, getSEName, getPEName, getLayerName, hasRatingScale, getSEDescription, getSEHints } from './modelData.js';
import { getTranslation } from './translations.js';

export default function ModelView({ 
  comments, 
  onSave, 
  onDelete, 
  onSaveRating, 
  onDeleteRating, 
  language,
  sources,
  onAddSource,
  onDeleteSource
}) {
  const [selectedCell, setSelectedCell] = useState(null); // która komórka (element modelu) jest edytowana
  const [selectedRatingCell, setSelectedRatingCell] = useState(null); // która komórka jest oceniana
  const [expandedCells, setExpandedCells] = useState(new Set()); // id komórek rozszerzonych (opis + wskazówki)
  const [isPE004HelpExpanded, setIsPE004HelpExpanded] = useState(false); // panel pomocy dla PE 004 w L3

  // ustawia element do komentarza
  const handleCellClick = (cellId) => {
    setSelectedCell(cellId);
  };

  // rozwija / zwija opis i wskazówki w elementach podrzędnych (SE)
  const handleToggleExpand = (seId, e) => {
    e.stopPropagation();
    setExpandedCells(prev => {
      const newSet = new Set(prev);
      if (newSet.has(seId)) {
        newSet.delete(seId);
      } else {
        newSet.add(seId);
      }
      return newSet;
    });
  };
  
  // rozwija / zwija panel pomocy dla PE 004 w L3
  const handleTogglePE004Help = () => {
    setIsPE004HelpExpanded(prev => !prev);
  };

  // otwiera dialog oceny dla danego elementu
  const handleRatingClick = (id, e) => {
    e.stopPropagation(); 
    setSelectedRatingCell(id);
  };

  const handleClose = () => {
    setSelectedCell(null);
  };

  const handleCloseRating = () => {
    setSelectedRatingCell(null);
  };

  const handleSave = (title, content, images) => {
    if (selectedCell) {
      onSave(selectedCell, title, content, images);
      setSelectedCell(null);
    }
  };

  const handleSaveRating = (rating) => {
    if (selectedRatingCell && onSaveRating) {
      onSaveRating(selectedRatingCell, rating);
      setSelectedRatingCell(null);
    }
  };

  const handleDelete = () => {
    if (selectedCell) {
      onDelete(selectedCell);
      setSelectedCell(null);
    }
  };

  const handleDeleteRating = () => {
    if (selectedRatingCell && onDeleteRating) {
      onDeleteRating(selectedRatingCell);
      setSelectedRatingCell(null);
    }
  };

  // renderowanie modelu (3 warstw i ich elementów)
  return (
    <div className="model-container">
      {Object.entries(MODEL_DATA).map(([layerId, layer]) => (// iteracja po warstwach modelu
        <div key={layerId} className="layer">
          <div className="layer-header">
            <h2>{getLayerName(layerId, language)}</h2>
          </div>
          <div className="layer-content">
            {layer.primary.map((pe) => (
              <div key={pe.id} className="primary-element">
                {/* Nagłówek elementu nadrzędnego (PE) */}
                <div className="element-card pe-header">
                  <div className="element-content">
                    <div className="element-header-row" style={{ width: '100%' }}>
                      <div className="element-main-info">
                        <div className="element-id">{pe.id}</div>
                        <div className="element-name">{getPEName(pe.id, language)}</div>
                      </div>
                      {/* Podpowiedzi dla specyficznego PE 004 */}
                      {pe.id === '004' && layerId === 'L3' && (
                        <div className="element-actions" style={{ position: 'relative', opacity: 1 }}>
                          <button
                            className="action-btn expand-btn"
                            onClick={handleTogglePE004Help}
                            title={isPE004HelpExpanded ? 'Zwiń podpowiedzi' : 'Pokaż podpowiedzi dla wszystkich elementów'}
                          >
                            {isPE004HelpExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Rozwijany panel pomocy dla PE 004 */}
                    {pe.id === '004' && layerId === 'L3' && isPE004HelpExpanded && (
                      <div className="pe004-help-panel">
                        {['004.1', '004.2', '004.3', '004.4'].map((seId) => {
                          const description = getSEDescription(seId, language);
                          const hints = getSEHints(seId, language);
                          const seName = getSEName(seId, language);
                          
                          return (
                            <div key={seId} className="pe004-help-item">
                              <div className="pe004-help-title">
                                <span className="pe004-help-id">{seId}</span>
                                <span className="pe004-help-name">{seName}</span>
                              </div>
                              {description && (
                                <div className="pe004-help-description">
                                  <strong><ClipboardList size={14} style={{verticalAlign: 'middle', marginRight: '4px'}} />{getTranslation(language, 'whatWeEvaluate')}</strong>
                                  <p>{description}</p>
                                </div>
                              )}
                              {hints && hints.length > 0 && (
                                <div className="pe004-help-hints">
                                  <strong><AlertTriangle size={14} style={{verticalAlign: 'middle', marginRight: '4px'}} />{getTranslation(language, 'warningSignalsShort')}</strong>
                                  <ul>
                                    {hints.map((hint, index) => (
                                      <li key={index}>{hint}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Obsługa dynamicznych źródeł dla PE 004 w Warstwie Kontrastu */}
                {pe.id === '004' && layerId === 'L3' ? (
                  <SourcesView
                    sources={sources || []}
                    comments={comments}
                    onAddSource={onAddSource}
                    onDeleteSource={onDeleteSource}
                    onSaveComment={onSave}
                    onDeleteComment={onDelete}
                    language={language}
                  />
                ) : (
                  /* Renderowanie elementów podrzędnych (SE) */
                  <div className="secondary-elements">
                    {pe.secondary.map((seId) => {
                    const cellId = `${layerId}-${seId}`;
                    const comment = comments[cellId];
                    const hasComment = !!comment;
                    const currentRating = comment?.rating;
                    const hasCurrentRating = currentRating !== null && currentRating !== undefined;
                    const canRate = hasRatingScale(seId);
                    const isExpanded = expandedCells.has(seId);
                    const description = getSEDescription(seId, language);
                    const hints = getSEHints(seId, language);
                    
                    return (
                      <div
                        key={seId}
                        className={`element-card secondary ${hasComment ? 'has-comment' : ''} ${isExpanded ? 'expanded' : ''}`}
                      >
                        {/* Odznaka oceny */}
                        {hasCurrentRating && (
                          <div className="rating-badge"><Star size={14} fill="currentColor" style={{verticalAlign: 'middle', marginRight: '2px'}} />{currentRating}/5</div>
                        )}
                        
                        <div className="element-content">
                          <div className="element-header-row">
                            <div className="element-main-info">
                              <div className="element-id">{seId}</div>
                              <div className="element-name">{getSEName(seId, language)}</div>
                            </div>
                            
                            <div className="element-actions">
                              <button
                                className="action-btn expand-btn"
                                onClick={(e) => handleToggleExpand(seId, e)}
                                title={isExpanded ? 'Zwiń' : 'Rozwiń podpowiedzi'}
                              >
                                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                              {canRate && (
                                <button 
                                  className="action-btn rating-btn"
                                  onClick={(e) => handleRatingClick(cellId, e)}
                                  title={hasCurrentRating ? `Ocena: ${currentRating}/5` : 'Dodaj ocenę'}
                                >
                                  <Star size={16} />
                                </button>
                              )}
                              <button 
                                className="action-btn comment-btn"
                                onClick={() => handleCellClick(cellId)}
                                title={hasComment ? 'Edytuj komentarz' : 'Dodaj komentarz'}
                              >
                                {hasComment ? (
                                  comments[cellId]?.images?.length > 0 ? <><MessageSquare size={16} /><Paperclip size={12} /></> : <MessageSquare size={16} />
                                ) : <Plus size={16} />}
                              </button>
                            </div>
                          </div>
                          
                          {/* Rozwijany panel z opisem i wskazówkami */}
                          {isExpanded && (
                            <div className="element-expanded-content">
                              {description && (
                                <div className="element-description">
                                  <strong><ClipboardList size={14} style={{verticalAlign: 'middle', marginRight: '4px'}} />{getTranslation(language, 'whatWeEvaluate')}</strong>
                                  <p>{description}</p>
                                </div>
                              )}
                              {hints && hints.length > 0 && (
                                <div className="element-hints">
                                  <strong><AlertTriangle size={14} style={{verticalAlign: 'middle', marginRight: '4px'}} />{getTranslation(language, 'warningSignals')}</strong>
                                  <ul>
                                    {hints.map((hint, index) => (
                                      <li key={index}>{hint}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Dialogi obsługujące interakcje z elementami modelu */}
      {selectedCell && (
        <CommentDialog
          isOpen={!!selectedCell}
          onClose={handleClose}
          onSave={handleSave}
          onDelete={handleDelete}
          initialTitle={comments[selectedCell]?.title || ''}
          initialContent={comments[selectedCell]?.content || ''}
          initialImages={comments[selectedCell]?.images || []}
          cellId={selectedCell}
          hasComment={!!comments[selectedCell]}
          language={language}
        />
      )}

      {selectedRatingCell && (
        <RatingDialog
          isOpen={!!selectedRatingCell}
          onClose={handleCloseRating}
          onSave={handleSaveRating}
          onDelete={handleDeleteRating}
          initialRating={comments[selectedRatingCell]?.rating ?? null}
          cellId={selectedRatingCell}
          hasRating={comments[selectedRatingCell]?.rating !== null && comments[selectedRatingCell]?.rating !== undefined}
          language={language}
        />
      )}
    </div>
  );
}