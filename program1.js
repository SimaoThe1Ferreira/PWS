let commands_list = new Array(32)
let number_typed_commands = 0
let pointer0 = 0
let unset = "unset"
let white = "white"
let large = "large"
let monospace = "monospace"
let black = "black"
let none = "none"
let one_hundred = "100%"
let eigth_pixels = "8px"
let table0 = document.createElement("table")
let text_box0
let row0
let cell0
let cell1
let cell2
let cell3
document.body.style.color = white
document.body.style.fontSize = large
document.body.style.fontFamily = monospace
document.body.style.background = black
document.body.style.margin = unset
create_standart_row()
document.body.appendChild(table0)
function create_standart_row() {
        text_box0 = document.createElement("input")
        row0 = table0.insertRow(-1)
        cell0 = row0.insertCell(-1)
        cell1 = row0.insertCell(-1)
        cell2 = row0.insertCell(-1)
        cell3 = row0.insertCell(-1)
        table0.style.border = none
        table0.style.width = one_hundred
        table0.style.borderCollapse = "collapse"
        cell0.style.padding = unset
        cell0.style.color = "green"
        cell0.style.width = "128px"
        cell0.innerHTML = "SimaoThe1Ferreira"
        cell1.style.padding = unset
        cell1.style.width = eigth_pixels
        cell1.innerHTML = ":"
        cell2.style.padding = unset
        cell2.style.width = eigth_pixels
        cell2.innerHTML = "$"
        cell3.appendChild(text_box0)
        cell3.style.width = one_hundred
        text_box0.name = "text_box0"
        text_box0.title = "text_box0"
        text_box0.addEventListener("keydown", function() {
		switch (event.key) {
			case 'Enter':
				let row1 = table0.insertRow(-1)
				let cell4 = row1.insertCell(-1)
				let msg_comand_not_found = "Command not found"
                        	cell3.innerHTML = text_box0.value
				cell4.colSpan = "5"
				if (text_box0.value !== "") {
					let counter0 = number_typed_commands
					let parameters = new Array(3)
					let counter1 = 0
					let counter2 = 0
					let more_than_3_args = false
					pointer0 = 0
					do {
						if (counter1 < 3) {
							if (text_box0.value[counter0] === ' ') {
								parameters[counter1] = text_box0.value.substring(counter2, counter0)
								counter1++
								counter2 = counter0
								counter2++
							}
							counter0++
						} else {
							more_than_3_args = true
							break
						}
					} while (counter0 < text_box0.value.length)
		        		parameters[counter1] = text_box0.value.substring(counter2, counter0)
                       			if (!more_than_3_args) {
						if (number_typed_commands < 31) {
							number_typed_commands++
						}
						commands_list[0] = text_box0.value
						do {
							commands_list[counter0 + 1] = commands_list[counter0]
							counter0--
						} while (counter0 !== -1)
						commands_list[0] = ""
						switch (parameters[0]) {
							case "help":
								if (counter1 === 0) {
									cell4.innerHTML = 'Try:<br>-> "ls" to show the downloadable files<br>-> "download" followed by the file name to download it<br>-> "clear" to clear the screen'
								} else {
									cell4.innerHTML = msg_comand_not_found
								}
								create_standart_row()
                       	                			text_box0.focus()
								break
							case "ls":
								if (counter1 === 0) {
									cell4.innerHTML = "POS.zip PTE.zip"
								} else {
									cell4.innerHTML = msg_comand_not_found
								}
								create_standart_row()
                       	                               		text_box0.focus()
								break
							case "download":
								let exists0 = true
								switch (parameters[1]) {
									case "POS.zip":
										break
									case "PTE.zip":
										break
									default:
										exists0 = false
								}
								if (counter1 === 1 && exists0 === true) {
									let link = document.createElement('a')
									link.href = parameters[1]
									link.download = parameters[1]
									link.click()
									link.remove()
								} else {
									cell4.innerHTML = msg_comand_not_found
								}
								create_standart_row()
                       	                   			text_box0.focus()
								break
							case "clear":
								if(counter1 === 0) {
									table0.innerHTML = ""
								} else {
									cell4.innerHTML = msg_comand_not_found
								}
								create_standart_row()
               	                                       		text_box0.focus()
								break
							case "save":
								if(counter1 === 1 && parameters[1] !== "") {
									let form0 = document.createElement("form")
               	        	                                	let submit_button0 = document.createElement("input")
               	        	                        		submit_button0.type = "submit"
									form0.method = "post"
               	        	                        	        form0.appendChild(submit_button0)
									document.body.appendChild(form0)
               	        	                        	        submit_button0.name = "submit_button0"
									submit_button0.click()
								} else {
									cell4.innerHTML = msg_comand_not_found
								}
								create_standart_row()
               	                                        	text_box0.focus()
								break
                	       	                	case "edit":
                	        	                       	if(counter1 === 1 && parameters[1] !== "") {
									table0.innerHTML = ""
									row0 = table0.insertRow(-1)
                                                                        row1 = table0.insertRow(-1)
                                                                        row0.style.background = "white"
                                                                        row0.style.color = "black"
									cell0 = row0.insertCell(-1)
                                                                        cell1 = row0.insertCell(-1)
                                                                        cell2 = row0.insertCell(-1)
                                                                        cell0.innerHTML = "Text editor"
                                                                        cell0.style.width = "33%"
                                                                        cell1.innerHTML = parameters[1]
                                                                        cell1.style.textAlign = "center"
                                                                        cell1.style.width = "33%"
                                                                        cell2.style.width = "33%"
                                                                        cell3 = row1.insertCell(-1)
                                                                        cell3.colSpan = 3
                	        	                               	let multiline_textbox0 = document.createElement("textarea")
                	        	                               	multiline_textbox0.addEventListener('keydown', function() {
										if (event.ctrlKey && event.key === 'x') {
											event.preventDefault()
											document.body.innerHTML = ""
                                                                        		table0 = document.createElement("table")
                                                                        		document.body.appendChild(table0)
											create_standart_row()
                                                                        		text_box0.focus()
										}
									}, false)
                                                                        multiline_textbox0.style.height = (window.innerHeight - 27) + "px"
                	        	                               	multiline_textbox0.style.resize = none
                	        	                               	multiline_textbox0.style.minHeigth = "1px"
                	        	                               	multiline_textbox0.style.overflow = "auto"
									multiline_textbox0.style.mozBoxSizing = "border-box"
									multiline_textbox0.style.boxSizing = "border-box"
                        	                                	multiline_textbox0.style.background = black
               	         	                                	multiline_textbox0.style.outline = none
               	         	                                	multiline_textbox0.style.border = "none"
               	         	                                	multiline_textbox0.style.padding = unset
               	         	                                	multiline_textbox0.style.margin = unset
               	         	                                	multiline_textbox0.style.color = white
               	         	                                	multiline_textbox0.style.fontSize = large
               	                                                	multiline_textbox0.style.msOverflowStyle = none
                                                                        multiline_textbox0.style.scrollbarWidth = none
                                                                        multiline_textbox0.cols = window.innerWidth / 9
               	         	                                	cell3.appendChild(multiline_textbox0)
              	         	                                	multiline_textbox0.name = "multiline_textbox0"
              	         	                                	multiline_textbox0.title = "multiline_textbox0"
									multiline_textbox0.focus()
									event.preventDefault()
								} else {
									cell4.innerHTML = msg_comand_not_found
									create_standart_row()
                                                                	text_box0.focus()
								}
								break
							default:
								cell4.innerHTML = msg_comand_not_found
								create_standart_row()
                                                               	text_box0.focus()
						}
					} else {
						cell4.innerHTML = msg_comand_not_found
						create_standart_row()
                            		        text_box0.focus()
					}
				} else {
					cell4.innerHTML = msg_comand_not_found
					create_standart_row()
                                        text_box0.focus()
				}
				break
			case 'ArrowUp':
				if (pointer0 !== number_typed_commands) {
                       			do {
				        	pointer0++
                               		} while(commands_list[pointer0] === commands_list[pointer0 + 1])
					text_box0.value = commands_list[pointer0]
                                	event.preventDefault()
                                	text_box0.setSelectionRange(text_box0.value.length, text_box0.value.length)
				}
				break
			case 'ArrowDown':
				if (pointer0 !== 0) {
                                	do {
				        	pointer0--
                                	} while(commands_list[pointer0] === commands_list[pointer0 - 1])
					text_box0.value = commands_list[pointer0]
				}
				break
			default:
				commands_list[0] = text_box0.value
				if(event.key !== "Backspace") {
					commands_list[0] += event.key
				} else {
					commands_list[0] = commands_list[0].substring(0, commands_list[0].length - 1)
				}
				pointer0 = 0
		}
	})
        text_box0.autofocus = true
        text_box0.style.outline = none
        text_box0.style.color = white
        text_box0.style.fontSize = large
        text_box0.style.fontFamily = monospace
        text_box0.style.background = black
        text_box0.style.margin = unset
        text_box0.style.padding = unset
        text_box0.style.border = none
        text_box0.style.display = "flex"
        text_box0.style.width = one_hundred
        text_box0.style.caretColor = white
}
