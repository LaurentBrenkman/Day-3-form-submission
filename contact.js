function showData() {
    // DOM Obejct
    let name= document.getElementById("name").value
    let email= document.getElementById("email").value
    let phone= document.getElementById("phone").value
    let subject= document.getElementById("subject").value
    let message= document.getElementById("message").value
    
    // Clear Data
    document.getElementById ("name").value =""
    document.getElementById ("email").value =""
    document.getElementById ("phone").value =""
    document.getElementById ("subject").value =""
    document.getElementById ("message").value =""

    // Validation
    if (name == "") {
        return alert("Name input must not empty")
    } else if (email == "") {
        return alert("Email input must not empty")
    } else if (phone == "") {
        return alert("Phone input must not empty")
    } else if (subject == "") {
        return alert("Subject input must not empty")
    } else if (message == "") {
        return alert("Message input must not empty")
    } 

    // penerima 
    let emailReceiver = "rhomairama.dev@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${subject}, ${message}`
    a.click()

    let dataObject = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    }

    console.table(dataObject)

}