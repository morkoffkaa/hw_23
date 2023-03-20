class Student {
    constructor (firstName, lastName, yearBirthday, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirthday = yearBirthday;
        this.marks = marks;
    }

    meanMark = 0;
    amPresent = 0;
    attendance = [];

    getAge() {
        console.log(`${this.firstName} - ${2023 - this.yearBirthday} рік/років`);
    }

    getMeanMark() {
        this.meanMark = this.marks.reduce((prev, current) => prev + current, 0) / this.marks.length;
        console.log(this.meanMark);
    }

    present() {
        (this.attendance.length < 25) ? this.attendance.push(true) : console.log ("Ви завершили курс");
    }

    absent() {
        (this.attendance.length < 25) ? this.attendance.push(false) : console.log ("Ви завершили курс");
    }

    summary() {
        this.attendance.forEach(item => {
            if(item === true) {
                this.amPresent++;
            }
        })
        
        if(this.meanMark > 90 && this.amPresent / this.attendance.length > 0.9) {
            return "Молодець";
        } else if(this.meanMark < 90 || this.amPresent / this.attendance.length < 0.9) {
            return "Добре, але можна краще.";
        } else if (this.meanMark < 90 && this.amPresent / this.attendance.length < 0.9) {
            return "Редиска!";
        } else {
            return "твоя оцінка";
        }
    }
}

const vlad = new Student("Vlad", "Ivanov", 2003, [100,90,100,99,93,89]);

vlad.getAge();
vlad.getMeanMark();
vlad.present();
vlad.absent();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
console.log(vlad.summary());

const yana = new Student("Yana", "Orlova", 2001, [74,90,100,79,93,89]);

yana.getAge();
yana.getMeanMark();
vlad.present();
yana.absent();
vlad.present();
yana.absent();
vlad.present();
vlad.present();
yana.absent();
vlad.present();
vlad.present();
console.log(yana.summary());