import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react'; //plugin umożliwiający użycie react w vite

export default defineConfig({
    plugins: [react()], //dodanie react plugin do vute
    base: './', //wszystkie assety są ładowane relatywnie, więc strona działa również w Github Pages
    server: {
        port: 4173,
        host: true,
    },
    build: {
        outerDir: 'dist'  //vite wrzuca zbudowaną aplikację
    }
})