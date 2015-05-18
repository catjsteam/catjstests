var my = {};

my.snapshot = function() {
    
    _catjs.plugin.get("dom").actions.snapshot("#paper", "mySnapshotName");
    
};