//główna struktura danych matrycy
export const MODEL_DATA = {
  L1: {
    name: 'Jakość Informacji',
    primary: [
      { 
        id: '001', 
        name: 'Ocena treści', 
        secondary: ['001.1', '001.2', '001.3', '001.4', '001.5', '001.6'] 
      },
      { 
        id: '002', 
        name: 'Ocena Źródła', 
        secondary: ['002.1', '002.2', '002.3', '002.4'] 
      }
    ]
  },
  L2: {
    name: 'Szersze tło',
    primary: [
      { 
        id: '003', 
        name: 'Ocena kontekstu', 
        secondary: ['003.1', '003.2', '003.3', '003.4', '003.5', '003.6', '003.7', '003.8', '003.9', '003.10'] 
      }
    ]
  },
  L3: {
    name: 'Zestawienie źródeł',
    primary: [
      { 
        id: '004', 
        name: 'Ocena kontrastu', 
        secondary: ['004.1', '004.2', '004.3', '004.4'] 
      }
    ]
  }
};

//funkcja tworzy klucz do wyszukania tłumaczeń (001.1 - klucz se001_1)
export const getSEName = (id, lang = 'pl') => {
  //jeśli nie jest określone
  if (!id) return '';
  
  //czy jest to dynamiczne źródło 004, z trzema częsciami po kropkach (tylko ID w formacie 004.X.Y)
  if (id.startsWith('004.') && id.split('.').length === 3) {
    const parts = id.split('.');
    const seNumber = parts[2]; //wybieranie trzeciej części, aby z tego utworzyć klucz
    
    //tworzenie klucza (004.2.3 - se004_3)
    const seKey = `se004_${seNumber}`;
    return translations[lang][seKey] || id; //funkcja szuka w tłumaczeniach tego seKey
  }
  
  //funkcja standardowa (001.1 - klucz se001_1)
  const key = `se${id.replace(/\./g, '_')}`;
  return translations[lang][key] || id;
};

//funkcja pobiera nazwę warstwy z tłumaczeń (L1 - klucz layer1)
export const getLayerName = (layerId, lang = 'pl') => {
  const key = `layer${layerId.replace('L', '')}`;
  return translations[lang][key] || layerId;
};

//funkcja pobiera nazwę elementu nadrzędnego (PE) z tłumaczeń (001 - klucz pe001)
export const getPEName = (peId, lang = 'pl') => {
  const key = `pe${peId}`;
  return translations[lang][key] || peId;
};

//funckja wyszykania opisów (001.1 - klucz seDesc_001_1)
export const getSEDescription = (seId, lang = 'pl') => {
  const key = `seDesc_${seId.replace(/\./g, '_')}`;
  return translations[lang][key] || '';
};

//funkcja wyszukania wskazówek, listy punktów
export const getSEHints = (seId, lang = 'pl') => {
  const key = `seHints_${seId.replace(/\./g, '_')}`;
  return translations[lang][key] || [];
};

