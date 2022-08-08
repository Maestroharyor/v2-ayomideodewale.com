export const themeChange = (props:any) => {
    const htmlApp = document.querySelector("html") as HTMLElement
    if(props.theme.lightMode){
        htmlApp.classList.remove("dark")
    } else{
        htmlApp.classList.add("dark")
    }
}

export const themeOSLoad = (props:any, dispatch:Function, setDarkModeTheme:Function, setLightModeTheme:Function) => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        if(props.theme.lightMode){
          dispatch(setDarkModeTheme())  
        }
        
    } else{
        if(!props.theme.lightMode){
          dispatch(setLightModeTheme())  
        }
        
    }
}
