<script type="text/javascript">
var button = document.getElementById('hideshow'); 

button.onclick = function() {
    var div = document.getElementById('grid_pres');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
</script>
