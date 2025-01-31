#include "./library.jsx";

app.beginUndoGroup("Retime");
var expend_duration = function() {
  var lastest_time = 0;
  new Array(current_comp.numLayers).fill(null).forEach(function(arr, i){
    var out_point = current_comp.layer(i + 1).outPoint;
    out_point > lastest_time ? lastest_time = out_point : undefined;
  });
  current_comp.duration = lastest_time;
  current_comp.workAreaDuration = lastest_time;
}

var confirm_duration_change = function() {
  var confirm_duration = confirm("Do you want to change the work duration area for " + current_comp.name);
  confirm_duration ? expend_duration() : undefined;
};

var handle_confirmation = function() {
  try{
    confirm_duration_change();
  } catch(e) {
    alert("Select a composition");
  }
};
handle_confirmation();
app.endUndoGroup();
