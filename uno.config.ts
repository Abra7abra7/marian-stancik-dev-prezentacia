import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter:400,600,800',
                display: 'Outfit:400,700,900',
                mono: 'JetBrains Mono:400,700',
            },
        }),
    ],
    theme: {
        colors: {
            brand: {
                dark: '#020617',   // Slate 950
                primary: '#3b82f6', // Blue 500
                secondary: '#10b981', // Emerald 500
                indigo: '#6366f1', // Indigo 500
                text: '#FFFFFF',
                muted: '#94A3B8'   // Slate 400
            },
        },
        fontFamily: {
            sans: '"Inter", "DM Sans", sans-serif',
            display: '"Outfit", sans-serif',
            mono: '"JetBrains Mono", monospace',
        },
    },
    shortcuts: {
        'bg-main': 'bg-brand-dark text-brand-text',
        'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-indigo',
        'btn-primary': 'px-6 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-indigo text-white font-bold hover:opacity-90 transition duration-200',
        'glass-card': 'bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-2xl',
        'shiny-text': 'text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-white animate-pulse',
    }
})
