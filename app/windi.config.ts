import { defineConfig ,  } from "windicss/helpers"


export default  defineConfig({
    
    plugins: [
        require("windicss/plugin/forms"),
        require("windicss/plugin/scroll-snap"),
    ]
})