(function () {
	const example = document.getElementById("example");
	const cw1 = document.getElementById("cw1");
	const cw1poj = document.getElementById("cw1poj");
	const cw1nowy = document.getElementById("cw1nowy");
	const cw2 = document.getElementById("cw2");
	const cw3 = document.getElementById("cw3");
	const answer = document.getElementById("answer");

	example.addEventListener("click", function () {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((array) => {
				console.log(array);
				answer.innerHTML = JSON.stringify(array);
			});
	});

	cw1.addEventListener("click", function () {
		answer.innerHTML = "Loading...";
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/posts")
				.then((response) => response.json())
				.then((array) => {
					console.log(array);
					answer.innerHTML = "";
					for (let i = 0; i < array.length; i++) {
						answer.innerHTML += `
		                        <div>Title: ${array[i].title}</div>
		                        <div>Body: ${array[i].body}</div>
		                        <div>Id: ${array[i].id}</div>
		                        <div>UserID: ${array[i].userId}</div>
		                        <br>`;
					}
				});
		}, 500);
	});

	cw1poj.addEventListener("change", function () {
		answer.innerHTML = "Loading...";
		setTimeout(() => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${this.value}`)
				.then((response) => response.json())
				.then((post) => {
					console.log(post);
					answer.innerHTML = `
		                        <div>Title: ${post.title}</div>
		                        <div>Body: ${post.body}</div>
		                        <div>Id: ${post.id}</div>
		                        <div>UserID: ${post.userId}</div>
		                        <br>`;
				});
		}, 500);
	});

	cw1nowy.addEventListener("click", function () {
		answer.innerHTML = "Processing...";
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/posts", {
				method: "POST",
				body: JSON.stringify({
					title: "Lorem ipsum",
					body: "Dolor motes",
					userId: 422,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(
					(json) => (answer.innerHTML = `Dodano nowy post o ID = ${json.id}`),
				);
		}, 500);
	});

	cw2.addEventListener("click", function () {
		//TODO
	});

	cw3.addEventListener("click", function () {
		//TODO
	});
})();
