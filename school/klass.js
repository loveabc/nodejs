var student=require('./student.js')
var teacher=require('./teacher.js')

var add=function(teacherName,studentNames){
	teacher.addTeacher(teacherName)
	studentNames.forEach(function(item,index){
		student.addStudent(item)
	})
}

exports.addTeacherAndStudents=add