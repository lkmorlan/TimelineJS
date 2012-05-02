// @codekit-prepend "VMM.Timeline.js";
/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		date: {
			month: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
			month_abbr: ["Ene.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ago.","Sep.","Oct.","Nov.","Dic."],
			day: ["Domingo","Lunes","Martes","iércoles","Jueves","Viernes","Sábado"],
			day_abbr: ["Dom.","Lun.","Mar.","Mié.","Jue.","Vie.","Sáb."],
		}, 
		dateformats: {
			year: "yyyy",
		    month_short: "mmm",
		    month: "mmmm yyyy",
		    full_short: "d mmm",
		    full: "d mmmm yyyy",
		    time_no_seconds_short: "HH:MM",
		    time_no_seconds_small_date: "HH:MM'<br/><small>'d mmmm yyyy'</small>'",
		    full_long: "dddd',' d mmm yyyy 'um' HH:MM",
		    full_long_small_date: "HH:MM'<br/><small>'dddd',' d mmm yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Cargando... ",
		    return_to_title: "Volver al título",
		    expand_timeline: "Enlargar la cronología",
		    contract_timeline: "Reducir la cronología"
		}
	}
}