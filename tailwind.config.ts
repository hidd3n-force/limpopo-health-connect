
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Healthcare Color Palette
				'medical-blue': '#2C5F8D',
				'bright-blue': '#4A90E2',
				'success': '#28A745',
				'warning': '#FFC107',
				'error': '#DC3545',
				'bg-primary': '#F5F5F5',
				'card-bg': '#FFFFFF',
				'text-primary': '#333333',
				'text-secondary': '#666666',
				'border-color': '#E0E0E0',
				
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#4A90E2',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#2C5F8D',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#DC3545',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'healthcare': '12px',
				'button': '25px',
				'search': '30px'
			},
			fontSize: {
				'healthcare-h1': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
				'healthcare-h2': ['20px', { lineHeight: '1.3', fontWeight: '700' }],
				'healthcare-h3': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
				'healthcare-body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
				'healthcare-small': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
			},
			spacing: {
				'healthcare-base': '8px',
				'healthcare-card': '16px',
				'healthcare-section': '24px',
			},
			boxShadow: {
				'healthcare': '0 4px 12px rgba(0, 0, 0, 0.08)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-press': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.98)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-press': 'scale-press 0.15s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
