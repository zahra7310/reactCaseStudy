const teacher={
    firstName:'Zahra',
    lastName:'Kalbasi'
}

const showInfo=()=>`${teacher.firstName} ${teacher.lastName}`

class course{
    #name
    #duretion 

    constructor(name,duretion){
        this.#name=name 
        this.#duretion=duretion
    }
    
    get show(){
        return `Course :${this.#name} , Duration: ${this.#duretion}`
    }
}

export { showInfo , course };