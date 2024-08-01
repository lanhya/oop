class Student{
    private firstname!: string;
    private lastname!: string;
    private age!: number;

    
    setFirstname(fname: string) {
        this.firstname=fname
    }
    setLastname(lname: string) {
        this.lastname=lname
    }
    setAge(age: number) {
        this.age=age
    }
    getFirstname(): string{
        return this.firstname
    }
    getLastname(): string{
        return this.lastname
    }
    getAge(): number{
        return this.age
    }
}
let ob = new Student()
ob.setFirstname("Sok");
ob.setLastname("Seyha");
ob.setAge(20)
console.log(ob.getFirstname())
console.log(ob.getLastname())

