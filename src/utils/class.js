//import {theme} from './theme';
//TODO: caøyfolder
export const container = `
margin-left: auto;
margin-right: auto;
width: 50%;
@media (min-width: 375px) {
  width: 50%;
}
@media (min-width: 728px) {
  width: 60%;
}
@media (min-width: 992px) {
  width: 70%;
}
@media (min-width: 1200px){
  width: 80%;
}

}
`
//${({ theme }) => theme.flexCenter}
export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`
//${({ theme }) => theme.mixinTransition}
export const mixinTransition = props => `
transition-property: transform , opacity;
transition-duration: ${props ? props.duration : "0.3s"};
transition-timing-function: ease-in-out;
`
