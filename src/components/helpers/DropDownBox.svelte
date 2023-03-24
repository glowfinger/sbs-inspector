<style>
	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>
<script>
	import Dropdown from 'sv-bootstrap-dropdown';
	let dropdownTrigger;

</script>

<Dropdown triggerElement={dropdownTrigger}>
<button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    bind:this={dropdownTrigger}
    >
    Select Type
</button>
<div slot="DropdownMenu">
     <button class="dropdown-item" type="button">thermo_valve</button>
     <button class="dropdown-item" type="button">shower_descaling</button>
</div>
</Dropdown>

