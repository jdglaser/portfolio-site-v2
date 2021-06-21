import React, { createContext, useContext, useRef, useState } from "react";

export function useProvideCommonProps() {
  const [screenDisabled, setScreenDisabled] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	function openMenu() {
		setIsMenuOpen(true);
		setScreenDisabled(true);
	}

	function closeMenu() {
		setIsMenuOpen(false);
		setScreenDisabled(false);
	}

  return {screenDisabled, setScreenDisabled, isMenuOpen, openMenu, closeMenu}
}

type CommonPropsType = ReturnType<typeof useProvideCommonProps>
const commonPropsContext = createContext({} as CommonPropsType);

export function ProvideCommonProps({children}: any) {
  const commonProps = useProvideCommonProps();
  return <commonPropsContext.Provider value={commonProps}>{children}</commonPropsContext.Provider>
}

export function useCommonProps() {
  return useContext(commonPropsContext);
}

// Scroll control
const safeDocument = typeof document !== 'undefined' ? document : {} as Document;

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */
export const useScrollBlock = (): {blockScroll: () => void, allowScroll: () => void} => {
	const scrollBlocked = useRef(false);
	const html = safeDocument.documentElement;
	const { body } = safeDocument;

	const blockScroll = (): void => {
		if (!body || !body.style || scrollBlocked.current) 
            return;
        if (document == undefined)
            return;

		const scrollBarWidth = window.innerWidth - html.clientWidth;
		const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;

		/**
		 * 1. Fixes a bug in iOS and desktop Safari whereby setting
		 *    `overflow: hidden` on the html/body does not prevent scrolling.
		 * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
		 *    scroll if an `overflow-x` style is also applied to the body.
		 */
		html.style.position = 'relative'; /* [1] */
		//html.style.overflow = 'hidden'; /* [2] */
		body.style.position = 'relative'; /* [1] */
		body.style.overflow = 'hidden'; /* [2] */
		body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

		scrollBlocked.current = true;
	};

	const allowScroll = (): void => {
		if (!body || !body.style || !scrollBlocked.current) return;

		html.style.position = '';
		html.style.overflow = '';
		body.style.position = '';
		body.style.overflow = '';
		body.style.paddingRight = '';

		scrollBlocked.current = false;
	};

	return {blockScroll, allowScroll};
};