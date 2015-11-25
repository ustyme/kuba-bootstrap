(function(){

	/*
	 * Simulation
	 */

	// Box slide simulation

	$(document.getElementById('box')).easeBox({
		boxes: ['box_1', 'box_2', 'box_3', 'box_4', 'box_5', 'box_6', 'box_7', 'box_8', 'box_9', 'box_10', 'box_11', 'box_12', 'box_13', 'box_14', 'box_15', 'box_16', 'box_17', 'box_18', 'box_19', 'box_20', 'box_21', 'box_22', 'box_23', 'box_24', 'box_25'],
		left: 25,
		offset: 25,
		force: 4
	});

	$(document.getElementById('box')).initialize();

	// Setup empty box

	$(document.getElementById('dyn_2')).easeBox({
		boxes: [],
		left: 25,
		offset: 25,
		force: 4
	});

	// add box every 3 sec

	var count = 0;

	window.setInterval(function(){

		var box = $('<div class="ease-box" id="' + 'dyn_' + count + '">' + count + '</div>');
		count++;

		$('#dyn_2').append(box);

		console.log('add box', box);

		$(document.getElementById('dyn_2')).addEaseBox(box);
		$(document.getElementById('dyn_2')).initialize();
	}, 3000);
})();