import './src/styles/global.css'

export const onClientEntry = () => {
    window.onload = () => {
        console.log('loaded');
    }
}
