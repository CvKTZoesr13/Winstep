
// LÀM VIỆC VỚI CHUỖI

var myString = 'Hoc JS JS JS tai F8!';
//keyword: Javscript string methods

// 1. Length 
// console.log(myString.length)

// 2. Find index
console.log(myString.indexOf('JS'));
// console.log(myString.toLowerCase())
var languages = [
    'JS',
    'PHP',
    'RUBY'
]
var stt = languages.length
// console.log (languages[stt] )

var isConfirm = confirm('Message?');


console.log(myString.search('JS'));
// Làm bài tập tại đây
function checkExistIdol(list, idol){
    if(list.includes(idol))
    {
        return true
    }
    return false
}
// Object constructor
var User = function (firstName, lastName, avatar) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function () { 
        return `${this.firstName} ${this.lastName}`      
    }
}

User.prototype.className = 'F8'
User.prototype.getClassName = function () {
    return this.className;
    
}

var author = new User('Sơn', 'Đặng', 'avatar1')
var user = new User('Văn', 'Đức', 'avatar2')

author.title = 'Chia sẻ dạo tại F8!'
user.comment = 'Đây là một dòng cmt!!'
console.log(author.lastName)
console.log(user.constructor)
console.log(user.className)


// Object prototype - basic

// 1. là công cụ cấu thành nên một đối tượng // bổ trợ cho object constructor

// Đối tượng date

var date = new Date();

console.log(date.getFullYear)
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();


let timestamp = Math.floor(Date.now()  / 1000);
console.log(timestamp)

function getCurrentYear () {
    let FullYear = year
    console.log(FullYear)
    return FullYear;
}
getCurrentYear();



function run(a) {
    var a = 8.4;
     
console.log(Math.trunc(a))
}

run(); 
console.log('' == 0 ? 2 : 1)

// Some champions in LoL

var champions = [
    'Aatrox',
    'Ahri',
    'Akacua',
    'Akshan',
    'Alistar',
    'Amumu',
    'Anivia',
    'Annie',
    'Aphelios',
    'Ashe',
    'Phế long thượng giới',
    'Azir',
    'Bard',
    'Blitzcrank',
    'Brand',
    'Braum',
    'Caitlyn',
    'Camille',
    'Cassiopeia the Serpent\'s Embrace',
    'Cho\'Gath the Terror of the Void',
    'Yasuo the Unforgiven',
    'Susan 0175'
]
var lengthArray = champions.length;
for (var i = 0; i < lengthArray; i++) {
    console.log(champions[i]);
}



var courses = [
{
    id: 1,
    name: 'Javascript',
    coin: 250
},
{
    id: 2,
    name: 'HTML, CSS',
    coin: 0
},
{
    id: 3,
    name: 'Ruby',
    coin: 0
},
{
    id: 4,
    name: 'PHP',
    coin: 400
},
{
    id: 5,
    name: 'ReactJS',
    coin: 500
},
]

courses.forEach(function (course, index) {
    console.log(index, course)
});

function courseHandler(course) {
    console.log(course)
}
var newCourses = courses.map(courseHandler);