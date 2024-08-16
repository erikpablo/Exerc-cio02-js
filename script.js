let students = [
    {
      name: "Erik",
      score1: 5,
      score2: 4,
    },
    
    {
      name: "Emilly",
      score1: 10,
      score2: 7,
    },
    
    {
      name: "Max",
      score1: 6,
      score2: 4,
    },
    
    {
      name: "Alex",
      score1: 8.6,
      score2: 10,
    },
    
]


function calAverage(students) {
   const average = (students.score1 + students.score2) / 2
    return average;
}

for(let student of students) {
    const average = calAverage(student)
    // let approved = average >= 6 ? `Parabéns, ${student.name}! Você foi aprovado(a no curso!` : `Não foi dessa vez, ${student.name}! Tente novamente`
    alert(`
        A media do(a) aluno(a) ${student.name} é; ${average}
        ${approved}
        `)
}

