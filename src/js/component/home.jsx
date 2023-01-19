import React, {useState} from "react";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState("");
	const [listaTareas, setListaTareas] = useState([]);
	const [noTareas, setMensaje] = useState("");

	function handleTareas(e){
		if(e.key === "Enter"){
			e.preventDefault()
			if(tareas === ""){
				alert("Please add a task");
			} else{
				setListaTareas([...listaTareas, tareas]);
				setMensaje("visually-hidden");
				setTareas("");
			}
		}
	}
	
	function eliminarTareas(id){
		setListaTareas(listaTareas.filter((tarea,index) => index !== id));
		if (listaTareas.length === 1){
			setMensaje("");
		}
	}

	return (
		<div className="text-left w-50 mx-auto mt-5">
			<h1 className="text-center fw-light text-purple-500 fs-1 mb-2">todos</h1>
			<ul className="list-group list-group">
				<li className="list-group-item px-5">
					<input className="w-100 border border-0 fs-5" type="text" name="todos" id="todos" placeholder="What needs to be done?" onChange= {(e)=>setTareas(e.target.value)} value={tareas} onKeyDown={handleTareas}/>
				</li>
				{listaTareas.map((tarea, id) => <li id="cruz" className="list-group-item fs-5 text-left px-5 d-flex justify-content-between" key={id}>{tarea}<button id="eliminarcruz" type="button" className={"btn-close fs-6 mt-1"} aria-label="Close" onClick={() => eliminarTareas(id)} ></button></li>)}
				<li className="list-group-item text-left fs-6 fw-light text-black-50">{listaTareas.length} item left</li>
			</ul>
		</div>
	);
};

export default Home;