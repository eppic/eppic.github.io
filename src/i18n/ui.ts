// Alle UI-Texte an einer Stelle, damit später eine englische Version
// einfach als weiterer Schlüssel ergänzt werden kann.
export const ui = {
	de: {
		'site.title': 'Portfolio',
		'site.byline': 'von Nico W.',
		'site.description': 'Portfolio von Nico W. – Projekte als Web Developer.',
		'list.heading': 'Projekte',
		'list.sortLabel': 'Sortieren',
		'list.sortFeatured': 'Empfohlen',
		'list.sortNewest': 'Neueste',
		'list.sortAlpha': 'A–Z',
		'list.empty': 'Noch keine Projekte.',
		'project.visit': 'Zur Seite',
		'project.github': 'GitHub',
		'project.description': 'Beschreibung',
		'project.tech': 'Technologien',
		'project.team': 'Team',
		'project.role': 'Meine Rolle',
		'project.screenshots': 'Screenshots',
		'project.back': 'Zurück zur Übersicht',
		'project.me': 'Nico W.',
		'footer.contact': 'Kontakt',
		'footer.github': 'GitHub',
		'footer.rights': 'Nico W.',
	},
} as const;

export const defaultLang = 'de';
export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang = defaultLang) {
	return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Interner Link, der den konfigurierten `base`-Pfad berücksichtigt. */
export function href(path = '') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
