const apiRequest = async (url='',optionsObj=null,errMsg=null) => {
    try {
        const response = await fetch(url, optionsObj)
        console.log(response)
        if(!response.ok) throw Error("Please reload the page")
    } catch (error) {
        errMsg = error.message
    } finally {
        return errMsg
    }
}

export default apiRequest