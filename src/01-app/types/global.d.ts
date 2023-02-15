// объявляю типы файлов со стилями, для импорта
declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.css' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}

// объявляю типы файлов (assets), для импорта
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
	import React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

// объявляю типы глобальных переменных
declare const IS_DEV: boolean;
