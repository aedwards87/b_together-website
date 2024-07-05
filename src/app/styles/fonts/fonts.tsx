import localFont from 'next/font/local';

const fonts = localFont({
  src: [
    {
      path: 'ChronicleDeck-Black.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'ChronicleDeck-Black.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'ChronicleDeck-Black.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'ChronicleDeck-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'ChronicleDeck-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'ChronicleDeck-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'Bicyclette-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'Bicyclette-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Bold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'Bicyclette-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'Bicyclette-Light.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: 'Bicyclette-Light.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
});

export { fonts };

// const Typography = createGlobalStyle`
//   :root {
//     /* Family */
//     --fontPrimarySerif: 'Chronicle Deck-Black', Georgia, Times New Roman, serif;
//     --fontPrimarySansSerif: 'Bicyclette-Regular', Helvetica, Arial, sans-serif;

//     /* Size */
//     --fontSizeBase: 10px;
//     --fontSizeHero: 9.6rem;
//     --fontSizeLargeHeading: 6.4rem;
//     --fontSizeMediumHeading: 4.6rem;
//     --fontSizeSmallHeading: 3.6rem;
//     --fontSizeLargeText: 2.8rem;
//     --fontSizeMediumText: 2.4rem;
//     --fontSizeNormalText: 1.8rem;
//     --fontSizeSmallText: 1.4rem;
//     --fontSizeSmallestText: 1.2rem;
//     --fontSizeBody: var(--fontSizeNormal);

//     /* Weight */
//     --fontWeightLight: 300;
//     --fontWeightNormal: 400;
//     --fontWeightMedium: 500;
//     --fontWeightBold: 700;

//     /* Line height */
//     --lineHeight1: 1.1;
//     --lineHeight2: 1.2;
//     --lineHeight3: 1.3;
//     --lineHeight4: 1.4;
//     --lineHeight5: 1.5;
//     --lineHeightLarge: var(--lineHeight1);
//     --lineHeightMedium: var(--lineHeight2);
//     --lineHeightNormal: var(--lineHeight4);
//     --lineHeightSmall: var(--lineHeight5);

//     /* Coupled font styles */
//     --heroFont:  min(max(35px, 9vw), var(--fontSizeHero)) var(--fontSecondaryFamily);
//     --ctaFont: var(--fontWeightMedium) calc(var(--fontSizeBody) * 2) var(--fontFamily);
//     --inputFont: var(--fontWeightNormal) var(--fontSizeBody * 1.8) var(--fontFamily);

//     font-size: var(--fontSizeBase);
//   }

//   @media(min-width: 420px) {
//     :root {
//       --fontSizeBody: 1.8rem;
//       --fontSizeLarge: 2.2rem;
//       --fontSizeMedium: 2rem;
//       --fontSizeSmall: 1.6rem;
//       --fontSizeSmallest: 1.4rem;
//     }
//   }

//   @media(min-width: 980px) {
//     :root {
//       --heroFont:  min(max(39px, 4.1vw), var(--fontSizeHero)) var(--fontSecondaryFamily);
//     }
//   }

//   body {
//     font-family: var(--fontPrimarySansSerif);
//     font-size: var(--fontSizeBody);
//     line-height: var(--lineHeightNormal);
//   }

//   p,
//   a,
//   li,
//   span,
//   td,
//   blockquote,
//   cite {
//     letter-spacing: 0.3px;
//     line-height: var(--lineHeightNormal);
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     margin: 0;
//     font-family: inherit;
//     font-weight: inherit;
//     color: var(--colorBodyHeading);
//     > span {
//       line-height: var(--headingLineHeight);
//     }
//   }

//   h1 {
//     font-family: var(--fontPrimarySerif);
//     font-size: var(--fontSizeHero);
//     font-weight: var(--fontWeightBold);
//     line-height: var(--lineHeightLarge);
//     letter-spacing: -2px;
//   }

//   h2 {
//     font-size: var(--fontSizeLargeHeading);
//     line-height: var(--lineHeightLarge);
//   }

//   h3 {
//     font-size: var(--fontSizeMediumHeading);
//     line-height: var(--lineHeightMedium);
//   }

//   h4 {
//     font-size: var(--fontSizeSmallHeading);
//     line-height: var(--lineHeightMedium);
//   }

//   h5 {
//     font-size: var(--fontSizeSmallHeading);
//     line-height: var(--lineHeightMedium);
//   }

//   button {
//     font-size: calc(var(--fontSizeBody) + .2rem);
//   }

//   mark,
//   .mark {
//     background: var(--colorHighlight, yellow);
//     padding: 0 2px 2px 2px;
//     margin: 0;
//     display: inline;
//     line-height: 1;
//   }

//   .textCenter {
//     text-align: center;
//   }
// `;

// export { Typography, fonts };
