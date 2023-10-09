export const response = (data, messsage, success) => {
    return JSON.stringify({
        data,
        messsage,
        success
    })
}
