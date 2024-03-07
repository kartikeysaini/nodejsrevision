const greeting = (name)=>{
    console.log(`Hello ${name}`)
}

greeting('kartikey')
greeting()

const greetingDefaultParam = (name="kartikey")=>{
    console.log(`Hello ${name}`)
}

greetingDefaultParam('Bhuvan')
greetingDefaultParam()