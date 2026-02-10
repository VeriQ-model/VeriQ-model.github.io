//pobieranie tłumaczenia, jeśli brak, zwraca pl domyślnie, jeśli wciąż nie ma zwraca klucz (aby nic nie zostało ukryte w UI)
export const translations = {
  pl: {
    //Nagłówek
    appTitle: 'System Analizy Informacji',
    appSubtitle: '„Punkt widzenia może być niebezpiecznym luksusem, gdy zastępuje wgląd i zrozumienie" — Marshall McLuhan',
    help: 'Pomoc',
    comments: 'Komentarzy',
    changeLanguage: 'Zmień język',
    toggleTheme: 'Przełącz motyw',
    
    //strona startowa
    welcomeTitle: 'Witaj w Systemie Analizy Informacji',
    welcomeSubtitle: 'Wybierz jedną z opcji, aby rozpocząć pracę',
    newProject: 'Nowa analiza',
    newProjectDescription: 'Rozpocznij nową analizę',
    importProject: 'Importuj projekt',
    importProjectDescription: 'Wczytaj wcześniej zapisany projekt z pliku JSON',
    footerText: 'Model Weryfikacji Informacji VeriQ',
    invalidFileType: 'Nieprawidłowy typ pliku. Wybierz plik JSON.',
    invalidJSON: 'Błąd odczytu pliku JSON. Upewnij się, że plik jest prawidłowy.',
    
    //toolbar
    generatePDF: 'Generuj PDF',
    radarChart: 'Wykres radarowy',
    exportJSON: 'Eksport JSON',
    importJSON: 'Importuj JSON',
    clearAll: 'Wyczyść wszystko',
    backToHome: 'Powrót do strony głównej',
    confirmBackToHome: 'Czy na pewno chcesz wrócić do strony głównej? Niezapisane zmiany zostaną zachowane w pamięci przeglądarki.',
    
    //dialog z tytułem i autorem przy generowaniu pdf
    pdfDialogTitle: 'Personalizacja raportu PDF',
    pdfReportTitleLabel: 'Tytuł raportu',
    pdfReportTitlePlaceholder: 'np. Analiza potencjalnej dezinformacji XYZ',
    pdfAuthorLabel: 'Autor raportu',
    pdfAuthorPlaceholder: 'np. Jan Kowalski',
    pdfGenerateButton: 'Generuj PDF',
    pdfCancelButton: 'Anuluj',
    pdfValidationError: 'Proszę wypełnić wszystkie pola',
    pdfPrimaryElement: 'Element nadrzędny',
    pdfSecondaryElement: 'Element podrzędny',
    
    //dialogwykresu radarowego
    radarTitle: 'Wykres radarowy ocen',
    radarSelectPE: 'Wybierz element:',
    radarPE001: 'Element nadrzędny 001 - Ocena treści',
    radarPE002: 'Element nadrzędny 002 - Ocena źródła',
    radarExportPNG: 'Eksport PNG',
    radarClose: 'Zamknij',
    radarNoData: 'Brak kompletnych danych',
    radarNoDataDesc: 'Aby wygenerować wykres, wszystkie Elementy podrzędne w wybranym Elemencie nadrzędnym muszą mieć oceny (0-5).',
    radarMissingRatings: 'Brakujące oceny w',
    radarExportSuccess: 'Wykres wyeksportowany do PNG',
    radarExportError: 'Błąd podczas eksportu',
    
    //widok źródeł w 004
    sourcesAddBtn: 'Dodaj źródło',
    sourcesNoSources: 'Brak źródeł. Kliknij "Dodaj źródło" aby rozpocząć.',
    sourcesDeleteSource: 'Usuń źródło',
    sourcesConfirmDelete: 'Czy na pewno chcesz usunąć to źródło?',
    sourcesWillBeDeleted: 'Zostanie usunięte wraz ze wszystkimi komentarzami.',
    
    //dialog dodawania nowego źródła w 004
    sourceDialogTitle: 'Dodaj nowe źródło',
    sourceDialogNameLabel: 'Nazwa źródła',
    sourceDialogNamePlaceholder: 'Wpisz nazwę źródła (np. "Reuters", "Demagog.org", "BBC News")',
    sourceDialogCancel: 'Anuluj',
    sourceDialogAdd: 'Dodaj źródło',
    
    //nazwy warstw
    layer1: 'Warstwa I - Jakość Informacji',
    layer2: 'Warstwa II - Kontekst',
    layer3: 'Warstwa III - Kontrast',
    
    //elementy nadrzędne (PE)
    pe001: 'Ocena treści',
    pe002: 'Ocena źródła',
    pe003: 'Ocena kontekstu',
    pe004: 'Ocena kontrastu',
    
    //elementy podrzędne (SE)
    se001_1: 'Spójność logiczna',
    se001_2: 'Forma przekazu',
    se001_3: 'Transparentność',
    se001_4: 'Rzetelność',
    se001_5: 'Obiektywność',
    se001_6: 'Autentyczność cyfrowa',
    
    se002_1: 'Autorytet',
    se002_2: 'Reputacja',
    se002_3: 'Afiliacja',
    se002_4: 'Historia Wiarygodności',
    
    se003_1: 'Aktualność',
    se003_2: 'Cel przekazu',
    se003_3: 'Odbiorca',
    se003_4: 'Sytuacja społeczna',
    se003_5: 'Interesy',
    se003_6: 'Okoliczności powstania',
    se003_7: 'Dynamika',
    se003_8: 'Kontekst geopolityczny',
    se003_9: 'Zasięg',
    se003_10: 'Spójność techniczna',
    
    se004_1: 'Zgodności',
    se004_2: 'Rozbieżności',
    se004_3: 'Różnorodność',
    se004_4: 'Kontekst międzynarodowy',
    
    //opisy elementów podrzędnych (SE)
    seDesc_001_1: 'Ocenia zgodność logiczną przekazu i poprawność wnioskowania',
    seDesc_001_2: 'Ocenia język, styl, ton oraz ich dopasowanie do tematu',
    seDesc_001_3: 'Ocenia jawność źródeł, metodologii i możliwości weryfikacji',
    seDesc_001_4: 'Ocenia poprawność faktów, danych i terminologii',
    seDesc_001_5: 'Ocenia, czy przekaz jest bezstronny i wolny od manipulacji',
    seDesc_001_6: 'Ocenia wiarygodność materiałów cyfrowych',
    
    seDesc_002_1: 'Ocenia poziom kompetencji i uznania źródła w danej dziedzinie',
    seDesc_002_2: 'Ocenia postrzeganie źródła w innych wiarygodnych kanałach',
    seDesc_002_3: 'Ocenia powiązania organizacyjne, finansowe i polityczne źródła',
    seDesc_002_4: 'Ocenia wcześniejszą rzetelność źródła',
    
    seDesc_003_1: 'Ocenia aktualność informacji',
    seDesc_003_2: 'Ocenia intencje autora - informowanie, przekonywanie, czy manipulacja',
    seDesc_003_3: 'Ocenia grupę docelową i dostosowanie treści do odbiorcy',
    seDesc_003_4: 'Ocenia dopasowanie przekazu do nastrojów społecznych',
    seDesc_003_5: 'Ocenia potencjalne korzyści autora',
    seDesc_003_6: 'Ocenia warunki i okoliczności powstania informacji',
    seDesc_003_7: 'Ocenia zmienność sytuacji i tempo wydarzeń',
    seDesc_003_8: 'Ocenia wpływ interesów międzynarodowych',
    seDesc_003_9: 'Ocenia skalę rozpowszechnienia informacji i sposób dystrybucji treści',
    seDesc_003_10: 'Ocenia zgodność materiałów multimedialnych z opisem',
    
    seDesc_004_1: 'Ocenia wspólne elementy między różnymi źródłami',
    seDesc_004_2: 'Ocenia sprzeczności między źródłami',
    seDesc_004_3: 'Ocenia pluralizm źródeł i perspektyw',
    seDesc_004_4: 'Ocenia selekcję zagranicznych danych',
    
    //wskazówki dla elementów podrzędnych (SE)
    seHints_001_1: ['Wnioski nie wynikają z przedstawionych faktów', 'Fałszywe związki przyczynowo-skutkowe', 'Wybiera tylko wygodne fakty („cherry-picking")', 'Są wewnętrzne sprzeczności', 'Brakuje kroków rozumowania („skacze" od tezy do tezy)'],
    seHints_001_2: ['Format nie pasuje do treści (np. clickbait)', 'Nadmierne użycie emocjonalnych słów', 'Wyolbrzymienia lub dramatyzowanie', 'Niska jakość grafiki lub wideo', 'Chaotyczna struktura tekstu'],
    seHints_001_3: ['Brak informacji o autorze', 'Nie podano źródeł danych', 'Ukryte sponsorowanie lub konflikt interesów', 'Metodologia badań jest niejasna', 'Brak dat publikacji lub aktualizacji'],
    seHints_001_4: ['Błędne lub niespójne dane liczbowe', 'Nieprecyzyjna terminologia', 'Cytowanie badań bez kontekstu', 'Brak rozróżnienia między danymi a szacunkami', 'Uproszczenia prowadzące do zniekształceń'],
    seHints_001_5: ['Jednostronny opis sytuacji', 'Pomija istotne fakty lub konteksty', 'Używa stronniczego języka', 'Przedstawia opinie jako fakty', 'Brak alternatywnych punktów widzenia'],
    seHints_001_6: ['Podejrzane metadane plików', 'Ślady edycji w dokumentach cyfrowych', 'Niezgodność dat utworzenia/modyfikacji', 'Brak cyfrowych sygnatur lub certyfikatów', 'Manipulacja obrazów (deepfake, photoshop)'],
    
    seHints_002_1: ['Brak wykształcenia lub doświadczenia w temacie', 'Nie jest rozpoznawalny w branży', 'Samozwańczy „ekspert" bez kwalifikacji', 'Pseudonaukowe stopnie lub tytuły', 'Znany z kontrowersyjnych poglądów'],
    seHints_002_2: ['Źródło ma złą reputację medialną', 'Brak cytowań w wiarygodnych źródłach', 'Historia rozpowszechniania dezinformacji', 'Powielanie niesprawdzonych treści', 'Brak korekt po ujawnieniu błędów'],
    seHints_002_3: ['Ukryte powiązania z grupami interesu', 'Finansowanie z nieprzejrzystych źródeł', 'Związki z partiami politycznymi lub lobbystami', 'Zależność od sponsorów', 'Konflikt interesów'],
    seHints_002_4: ['Powtarzające się błędy w przeszłych publikacjach', 'Ignorowanie sprostowań lub krytyki', 'Brak reakcji na wykryte nieścisłości', 'Historia manipulacji informacją', 'Usuwanie lub zmienianie treści bez wyjaśnienia'],
    
    seHints_003_1: ['Stare informacje przedstawiane jako nowe', 'Pominięto najnowsze wydarzenia', 'Brak dat w kluczowych miejscach', 'Przestarzałe statystyki', 'Nie uwzględnia aktualnego kontekstu'],
    seHints_003_2: ['Ukryty cel perswazyjny', 'Wyraźna agenda polityczna lub ideologiczna', 'Próba wywołania określonych emocji', 'Marketingowa lub reklamowa natura', 'Propaganda lub dezinformacja'],
    seHints_003_3: ['Manipulacyjne dostosowanie do grupy docelowej', 'Różne wersje tej samej informacji dla różnych odbiorców', 'Wykorzystanie stereotypów lub uprzedzeń', 'Język dostosowany do wywołania emocji', 'Pomija informacje niewygodne dla odbiorcy'],
    seHints_003_4: ['Ignoruje kontekst społeczny', 'Nie uwzględnia nastrojów społecznych', 'Pomija istotnekwestie kulturowe', 'Brak związku z aktualną sytuacją społeczną', 'Niezrozumienie lokalnego kontekstu'],
    seHints_003_5: ['Ukryte korzyści finansowe', 'Promuje określone produkty lub usługi', 'Zyski polityczne lub wizerunkowe', 'Wpływ na decyzje gospodarcze', 'Osobiste korzyści autora'],
    seHints_003_6: ['Ograniczony dostęp do źródeł', 'Presja polityczna lub cenzura', 'Tworzenie treści w warunkach kryzysowych', 'Selektywne przedstawianie faktów', 'Brak kontekstu sytuacyjnego'],
    seHints_003_7: ['Pomija szybko zmieniającą się sytuację', 'Statyczny obraz dynamicznych wydarzeń', 'Brak aktualizacji pomimo nowych faktów', 'Nie uwzględnia tempa zmian', 'Przestarzała analiza'],
    seHints_003_8: ['Ignoruje międzynarodowy kontekst', 'Jednostronna perspektywa geopolityczna', 'Pomija istotne relacje między państwami', 'Brak globalnego spojrzenia', 'Nacjonalistyczne uprzedzenia'],
    seHints_003_9: ['Lokalny incydent przedstawiony jako globalny', 'Przesadzona skala wpływu', 'Ignorowanie rzeczywistego zasięgu', 'Sztuczne pompowanie znaczenia', 'Brak danych o rzeczywistym oddziaływaniu'],
    seHints_003_10: ['Materiały multimedialne nie pasują do opisu', 'Niezgodność czasu lub miejsca', 'Użycie archiwalnych zdjęć jako aktualnych', 'Materiały z innych wydarzeń', 'Manipulacja kontekstem wizualnym'],
    
    seHints_004_1: ['Tylko jedno źródło podaje informację', 'Brak potwierdzenia w innych źródłach', 'Zgodność tylko w nieistotnych szczegółach', 'Wzajemne cytowanie tych samych źródeł', 'Echo chamber'],
    seHints_004_2: ['Sprzeczne fakty w różnych źródłach', 'Różne daty lub liczby', 'Odmienne interpretacje tych samych wydarzeń', 'Wykluczające się wersje', 'Niemożliwe do pogodzenia relacje'],
    seHints_004_3: ['Źródła pochodzą z jednego środowiska', 'Brak perspektyw alternatywnych', 'Powielanie tych samych narracji', 'Efekt echo-chamber', 'Brak różnorodności geograficznej'],
    seHints_004_4: ['Wybiórcze cytowanie zagranicznych źródeł', 'Ignorowanie niewygodnych danych międzynarodowych', 'Używanie przykładów zagranicznych do manipulacji', 'Wzmacnianie lokalnej narracji kosztem pełnego obrazu', 'Brak kontekstu kulturowego lub politycznego'],
    
    //nagłówki paneli opisu
    whatWeEvaluate: 'Co oceniamy:',
    warningSignals: 'Sygnały, na które warto zwrócić uwagę:',
    warningSignalsShort: 'Sygnały ostrzegawcze:',
    
    //dialog komentarza
    commentTitle: 'Komentarz',
    titleLabel: 'Tytuł',
    titlePlaceholder: 'Krótki tytuł komentarza',
    contentLabel: 'Treść',
    contentPlaceholder: 'Szczegółowy opis, analiza, wnioski...',
    imagesLabel: 'Obrazy',
    imagesHint: 'Max 2MB na obraz',
    chooseFiles: 'Wybierz pliki',
    noFileChosen: 'Nie wybrano pliku',
    filesSelected: 'plików wybranych',
    uploadedImages: 'Dodane obrazy',
    imageTooLarge: 'Obraz jest za duży (max 2MB)',
    ratingLabel: 'Ocena',
    ratingPlaceholder: 'Wybierz ocenę (0-5)',
    noRating: 'Brak oceny',
    save: 'Zapisz',
    delete: 'Usuń',
    cancel: 'Anuluj',
    
    //wyskakujące powiadomienia
    commentSaved: 'Komentarz zapisany!',
    commentDeleted: 'Komentarz usunięty',
    ratingSaved: 'Ocena zapisana!',
    ratingDeleted: 'Ocena usunięta',
    exportSuccess: 'Wyeksportowano pomyślnie!',
    importSuccess: 'Zaimportowano pomyślnie!',
    clearSuccess: 'Wszystkie komentarze usunięte',
    exportError: 'Błąd podczas eksportu',
    importError: 'Błąd podczas importu',
    confirmClear: 'Czy na pewno chcesz usunąć wszystkie komentarze?',
    
    //pdf
    pdfTitle: 'Raport Analizy Informacji',
    pdfGenerated: 'Raport PDF wygenerowany pomyślnie',
    pdfGenerateError: 'Błąd podczas generowania PDF',
    pdfComments: 'Komentarze',
    pdfNoComments: 'Brak komentarzy w tej warstwie',
    
    //dialog samouczka
    helpTitle: 'Samouczek',
    helpClose: 'Zamknij',
    
    //sekcje samouczka
    helpIntroTitle: 'Wprowadzenie',
    helpL1Title: 'Warstwa I - Jakość Informacji',
    helpL2Title: 'Warstwa II - Kontekst',
    helpL3Title: 'Warstwa III - Kontrast',
    helpUsageTitle: 'Funkcje aplikacji',
    helpTipsTitle: 'Wskazówki',
    
    //zawartość samouczka
    helpIntroHeading: 'Model Weryfikacji Informacji',
    helpIntroDesc: 'Aplikacja wspomaga analizę informacji w trzech warstwach hierarchicznych:',
    helpIntroL1: 'Ocena treści i źródła informacji',
    helpIntroL2: 'Analiza kontekstu otaczającego badany materiał',
    helpIntroL3: 'Porównanie różnych źródeł informacji',
    helpHowToUse: 'Jak używać aplikacji:',
    helpStep1: 'Przygotuj analizowany materiał',
    helpStep2: 'Przeanalizuj go z pomocą elementów podrzędnych trzech warstw modelu',
    helpStep3: 'Dodaj komentarze i oceny aby uzasadnić Twoje wnioskowanie oraz udokumentować przebieg analizy',
    helpStep4: 'Dodaj źródła i porównaj sprzeczności lub spójności',
    helpStep5: 'Generuj raport analityczny lub eksportuj plik JSON aby zapisać Twoją analizę',
    helpNote: 'Aplikacja będzie kontynuowała działanie po utracie połączenia z Internetem, jednak pamiętaj o zapisie pliku JSON regularnie jako backup',
    
    //zawartość samouczka - Warstwa 1 (L1)
    helpL1Desc: 'Warstwa podstawowa oceniająca fundamentalne aspekty informacji.',
    helpL1PE001: '001 - Ocena treści',
    helpL1PE001Desc: 'Analiza samej treści przekazu pod kątem jakości i rzetelności.',
    helpL1PE002: '002 - Ocena źródła',
    helpL1PE002Desc: 'Analiza wiarygodności i reputacji źródła informacji.',
    
    //opis elementów podrzędnych w samouczku (SE)
    helpSE001_1: 'Weryfikacja logicznej spójności argumentów i brak wewnętrznych sprzeczności.',
    helpSE001_2: 'Ocena sposobu prezentacji informacji',
    helpSE001_3: 'Jawność źródeł, metod pozyskania danych i ewentualnych ograniczeń.',
    helpSE001_4: 'Dokładność faktów, weryfikowalność danych i solidność podstaw.',
    helpSE001_5: 'Bezstronność prezentacji, brak manipulacji i tendencyjności.',
    helpSE001_6: 'Weryfikacja autentyczności dokumentów cyfrowych, brak manipulacji technicznych.',
    
    helpSE002_1: 'Poziom kompetencji i uznania w danej dziedzinie.',
    helpSE002_2: 'Historia publikacji, oceny społeczne i opinie ekspertów.',
    helpSE002_3: 'Powiązania organizacyjne, finansowe i polityczne źródła.',
    helpSE002_4: 'Wcześniejsze publikacje, ich trafność i korekty błędów.',
    
    //zawartość samouczka - Warstwa 2 (L2)
    helpL2Desc: 'Warstwa kontekstowa analizująca szerszy obraz sytuacji.',
    helpL2PE003: '003 - Ocena kontekstu',
    helpL2PE003Desc: 'Analiza okoliczności powstania i obiegu informacji.',
    
    helpSE003_1: 'Czy informacja jest aktualna, jej data publikacji i ewentualne uaktualnienia.',
    helpSE003_2: 'Intencje autora: informować, przekonywać, manipulować czy bawić.',
    helpSE003_3: 'Grupa docelowa przekazu i dostosowanie treści do odbiorcy.',
    helpSE003_4: 'Kontekst społeczny, kulturowy i ekonomiczny w momencie publikacji.',
    helpSE003_5: 'Interesy finansowe, polityczne lub osobiste związane z przekazem.',
    helpSE003_6: 'Warunki i okoliczności powstania informacji.',
    helpSE003_7: 'Zmienność sytuacji, tempo wydarzeń i ewolucja informacji.',
    helpSE003_8: 'Międzynarodowe aspekty sytuacji, relacje między państwami i ich wpływ.',
    helpSE003_9: 'Skala rozpowszechnienia informacji i jej wpływ.',
    helpSE003_10: 'Techniczne aspekty przekazu: format, jakość, kanały dystrybucji.',
    
    //zawartość samouczka - Warstwa 3 (L3)
    helpL3Desc: 'Warstwa porównawcza analizująca różnice i zgodności między źródłami.',
    helpL3PE004: '004 - Ocena kontrastu',
    helpL3PE004Desc: 'Porównanie i weryfikacja informacji z różnych źródeł.',
    
    helpSE004_1: 'Punkty wspólne między różnymi źródłami, potwierdzenie faktów.',
    helpSE004_2: 'Różnice w relacjach, sprzeczne informacje wymagające wyjaśnienia.',
    helpSE004_3: 'Zróżnicowanie typów źródeł: media, eksperci, dokumenty, świadkowie.',
    helpSE004_4: 'Międzynarodowy wymiar źródeł, perspektywy różnych krajów.',
    
    //zawartoścć samouczka - Funkcjonalności
    helpUsageAddComments: 'Dodawanie komentarzy',
    helpUsageAddStep1: 'Znajdź Element podrzędny, który chcesz przeanalizować',
    helpUsageAddStep2: 'Kliknij w danym elemencie przyciskiem "+"',
    helpUsageAddStep3: 'W oknie dialogowym wprowadź:',
    helpUsageAddTitle: 'Krótkie podsumowanie (np. "Źródło niezweryfikowane")',
    helpUsageAddContent: 'Szczegółowa analiza i wnioski',
    helpUsageAddImage: 'Opcjonalnie: załącz obraz JPG/PNG (max 5MB)',
    helpUsageAddStep4: 'Kliknij "Zapisz"',
    helpUsageImageNote: 'Elementy z komentarzami mają pogrubioną ramkę dla przejrzystości',
    
    helpUsageEdit: 'Edycja i usuwanie',
    helpUsageEditStep1: 'Kliknij na ikonę komentarza aby edytować komentarz',
    helpUsageEditStep2: 'W oknie dialogowym możesz zmienić tytuł i treść',
    helpUsageEditStep3: 'Użyj przycisku "Usuń" aby usunąć komentarz',
    
    helpUsageRating: 'System ocen',
    helpUsageRatingStep1: 'Kliknij ikonę gwiazdki przy dowolnym Elemencie podrzędnym w warstwie pierwszej',
    helpUsageRatingStep2: 'Każdy Element podrzędny ma indywidualną skalę ocen',
    helpUsageRatingStep3: 'Element podrzędny z oceną ma pogrubioną ramkę dla przejrzystości',
    helpUsageRatingNote: 'System ocen pozwala szybko oznaczyć problematyczne obszary bez tworzenia pełnego komentarza',
    
    helpUsageRadar: 'Wykres radarowy',
    helpUsageRadarStep1: 'Kliknij przycisk "Wykres radarowy" w górnym menu',
    helpUsageRadarStep2: 'Wybierz Element nadrzędny, dla którego chcesz zobaczyć wykres',
    helpUsageRadarStep3: 'Wykres wygeneruje się tylko gdy wszystkie Elementy podrzędne w danym Elemencie nadrzędnym mają oceny',
    helpUsageRadarStep4: 'Możesz eksportować wykres jako PNG',
    helpUsageRadarNote: 'Wykres radarowy pomaga wizualnie zidentyfikować najbardziej problematyczne obszary analizy',
    
    helpUsagePDF: 'Eksport do PDF',
    helpUsagePDFStep1: 'Kliknij przycisk "Generuj PDF"',
    helpUsagePDFStep2: 'Po wprowadzeniu tytułu i autora raportu, aplikacja wygeneruje raport z wszystkimi komentarzami',
    helpUsagePDFStep3: 'PDF zawiera:',
    helpUsagePDFItem1: 'Listę wszystkich komentarzy pogrupowanych według warstw lub źródeł',
    helpUsagePDFItem2: 'Załączone obrazy (jeśli dodane do komentarzy)',
    helpUsagePDFItem3: 'Podpisy pod obrazami (nazwa pliku JPG/PNG)',
    helpUsagePDFItem4: 'Datę i godzinę generowania raportu',
    
    helpUsageJSON: 'Eksport/Import JSON',
    helpUsageJSONExport: 'Eksport:',
    helpUsageJSONExportStep1: 'Kliknij "Eksportuj JSON"',
    helpUsageJSONExportStep2: 'Zapisz plik na dysku',
    helpUsageJSONImport: 'Import:',
    helpUsageJSONImportStep1: 'Kliknij "Importuj JSON"',
    helpUsageJSONImportStep2: 'Wybierz wcześniej zapisany plik',
    helpUsageJSONImportStep3: 'Wszystkie komentarze zostaną wczytane',
    
    helpUsageClear: 'Czyszczenie danych',
    helpUsageClearDesc: 'Kliknij "Wyczyść wszystko" aby usunąć wszystkie komentarze',
    helpUsageClearConfirm: 'Pojawi się potwierdzenie przed usunięciem',
    
    //zawartość samouczka - Wskazówki
    helpTipsAnalysis: 'Efektywna analiza',
    helpTipsAnalysisL1: 'Najpierw oceń jakość samej informacji',
    helpTipsAnalysisL2: 'Zrozum szerszy kontekst sytuacji',
    helpTipsAnalysisL3: 'Porównaj z innymi źródłami',
    
    helpTipsComments: 'Tworzenie komentarzy',
    helpTipsCommentsTitle: 'Powinien być krótki i opisowy (2-5 słów)',
    helpTipsCommentsContent: 'Zawieraj konkretne fakty, obserwacje i wnioski',
    helpTipsCommentsCite: 'Jeśli możliwe, odnoś się do konkretnych źródeł',
    helpTipsCommentsDate: 'Uwzględnij daty wydarzeń i publikacji',
    
    helpTipsOrganization: 'Organizacja pracy',
    helpTipsOrgBackup: 'Regularnie eksportuj JSON jako backup',
    helpTipsOrgNaming: 'Używaj spójnej konwencji nazewnictwa w tytułach',
    helpTipsOrgPDF: 'Generuj PDF po zakończeniu analizy jako raport końcowy',
    helpTipsOrgFiles: 'Dla złożonych analiz twórz osobne pliki JSON dla różnych tematów',
    
    helpTipsBestPractices: 'Najlepsze praktyki',
    helpTipsBPObjectivity: 'Oddzielaj fakty od opinii',
    helpTipsBPVerification: 'Sprawdzaj informacje w wielu źródłach',
    helpTipsBPDocumentation: 'Zapisuj źródła i linki w treści komentarzy',
    helpTipsBPRegularity: 'Aktualizuj analizę w miarę napływu nowych informacji',
    
   
    //dodatkowe klucze
    note: 'Uwaga',
    objectivity: 'Obiektywność',
    verification: 'Weryfikacja',
    documentation: 'Dokumentacja',
    regularity: 'Regularność',
   
  }
  };

//funkcja pomocnicza do pobierania tłumaczeń (wartość dla języka i klucza)
export const getTranslation = (lang, key) => {
  return translations[lang]?.[key] || translations['pl'][key] || key;
};