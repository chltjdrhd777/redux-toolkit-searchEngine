<h1 align="center">TEMPLATE CLIENT ๐</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> ์ด๊ฒ์ ํํ๋ฆฟ ํด๋ผ์ด์ธํธ์๋๋ค

## Author

๐ค **Anderson**

- Website: https://chltjdrhd777.github.io/
- Github: [@chltjdrhd777@naver.com](https://github.com/chltjdrhd777@naver.com)
- Give a โญ๏ธ if this project helped you!

---

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<br/>
(_์ด๋ฌ๋ฉด ์ข๊ฒ ๋ค_)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">์ฌ์ฉ๋(ํน์ ์ฌ์ฉํ ) ์คํ๋ฆฌ์คํธ</h3>

- [ReduxToolkit](https://redux-toolkit.js.org/)
- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [EmotionCSS](https://emotion.sh/docs/introduction)
- [Bootstrap](https://getbootstrap.com)

---

## design structure

0. ์คํ์ผ์ ์คํ์ผ๋ก, ๊ธฐ๋ฅ์ ๊ธฐ๋ฅ์ผ๋ก ์ปดํฌ๋ํธ๋ฅผ ๊ตฌ๋ถํ์ฌ ๊ด์ฌ์ฌ๋ฅผ ๋ฐ๋ก๋๋ค
1. styled ํด๋์ index์๋ ์น ์ ์ฒด์์ ๊ณต์ฉ์ผ๋ก ์ฌ์ฉ๋  styled component๋ฅผ ์ ๋ฆฌํ๊ณ 
2. ๋์์ธ์ ์ธ ๋ณ๊ฒฝ์ ๊ทธ ๋ด๋ถ์์ class๋ฅผ ํตํด ์ ์ํจ์ ๋ฐ๋ผ ํ์์ ๋ฐ๋ผ bootstrap์ฒ๋ผ ํด๋์ค์ ๋ณ๊ฒฝ๋ง์ผ๋ก ๋์์ธ์ด ์ ๋์ ์ผ๋ก ๋ณ๊ฒฝ๋๊ฒ ํ๋ค
3. styled ํด๋ ์์ ๋ค์ด๋ฐ์ด ๋ ํ์ผ๋ค์ ๊ฐ route๋ฅผ ๋ปํ๋ฉฐ, ํด๋น ๋ด๋ถ์๋ index์ ๋ฒ ์ด์ค ์ปดํฌ๋ํธ๋ฅผ ๋ฌผ๋ ค๋ฐ์ ํด๋น ํ์ด์ง์์ ์ด๋ค ์ปดํฌ๋ํธ๊ฐ ์ฌ์ฉ๋๋์ง๋ฅผ ๊ด๋ฆฌํ๋ค.
4. ๋ํ media query๋ฅผ ๋ด๋ถ์ ๋ ์ผ๋ก์, ์ฌ์ฉ๋ ์ปดํฌ๋ํธ๋ค์ด ๋ฏธ๋์ด์ฟผ๋ฆฌ๋ฅผ ํตํด ์กฐ์ ๋๋๋ก ๋ง๋ ๋ค.
5. ๊ธฐ๋ฅ์ ์ธ ๋ถ๋ฆฌ๋ styled ์ธ๋ถ์ ๋ฐ๋ก ์ ์ํจ์ผ๋ก์, ๊ธฐ๋ฅ์  ์ฌํ์ฉ์ ๊ฟฐํ๋ค

---

### styled refactor principle

์คํ์ผ๋ง์ ์ํ ์ปดํฌ๋ํธ์ ๋ถ๋ฆฌ ๊ธฐ์ค์

1. ์์์ ๊น์ด๊ฐ 1์ด ๋จ์์ ๊ฒฝ์ฐ, ๋ถ๋ชจ๋ฅผ ์๋ฏธ๋จ์๋ก ๋ถ๋ฆฌํ๋ค

2. ์์์ ๊น์ด๊ฐ 1์ด์์ด๋ผ๋, ๋ง์ฝ ํด๋์ค๋ฅผ ํ์ฉํ ์คํ์ผ๋ง์ ํ  ๊ฒ์ด๋ผ๋ฉด(ex .class:nth-of-type(2) ์ ๊ฐ์ด ํด๋์ค๋ก ์์์ ๋ชจ์ผ๊ณ  ๊ฑฐ๊ธฐ์ ์์ฌํด๋์ค๋ฅผ ์ฐ๊ณ ์ถ๋ค๋ฉด) ๋ถ๋ชจ๋ฅผ ์๋ฏธ๋จ์๋ก ๋ถ๋ฆฌํ๋ค

3. ๋ถ๋ชจ๋ก๋ถํฐ ์ํ๋ฅผ ์ ๋ฌ๋ฐ์ ์๋ํ๊ฑฐ๋, ์๋๋ฉด ๋์์ธ์ธ ์๋ ๊ธฐ๋ฅ์ ์ด์ ์ ๋๊ณ  ๊ธฐ๋ฅ์ ์ธ ๋จ์๋ก ๋ฐ๋ก ๋ถ๋ฆฌํด์ผ ํ๋ค๋ฉด styled ํด๋๊ฐ ์๋ ์ธ๋ถ ํด๋์ ํด๋น Route ์ด๋ฆ์ผ๋ก ๋ง๋ค์ด์ง ํด๋ ์์๋ค๊ฐ ๋ฐ๋ก ์์ฑํ์ฌ ์ฌ์ฉ๋๊ณ ์๋ ์ถ์ฒ๋๋ก ๋ชจ์๋๋๋ค.

---

## Contact

My Email - [@google](chltjdrhd777@gmail.com) - chltjdrhd777@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
