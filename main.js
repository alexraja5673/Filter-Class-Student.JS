//filter
		let clas=[
				{studentName:"jack",
				 studentClass:5,
				 studentSection:"a"
				},
				{studentName:"tom",
				 studentClass:6,
				 studentSection:"a"
				},
				{studentName:"ricky",
				 studentClass:6,
				 studentSection:"b"
				},
				{studentName:"john",
				 studentClass:8,
				 studentSection:"b"
				},
				{studentName:"jerry",
				 studentClass:0,
				 studentSection:"a"
				},
				{studentName:"henry",
				 studentClass:2,
				 studentSection:"b"
				},
				{studentName:"stephen",
				 studentClass:1,
				 studentSection:"a"
				},
		]
		
		//1
		clas.filter(function (find){
			if(find.studentSection=="a"){
				console.log(find);
			}
		 });
		
		 //2 
		// clas.sort(function (a,b){
			// return a.studentClass - b.studentClass ;
		// })
		// clas.forEach((e) =>{
		 // console.log(e);
		// });
		