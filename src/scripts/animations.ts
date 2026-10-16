import { animate, inView } from 'motion';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/** Blendet alle Elemente mit `data-animate` sanft ein, sobald sie sichtbar werden. */
function initRevealAnimations() {
	if (reducedMotion.matches) return;

	document.querySelectorAll<HTMLElement>('[data-animate]').forEach((el) => {
		const delay = Number(el.dataset.animateDelay ?? 0);
		// Ab jetzt steuert Motion die Sichtbarkeit (deaktiviert den CSS-Fallback).
		el.style.opacity = '0';
		el.dataset.animateReady = '';
		inView(
			el,
			() => {
				animate(
					el,
					{ opacity: [0, 1], y: [16, 0] },
					{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
				);
			},
			{ amount: 0.15 },
		);
	});
}

// Läuft beim ersten Laden und nach jeder View-Transition-Navigation.
document.addEventListener('astro:page-load', initRevealAnimations);
