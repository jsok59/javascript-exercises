const findTheOldest = function(people) {
    return people.reduce( (max, person) => {
        let convert_age = (person) => {
            if (person.yearOfDeath == undefined) {
                return new Date().getUTCFullYear() - person.yearOfBirth; 
            } else {
                return person.yearOfDeath - person.yearOfBirth;
            }
        };
        let age = convert_age(person);
        if (age > convert_age(max)) {
            return person
        } else return max;

    },{yearOfBirth: 0, yearOfDeath: 0})
}

// Do not edit below this line
module.exports = findTheOldest;
