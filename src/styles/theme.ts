export const color = {
  $black: '#000',
  $gray800: '#555',
  $gray500: '#828282',
  $gray300: '#DEDEDE',
  $gray100: '#F0EFF3',
  $blue: '#1933BA',
}

export const text = {
  $headline1: `
    font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  letter-spacing: -0.02em;
  `,
  $headline2: `
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.02em;
  `,
  $headline3: `
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
  `,
  $headline4: `
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
  `,
  $body1: `
    font-size: 16px;
    line-height: 180%;
    letter-spacing: -0.02em;
  `,
  $body2: `
    font-size: 14px;
    line-height: 180%;
    letter-spacing: -0.02em;
  `,
  $caption: `
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;
  `,
}

const size = {
  desktop: '1440px',
  laptop: '1024px',
  tablet: '640px',
  mobile: '320px',
}

export const media = {
  desktop: `@media only screen and (max-width: ${size.desktop})`,
  laptop: `@media only screen and (max-width: ${size.laptop})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  mobile: `@media only screen and (max-width: ${size.mobile})`,
}
