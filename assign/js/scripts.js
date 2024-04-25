/* created purchase search table */
purchaseSearchTableCreatorFile = 'model/purchase/purchaseSearchTableCreator.php';
/* created customer search table */
customerSearchTableCreatorFile = 'model/customer/customerSearchTableCreator.php';
/* created item search table */
itemSearchTableCreatorFile = 'model/item/itemSearchTableCreator.php';
/* created vendor search table */
vendorSearchTableCreatorFile = 'model/vendor/vendorSearchTableCreator.php';
/* created sale search table */
saleSearchTableCreatorFile = 'model/sale/saleSearchTableCreator.php';


/* created purchase report table */
purchaseReportTableCreatorFile = 'model/purchase/purchaseReportTableCreator.php';
/* created customer report table */
customerReportSearchTableCreatorFile = 'model/customer/customerReportTableCreator.php';
/* created item report table */
itemReportTableCreatorFile = 'model/item/itemReportTableCreator.php';
/* created vendor report table */
vendorReportTableCreatorFile = 'model/vendor/vendorReportTableCreator.php';
/* created sale report table */
saleReportTableCreatorFile = 'model/sale/saleReportTableCreator.php';


/* populate return last vendorID */
vendorLastInsertedFile = 'model/vendor/populateLastVendor.php';
/* populate return last customerID */
customerLastInsertedFile = 'model/customer/populateLastCustomer.php';
/* populate return last purchaseID */
purchaseLastInsertedFile = 'model/purchase/populateLastPurchase.php';
/* populate return last saleID */
saleLastInsertedFile = 'model/sale/populateLastSale.php';
/* populate return last productID */
productItemLastInsertedFile = 'model/item/populateLastProduct.php';


/* return purchaseID */
showPurchaseIDAdviseFile = 'model/purchase/purchaseIDAdviseList.php';
/* return saleID */
showSaleIDAdviseFile = 'model/sale/saleIDAdviseList.php';
/* return vendorID */
showVendorIDAdviseFile = 'model/vendor/vendorIDAdviseList.php';
/* return customerID */
showCustomerIDAdviseFile = 'model/customer/customerIDAdviseList.php';
/* return customerID for sale */
showSaleCustomerIDAdviseFile = 'model/sale/saleCustomerIDAdviseList.php';


/* return itemNumber */
showItemNumberAdviseFile = 'model/item/itemNumberAdviseList.php';
/* return itemImageNumber  */
showItemImageNumberAdviseFile = 'model/item/itemImageNumberAdviseList.php';
/* return itemNubmer for purchase */
showPurchaseItemNumberAdviseFile = 'model/purchase/purchaseItemNumberAdviseList.php';
/* returns itemnumber for sale */
showSaleItemNumberAdviseFile = 'model/sale/saleItemNumberAdviseList.php';
/* return itemNames */
showItemNameAdviseFile = 'model/item/itemNameAdviseList.php';


/* return stock */
getItemStockFile = 'model/item/getItemStock.php';
/* return item name */
getItemNameFile = 'model/item/getItemName.php';
/* update image */
updateImageFile = 'model/image/updateImage.php';
/* delete image */
deleteImageFile = 'model/image/deleteImage.php';


/* create purchase table */
purchaseFilteredReportCreatorFile = 'model/purchase/purchaseFilteredReportCreator.php';
/* create sale table */
saleFilteredReportCreatorFile = 'model/sale/saleFilteredReportCreator.php';

$(document).ready(function(){
	$('.chosenSelect').chosen({ width: "95%"});
	
	/* initiate tooltip */
	/* call function button click */
	$('.invTooltip').tooltip(); 
	
	$('#addCustomer').on('click', function(){
		addCustomer();
	});
	
	$('#addVendor').on('click', function(){
		addVendor();
	});
	
	$('#addItem').on('click', function(){
		addItem();
	});
	
	$('#addPurchase').on('click', function(){
		addPurchase();
	});
	
	$('#addSale').on('click', function(){
		addSale();
	});
	
	$('#updateItem').on('click', function(){
		updateItem();
	});
	
	$('#updateCustomer').on('click', function(){
		updateCustomer();
	});
	
	$('#updateVendor').on('click', function(){
		updateVendor();
	});
	
	$('#updatePurchase').on('click', function(){
		updatePurchase();
	});
	
	$('#updateSale').on('click', function(){
		updateSale();
	});
	
	$('#deleteItem').on('click', function(){
		bootbox.confirm('Are you sure you want to delete?', function(result){
			if(result){
				deleteItem();
			}
		});
	});
	
	$('#deleteCustomer').on('click', function(){
		
		bootbox.confirm('Are you sure you want to delete?', function(result){
			if(result){
				deleteCustomer();
			}
		});
	});
	

	$('#deleteVendor').on('click', function(){

		/* alert confirm  before delete */
		bootbox.confirm('Are you sure you want to delete?', function(result){
			if(result){
				deleteVendor();
			}
		});
	});
	
	
	$('#itemName').keyup(function(){
		showSuggestions('itemName', showItemNamesFile, 'itemNameAdviseDiv');
	});
	
	$(document).on('click', '#itemNameAdviseList li', function(){
		$('#itemName').val($(this).text());
		$('#itemNameAdviseList').fadeOut();
	});
	

	$('#itemNumber').keyup(function(){
		showSuggestions('itemNumber', showItemNameAdviseFile, 'itemNumberAdviseDiv');
	});
	

	$(document).on('click', '#itemNumberAdviseList li', function(){
		$('#itemNumber').val($(this).text());
		$('#itemNumberAdviseList').fadeOut();
		getPopulateItemNumber();
	});
	
	/* list item number from sale */
	$('#saleItemNumber').keyup(function(){
		showSuggestions('saleItemNumber', showSaleItemNumberFile, 'saleItemNumberAdviseDiv');
	});
	
	/* select item number */
	$(document).on('click', '#saleItemNumberAdviseList li', function(){
		$('#saleItemNumber').val($(this).text());
		$('#saleItemNumberAdviseList').fadeOut();
		getPopulateSaleItemNumber();
	});
	
	/* list item number text box */
	$('#itemImageNumber').keyup(function(){
		showSuggestions('itemImageNumber', showItemNumberAdvisebFile, 'itemImageNumberAdviseDiv');
	});
	
	/* select item Image number */
	$(document).on('click', '#itemImageNumberAdviseList li', function(){
		$('#itemImageNumber').val($(this).text());
		$('#itemImageNumberAdviseList').fadeOut();
		getItemName('itemImageNumber', getItemNameFile, 'itemImageName');
	});
	
	/* clear item */
	$('#itemClear').on('click', function(){
		$('#imageContainer').empty();
	});
	
	/* clear image form sale */
	$('#saleClear').on('click', function(){
		$('#saleImageContainer').empty();
	});
	
	/* refresh purchase report */
	$('#purchaseFilterClear').on('click', function(){
		reportsPurchaseTableCreator('purchaseReportTableDiv', purchaseReportCreatorFile, 'purchaseReportTable');
	});
	
	/* refresh sale report */
	$('#saleFilterClear').on('click', function(){
		reportsSaleTableCreator('saleReportTableDiv', saleReportCreatorFile, 'saleReportTable');
	});
	
	/* list item number form purchase */
	$('#purchaseItemNumber').keyup(function(){
		showSuggestions('purchaseItemNumber', showPurchaseItemNumberFile, 'purchaseItemNumberAdviseDiv');
	});
	
	/* remove item nubmer from purchase */
	$(document).on('click', '#purchaseItemNumberAdviseList li', function(){
		$('#purchaseItemNumber').val($(this).text());
		$('#purchaseItemNumberAdviseList').fadeOut();
		
		/* display item name */
		getItemName('purchaseItemNumber', getItemNameFile, 'purchaseItemName');
		
		/* display current stock */
		getPopulateItemStock('purchaseItemNumber', getItemStockFile, 'purchaseCurrentStock');
	});
	
	/* list customer  */
	$('#customerID').keyup(function(){
		showSuggestions('customerID', showCustomerIDAdviseFile, 'customerIDAdviseDiv');
	});
	
	/* remove customer */
	$(document).on('click', '#customerIDAdviseList li', function(){
		$('#customerID').val($(this).text());
		$('#customerIDAdviseList').fadeOut();
		getPopulateCustomer();
	});
	
	/* list customer from sale */
	$('#saleCustomerID').keyup(function(){
		showSuggestions('saleCustomerID', showSaleCustomerIDAdviseFile, 'saleCustomerIDAdviseDiv');
	});
	
	/* remove customer  */
	$(document).on('click', '#saleCustomerIDAdviseList li', function(){
		$('#salecustomerID').val($(this).text());
		$('#saleCustomerIDAdviseList').fadeOut();
		getPopulateSaleCustomerID();
	});
	
	/* list vendor */
	$('#vendorID').keyup(function(){
		showSuggestions('vendorID', showVendorIDAdviseFile, 'vendorIDAdviseDiv');
	});
	
	/* remove vendor */
	$(document).on('click', '#vendorIDAdviseList li', function(){
		$('#vendorID').val($(this).text());
		$('#vendorIDAdviseList').fadeOut();
		getPopulateVendor();
	});
	
	/* list purchase */
	$('#purchaseID').keyup(function(){
		showSuggestions('purchaseID', showPurchaseIDAdviseFile, 'purchaseIDAdviseDiv');
	});
	
	/* remove purchase */
	$(document).on('click', '#purchaseIDAdviseList li', function(){
		$('#purchaseID').val($(this).text());
		$('#purchaseIDAdviseList').fadeOut();
		getPopulatePurchase();
	});
	
	/* list sale */
	$('#saleID').keyup(function(){
		showSuggestions('saleID', showSaleIDAviseFile, 'saleIDAdviseDiv');
	});
	
	/* remove sale */
	$(document).on('click', '#saleIDAdviseList li', function(){
		$('#saleID').val($(this).text());
		$('#saleIDAdviseList').fadeOut();
		getPopulateSale();
	});

	$('#updateImage').on('click', function(){
		processImage('imageForm', updateImageFile, 'itemImageMessage');
	});

	$('#deleteImage').on('click', function(){
		processImage('imageForm', deleteImageFile, 'itemImageMessage');
	});
	
	/* initiate datepickers */
	$('.datepicker').datepicker({
		format: 'yyyy-mm-dd',
		todayHighlight: true,
		todayBtn: 'linked',
		orientation: 'bottom left'
	});
	
	/* calculate total */
	$('#purchaseQuantity, #purchaseUnitPrice').change(function(){
		calculateTotalPurchase();
	});

	$('#saleDiscount, #saleQuantity, #saleUnitPrice').change(function(){
		calculateTotalSale();
	});
	
	/* close any list from page */
	$(document).on('click', function(){
		$('.adviseList').fadeOut();
	});

	
	/* load file search table */
	searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
	searchTableCreator('purchaseDetailsTableDiv', purchaseSearchTableCreatorFile, 'purchaseSearchTable');
	searchTableCreator('customerDetailsTableDiv', customerSearchTableCreatorFile, 'customerSearchTable');
	searchTableCreator('saleDetailsTableDiv', saleSearchTableCreatorFile, 'saleSearchTable');
	searchTableCreator('vendorDetailsTableDiv', vendorSearchTableCreatorFile, 'vendorSearchTable');
	
	/* load file report table */
	reportTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
	reportPurchaseTableCreator('purchaseReportTableDiv', purchaseReportTableCreatorFile, 'purchaseReportTable');
	reportTableCreator('customerReportTableDiv', customerReportTableCreatorFile, 'customerReportTable');
	reportSaleTableCreator('saleReportTableDiv', saleReportTableCreatorFile, 'saleReportTable');
	reportTableCreator('vendorReportTableDiv', vendorReportTableCreatorFile, 'vendorReportTable');
	
	
	/* initiate popover */
	$(document).on('mouseover', '.itemDetailsHover', function(){
		/* create item popover */
		$('.itemHover').popover({
			container: 'body',
			title: 'Item Details',
			trigger: 'hover',
			html: true,
			placement: 'right',
			content: fetchData
		});
	});
	
	/* list file */
	$('#searchTableRefresh, #reportTableRefresh').on('click', function(){
		searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
		searchTableCreator('purchaseSearchTableDiv', purchaseSearchTableCreatorFile, 'purchaseSearchTable');
		searchTableCreator('customerSearchTableDiv', customerSearchTableCreatorFile, 'customerSearchTable');
		searchTableCreator('vendorSearchTableDiv', vendorSearchTableCreatorFile, 'vendorSearchTable');
		searchTableCreator('saleSearchTableDiv', saleSearchTableCreatorFile, 'saleSearchTable');
		
		reportTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
		reportPurchaseTableCreator('purchaseReportTableDiv', purchaseReportTableCreatorFile, 'purchaseReportTable');
		reportTableCreator('customerReportTableDiv', customerReportTableCreatorFile, 'customerReportTable');
		reportTableCreator('vendorReportTableDiv', vendorReportTableCreatorFile, 'vendorReportTable');
		reportSaleTableCreator('saleReportTableDiv', saleReportTableCreatorFile, 'saleReportTable');
	});
	
	/* list purchase repot */
	$('#showPurchaseReport').on('click', function(){
		filteredPurchaseReportTableCreator('purchaseReportStartDate', 'purchaseReportEndDate', purchaseFilteredReportCreatorFile, 'purchaseReportsTableDiv', 'purchaseFilteredReportsTable');
	});
	
	/* list sale report */
	$('#showSaleReport').on('click', function(){
		filteredSaleReportTableCreator('saleReportStartDate', 'saleReportEndDate', saleFilteredReportCreatorFile, 'saleReportsTableDiv', 'saleFilteredReportsTable');
	});
});


/* function fetch data for show popover*/
function fetchData(){
	var fetch_data = '';
	var element = $(this);
	var id = element.attr('id');
	
	$.ajax({
		url: 'model/item/getItemPopover.php',
		method: 'POST',
		async: false,
		data: {id:id},
		success: function(data){
			fetch_data = data;
		}
	});
	return fetch_data;
}


/* function call scriptPath  image */
function processImage(imageFormID, scriptPath, messageDivID){
	var form = $('#' + imageFormID)[0];
	var formData = new FormData(form);
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: formData,
		contentType: false,
		processData: false,
		success: function(data){
			$('#' + messageDivID).html(data);
		}
	});
}

/* create searchable database */
function searchTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		/* initiate datable plugin */
		$(tableID).DataTable();
	});
}

/* create reports  */
function reportsTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		/* initiate datable plugin  */
		$(tableID).DataTable({
			dom: 'lBfrtip',
			//dom: 'lfBrtip',
			//dom: 'Bfrtip',
			buttons: [
				'copy',
				'csv', 'excel',
				{extend: 'pdf', orientation: 'landscape', pageSize: 'LEGAL'},
				'print'
			]
		});
	});
}


function reportsPurchaseTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		/* initate datable plugin */
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'Purchase Report'},
				{extend: 'excel', footer: true, title: 'Purchase Report'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Purchase Report'},
				{extend: 'print', footer: true, title: 'Purchase Report'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				/*Remove the formatting to get integer data for summation  */
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 			
				/*  Quantity total over all pages */
				quantityTotal = api
					.column( 6 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 				
				/* Quantity for current page */
				quantityFilteredTotal = api
					.column( 6, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				/* Unit price total over all pages  */
				unitPriceTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price for current page
				unitPriceFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				// Full price total over all pages
				fullPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Full price for current page
				fullPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				// Update footer columns
				$( api.column( 6 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
				$( api.column( 7 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
				$( api.column( 8 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
			}
		});
	});
}


// Function to create reports datatables for sale
function reportsSaleTableCreator(tableContainerDiv, tableCreatorFileUrl, table){
	var tableContainerDivID = '#' + tableContainerDiv;
	var tableID = '#' + table;
	$(tableContainerDivID).load(tableCreatorFileUrl, function(){
		// Initiate the Datatable plugin once the table is added to the DOM
		$(tableID).DataTable({
			dom: 'lBfrtip',
			buttons: [
				'copy',
				{extend: 'csv', footer: true, title: 'Sale Report'},
				{extend: 'excel', footer: true, title: 'Sale Report'},
				{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Sale Report'},
				{extend: 'print', footer: true, title: 'Sale Report'},
			],
			"footerCallback": function ( row, data, start, end, display ) {
				var api = this.api(), data;
	 
				// Remove the formatting to get integer data for summation
				var intVal = function ( i ) {
					return typeof i === 'string' ?
						i.replace(/[\$,]/g, '')*1 :
						typeof i === 'number' ?
							i : 0;
				};
	 
				// Quantity Total over all pages
				quantityTotal = api
					.column( 7 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				// Quantity Total over this page
				quantityFilteredTotal = api
					.column( 7, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price Total over all pages
				unitPriceTotal = api
					.column( 8 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Unit price total over current page
				unitPriceFilteredTotal = api
					.column( 8, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
					
				// Full price Total over all pages
				fullPriceTotal = api
					.column( 9 )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
				
				// Full price total over current page
				fullPriceFilteredTotal = api
					.column( 9, { page: 'current'} )
					.data()
					.reduce( function (a, b) {
						return intVal(a) + intVal(b);
					}, 0 );
	 
				// Update footer columns
				$( api.column( 7 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
				$( api.column( 8 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
				$( api.column( 9 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
			}
		});
	});
}


// Function to create filtered datatable for sale details with total values
function filteredSaleReportTableCreator(startDate, endDate, scriptPath, tableDIV, tableID){
	var startDate = $('#' + startDate).val();
	var endDate = $('#' + endDate).val();

	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {
			startDate:startDate,
			endDate:endDate,
		},
		success: function(data){
			$('#' + tableDIV).empty();
			$('#' + tableDIV).html(data);
		},
		complete: function(){
			// Initiate the Datatable plugin once the table is added to the DOM
			$('#' + tableID).DataTable({
				dom: 'lBfrtip',
				buttons: [
					'copy',
					{extend: 'csv', footer: true, title: 'Sale Report'},
					{extend: 'excel', footer: true, title: 'Sale Report'},
					{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Sale Report'},
					{extend: 'print', footer: true, title: 'Sale Report'},
				],
				"footerCallback": function ( row, data, start, end, display ) {
					var api = this.api(), data;
		 
					// Remove the formatting to get integer data for summation
					var intVal = function ( i ) {
						return typeof i === 'string' ?
							i.replace(/[\$,]/g, '')*1 :
							typeof i === 'number' ?
								i : 0;
					};
		 
					// Total over all pages
					quantityTotal = api
						.column( 7 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					// Total over this page
					quantityFilteredTotal = api
						.column( 7, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Total over all pages
					unitPriceTotal = api
						.column( 8 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Quantity total
					unitPriceFilteredTotal = api
						.column( 8, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
						
					// Full total over all pages
					fullPriceTotal = api
						.column( 9 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Full total over current page
					fullPriceFilteredTotal = api
						.column( 9, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					// Update footer columns
					$( api.column( 7 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
					$( api.column( 8 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
					$( api.column( 9 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
				}
			});
		}
	});
}


// Function to create filtered datatable for purchase details with total values
function filteredPurchaseReportTableCreator(startDate, endDate, scriptPath, tableDIV, tableID){
	var startDate = $('#' + startDate).val();
	var endDate = $('#' + endDate).val();

	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {
			startDate:startDate,
			endDate:endDate,
		},
		success: function(data){
			$('#' + tableDIV).empty();
			$('#' + tableDIV).html(data);
		},
		complete: function(){
			// Initiate the Datatable plugin once the table is added to the DOM
			$('#' + tableID).DataTable({
				dom: 'lBfrtip',
				buttons: [
					'copy',
					{extend: 'csv', footer: true, title: 'Purchase Report'},
					{extend: 'excel', footer: true, title: 'Purchase Report'},
					{extend: 'pdf', footer: true, orientation: 'landscape', pageSize: 'LEGAL', title: 'Purchase Report'},
					{extend: 'print', footer: true, title: 'Purchase Report'}
				],
				"footerCallback": function ( row, data, start, end, display ) {
					var api = this.api(), data;
		 
					// Remove the formatting to get integer data for summation
					var intVal = function ( i ) {
						return typeof i === 'string' ?
							i.replace(/[\$,]/g, '')*1 :
							typeof i === 'number' ?
								i : 0;
					};
		 
					// Quantity total over all pages
					quantityTotal = api
						.column( 6 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					// Quantity for current page
					quantityFilteredTotal = api
						.column( 6, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Unit price total over all pages
					unitPriceTotal = api
						.column( 7 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Unit price for current page
					unitPriceFilteredTotal = api
						.column( 7, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Full price total over all pages
					fullPriceTotal = api
						.column( 8 )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
					
					// Full price for current page
					fullPriceFilteredTotal = api
						.column( 8, { page: 'current'} )
						.data()
						.reduce( function (a, b) {
							return intVal(a) + intVal(b);
						}, 0 );
		 
					// Update footer columns
					$( api.column( 6 ).footer() ).html(quantityFilteredTotal +' ('+ quantityTotal +' total)');
					$( api.column( 7 ).footer() ).html(unitPriceFilteredTotal +' ('+ unitPriceTotal +' total)');
					$( api.column( 8 ).footer() ).html(fullPriceFilteredTotal +' ('+ fullPriceTotal +' total)');
				}
			});
		}
	});
}

// Calculate Total Purchase value in purchase details tab
function calculatePurchaseTotal(){
	var purQuantity = $('#purchaseQuantity').val();
	var purUnitPrice = $('#purchaseUnitPrice').val();
	$('#purchaseTotal').val(Number(purQuantity) * Number(purUnitPrice));
}


// Calculate Total sale value in sale details tab
function calculateSaleTotal(){
	var saleQuantity = $('#saleQuantity').val();
	var saleUnitPrice = $('#saleUnitPrice').val();
	var saleDiscount = $('#saleDiscount').val();
	$('#saleTotal').val(Number(saleUnitPrice) * ((100 - Number(saleDiscount)) / 100) * Number(saleQuantity));
}


// Function to call the insertCustomer.php script to insert customer data to db
function addCustomer() {
	var custFullName = $('#customerFullName').val();
	var custEmail = $('#customerEmail').val();
	var custMobile = $('#customerMobile').val();
	var custPhone = $('#customerPhone').val();
	var custAddress = $('#customerAddress').val();
	var custAddress2 = $('#customerAddress2').val();
	var custCity = $('#customerCity').val();
	var custDistrict = $('#customerDistrict option:selected').text();
	var custStatus = $('#customerStatus option:selected').text();
	
	$.ajax({
		url: 'model/customer/insertCustomer.php',
		method: 'POST',
		data: {
			custFullName:custFullName,
			custEmail:custEmail,
			custMobile:custMobile,
			custPhone:custPhone,
			custAddress:custAddress,
			custAddress2:custAddress2,
			custCity:custCity,
			custDistrict:custDistrict,
			custStatus:custStatus,
		},
		success: function(data){
			$('#customerMessage').fadeIn();
			$('#customerMessage').html(data);
		},
		complete: function(data){
			populateLastInsertedID(customerLastInsertedIDFile, 'customerID');
			searchTableCreator('customerSearchTableDiv', customerSearchTableCreatorFile, 'customerSearchTable');
			reportsTableCreator('customerReportTableDiv', customerReportTableCreatorFile, 'customerReportTable');
		}
	});
}


// Function to call the insertVendor.php script to insert vendor data to db
function addVendor() {
	var venFullName = $('#vendorFullName').val();
	var venEmail = $('#vendorEmail').val();
	var venMobile = $('#vendorMobile').val();
	var venPhone = $('#vendorPhone').val();
	var venAddress = $('#vendorAddress').val();
	var venAddress2 = $('#vendorAddress2').val();
	var venCity = $('#vendorCity').val();
	var venDistrict = $('#vendorDistrict option:selected').text();
	var venStatus = $('#vendorStatus option:selected').text();
	
	$.ajax({
		url: 'model/vendor/insertVendor.php',
		method: 'POST',
		data: {
			venFullName:venFullName,
			venEmail:venEmail,
			venMobile:venMobile,
			venPhone:venPhone,
			venAddress:venAddress,
			venAddress2:venAddress2,
			venVendorCity:venCity,
			venDistrict:venDistrict,
			venStatus:venStatus,
		},
		success: function(data){
			$('#vendorMessage').fadeIn();
			$('#vendorMessage').html(data);
		},
		complete: function(data){
			populateLastInsertedID(vendorLastInsertedFile, 'vendorID');
			searchTableCreator('vendorSearchTableDiv', vendorSearchTableCreatorFile, 'vendorSearchTable');
			reportsTableCreator('vendorReportsTableDiv', vendorReportTableCreatorFile, 'vendorReportTable');
			$('#purchaseVendorName').load('model/vendor/getVendorNames.php');
		}
	});
}


// Function to call the insertItem.php script to insert item data to db
function addItem() {
	var itemNumber = $('#itemNumber').val();
	var itemName = $('#itemName').val();
	var itemDiscount = $('#itemDiscount').val();
	var itemQuantity = $('#itemQuantity').val();
	var itemUnitPrice = $('#itemUnitPrice').val();
	var itemStatus = $('#itemStatus').val();
	var itemDescription = $('#itemDescription').val();
	
	$.ajax({
		url: 'model/item/insertItem.php',
		method: 'POST',
		data: {
			itemNumber:itemNumber,
			itemName:itemName,
			itemDiscount:itemDiscount,
			itemQuantity:itemQuantity,
			itemUnitPrice:itemUnitPrice,
			itemStatus:itemStatus,
			itemDescription:itemDescription,
		},
		success: function(data){
			$('#itemMessage').fadeIn();
			$('#itemMessage').html(data);
		},
		complete: function(){
			populateLastInserted(itemLastInsertedFile, 'itemProductID');
			getItemStockToPopulate('itemDetailsItemNumber', getItemStockFile, itemTotalStock);
			searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
			reportTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
		}
	});
}


// Function to call the insertPurchase.php script to insert purchase data to db
function addPurchase() {
	var purchItemNumber = $('#purchaseItemNumber').val();
	var purchDate = $('#purchaseDate').val();
	var purchItemName = $('#purchaseItemName').val();
	var purchQuantity = $('#purchaseQuantity').val();
	var purchUnitPrice = $('#purchaseUnitPrice').val();
	var purchVendorName = $('#purchaseVendorName').val();
	
	$.ajax({
		url: 'model/purchase/insertPurchase.php',
		method: 'POST',
		data: {
			purchItemNumber:purchItemNumber,
			purchDate:purchDate,
			purchItemName:purchItemName,
			purchQuantity:purchQuantity,
			purchUnitPrice:purchUnitPrice,
			purchVendorName:purchVendorName,
		},
		success: function(data){
			$('#purchaseMessage').fadeIn();
			$('#purchaseMessage').html(data);
		},
		complete: function(){
			getPopulateItemStock('purchaseItemNumber', getItemStockFile, 'purchaseCurrentStock');
			populateLastInserted(purchaseLastInsertedFile, 'purchaseID');
			searchTableCreator('purchaseSearchTableDiv', purchaseSearchTableCreatorFile, 'purchaseSearchTable');
			reportsPurchaseTableCreator('purchasReportTableDiv', purchaseReportTableCreatorFile, 'purchaseReportsTable');
			searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
			reportsTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
		}
	});
}


// Function to call the insertSale.php script to insert sale data to db
function addSale() {
	var saleItemNumber = $('#saleItemNumber').val();
	var saleItemName = $('#saleItemName').val();
	var saleDiscount = $('#saleDiscount').val();
	var saleQuantity = $('#saleQuantity').val();
	var saleUnitPrice = $('#saleUnitPrice').val();
	var saleCustomerID = $('#saleCustomerID').val();
	var saleCustomerName = $('#saleCustomerName').val();
	var saleDate = $('#saleDate').val();
	
	$.ajax({
		url: 'model/sale/insertSale.php',
		method: 'POST',
		data: {
			saleItemNumber:saleItemNumber,
			saleItemName:saleItemName,
			saleDiscount:saleDiscount,
			saleQuantity:saleQuantity,
			saleUnitPrice:saleUnitPrice,
			saleCustomerID:saleCustomerID,
			saleCustomerName:saleCustomerName,
			saleDate:saleDate,
		},
		success: function(data){
			$('#saleMessage').fadeIn();
			$('#saleMessage').html(data);
		},
		complete: function(){
			getPopulateItemStock('saleItemNumber', getItemStockFile, 'saleTotalStock');
			populateLastInsertedID(saleLastInsertedFile, 'saleID');
			searchTableCreator('saleSearchTableDiv', saleSearchTableCreatorFile, 'saleSearchTable');
			reportSaleTableCreator('saleReportTableDiv', saleReportTableCreatorFile, 'saleReportTable');
			searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
			reportTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
		}
	});
}


// Function to send itemNumber so that item details can be pulled from db
// to be displayed on item details tab
function getPopulateItem(){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#itemNumber').val();
	var defaultImgUrl = 'data/item_images/imageNotAvailable.jpg';
	var defaultImageData = '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';
	
	// Call the populateItemDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/item/populateItem.php',
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#itemProductID').val(data.productID);
			$('#itemName').val(data.itemName);
			$('#itemDiscount').val(data.discount);
			$('#itemTotalStock').val(data.stock);
			$('#itemUnitPrice').val(data.unitPrice);
			$('#itemDescription').val(data.description);
			$('#itemStatus').val(data.status).trigger("chosen:updated");

			newImgUrl = 'data/item_images/' + data.itemNumber + '/' + data.imageURL;
			
			// Set the item image
			if(data.imageURL == 'imageNotAvailable.jpg' || data.imageURL == ''){
				$('#imageContainer').html(defaultImageData);
			} else {
				$('#imageContainer').html('<img class="img-fluid" src="' + newImgUrl + '">');
			}
		}
	});
}


// Function to send itemNumber so that item details can be pulled from db
// to be displayed on sale details tab
function getPopulateItemForSale(){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#saleItemNumber').val();
	var defaultImgUrl = 'data/item_images/imageNotAvailable.jpg';
	var defaultImageData = '<img class="img-fluid" src="data/item_images/imageNotAvailable.jpg">';
	
	// Call the populateItemDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/item/populateItem.php',
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#saleItemName').val(data.itemName);
			$('#saleDiscount').val(data.discount);
			$('#saleTotalStock').val(data.stock);
			$('#saleUnitPrice').val(data.unitPrice);

			newImgUrl = 'data/item_images/' + data.itemNumber + '/' + data.imageURL;
			
			// Set the item image
			if(data.imageURL == 'imageNotAvailable.jpg' || data.imageURL == ''){
				$('#saleImageContainer').html(defaultImageData);
			} else {
				$('#saleImageContainer').html('<img class="img-fluid" src="' + newImgUrl + '">');
			}
		},
		complete: function() {
			calculateSaleTotal();
		}
	});
}


// Function to send itemNumber so that item name can be pulled from db
function getItemName(itemNumberTextBoxID, scriptPath, itemNameTextbox){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#' + itemNumberTextBoxID).val();

	// Call the script to get item details
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#' + itemNameTextbox).val(data.itemName);
		},
		error: function (xhr, ajaxOptions, thrownError) {
      }
	});
}


// Function to send itemNumber so that item stock can be pulled from db
function getPopulateItemStock(itemNumberTextbox, scriptPath, stockTextbox){
	// Get the itemNumber entered in the text box
	var itemNumber = $('#' + itemNumberTextbox).val();
	
	// Call the script to get stock details
	$.ajax({
		url: scriptPath,
		method: 'POST',
		data: {itemNumber:itemNumber},
		dataType: 'json',
		success: function(data){
			$('#' + stockTextbox).val(data.stock);
		},
		error: function (xhr, ajaxOptions, thrownError) {
        
      }
	});
}


// Function to populate last inserted ID
function populateLastInserted(scriptPath, textBoxID){
	$.ajax({
		url: scriptPath,
		method: 'POST',
		dataType: 'json',
		success: function(data){
			$('#' + textBoxID).val(data);
		}
	});
}


// Function to show suggestions
function showSuggestions(textBoxID, scriptPath, suggestionsDivID){
	// Get the value entered by the user
	var textBoxValue = $('#' + textBoxID).val();
	
	// Call the showPurchaseIDs.php script only if there is a value in the
	// purchase ID textbox
	if(textBoxValue != ''){
		$.ajax({
			url: scriptPath,
			method: 'POST',
			data: {textBoxValue:textBoxValue},
			success: function(data){
				$('#' + suggestionsDivID).fadeIn();
				$('#' + suggestionsDivID).html(data);
			}
		});
	}
}


// Function to delte item from db
function deleteItem(){
	// Get the item number entered by the user
	var itemNumber = $('#itemNumber').val();
	
	// Call the deleteItem.php script only if there is a value in the
	// item number textbox
	if(itemNumber != ''){
		$.ajax({
			url: 'model/item/deleteItem.php',
			method: 'POST',
			data: {itemNumber:itemNumber},
			success: function(data){
				$('#itemMessage').fadeIn();
				$('#itemMessage').html(data);
			},
			complete: function(){
				searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
				reportsTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
			}
		});
	}
}


// Function to delete item from db
function deleteCustomer(){
	// Get the customerID entered by the user
	var customerDetailsCustomerID = $('#customerID').val();
	
	// Call the deleteCustomer.php script only if there is a value in the
	// item number textbox
	if(customerID != ''){
		$.ajax({
			url: 'model/customer/deleteCustomer.php',
			method: 'POST',
			data: {customerID:customerID},
			success: function(data){
				$('#customerMessage').fadeIn();
				$('#customerMessage').html(data);
			},
			complete: function(){
				searchTableCreator('customerSearchTableDiv', customerSearchTableCreatorFile, 'customerSearchTable');
				reportTableCreator('customerReportTableDiv', customerReportTableCreatorFile, 'customerReportTable');
			}
		});
	}
}


// Function to delete vendor from db
function deleteVendor(){
	// Get the vendorID entered by the user
	var vendorID = $('#vendorID').val();
	
	// Call the deleteVendor.php script only if there is a value in the
	// vendor ID textbox
	if(vendorDetailsVendorID != ''){
		$.ajax({
			url: 'model/vendor/deleteVendor.php',
			method: 'POST',
			data: {vendorID:vendorID},
			success: function(data){
				$('#vendorMessage').fadeIn();
				$('#vendorMessage').html(data);
			},
			complete: function(){
				searchTableCreator('vendorSearchTableDiv', vendorSearchTableCreatorFile, 'vendorSearchTable');
				reportTableCreator('vendorReportTableDiv', vendorReportTableCreatorFile, 'vendorReportTable');
			}
		});
	}
}


// Function to send customerID so that customer details can be pulled from db
// to be displayed on customer details tab
function getPopulateCustomer(){
	// Get the customerID entered in the text box
	var customerID = $('#customerID').val();
	
	// Call the populateItemDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/customer/populateCustomer.php',
		method: 'POST',
		data: {customerID:customerID},
		dataType: 'json',
		success: function(data){
			$('#customerFullName').val(data.fullName);
			$('#customerMobile').val(data.mobile);
			$('#customerPhone').val(data.phone);
			$('#customerEmail').val(data.email);
			$('#customerAddress').val(data.address);
			$('#customerAddress2').val(data.address2);
			$('#customerCity').val(data.city);
			$('#customerDistrict').val(data.district).trigger("chosen:updated");
			$('#customerStatus').val(data.status).trigger("chosen:updated");
		}
	});
}


// Function to send customerID so that customer details can be pulled from db
// to be displayed on sale details tab
function getPopulateCustomer(){
	// Get the customerID entered in the text box
	var customerID = $('#saleCustomerID').val();
	
	// Call the populateCustomerDetails.php script to get customer details
	// relevant to the customerID which the user entered
	$.ajax({
		url: 'model/customer/populateCustomer.php',
		method: 'POST',
		data: {customerID:customerID},
		dataType: 'json',
		success: function(data){
			$('#saleCustomerName').val(data.fullName);
		}
	});
}


// Function to send vendorID so that vendor details can be pulled from db
// to be displayed on vendor details tab
function getPopulateVendor(){
	// Get the vendorID entered in the text box
	var vendorID = $('#vendorID').val();
	
	// Call the populateVendorDetails.php script to get vendor details
	// relevant to the vendorID which the user entered
	$.ajax({
		url: 'model/vendor/populateVendor.php',
		method: 'POST',
		data: {vendorID:vendorID},
		dataType: 'json',
		success: function(data){
			//$('#vendorDetailsVendorID').val(data.vendorID);
			$('#vendorFullName').val(data.fullName);
			$('#vendorMobile').val(data.mobile);
			$('#vendorPhone').val(data.phone2);
			$('#vendorEmail').val(data.email);
			$('#vendorAddress').val(data.address);
			$('#vendorAddress2').val(data.address2);
			$('#vendorCity').val(data.city);
			$('#vendorDistrict').val(data.district).trigger("chosen:updated");
			$('#vendorStatus').val(data.status).trigger("chosen:updated");
		}
	});
}


// Function to send purchaseID so that purchase details can be pulled from db
// to be displayed on purchase details tab
function getPopulatePurchase(){
	// Get the purchaseID entered in the text box
	var purchaseID = $('#purchaseID').val();
	
	// Call the populatePurchaseDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/purchase/populatePurchase.php',
		method: 'POST',
		data: {purchaseID:purchaseID},
		dataType: 'json',
		success: function(data){
			//$('#purchaseDetailsPurchaseID').val(data.customerID);
			$('#purchaseItemNumber').val(data.itemNumber);
			$('#purchaseDate').val(data.purchaseDate);
			$('#purchaseItemName').val(data.itemName);
			$('#purchaseQuantity').val(data.quantity);
			$('#purchaseUnitPrice').val(data.unitPrice);
			$('#purchaseVendorName').val(data.vendorName).trigger("chosen:updated");
		},
		complete: function(){
			calculatePurchaseTotal();
			getPopulateItemStock('purchaseItemNumber', getItemStockFile, 'purchaseCurrentStock');
		}
	});
}


// Function to send saleID so that sale details can be pulled from db
// to be displayed on sale details tab
function getPopulateSale(){
	// Get the saleID entered in the text box
	var saleID = $('#saleID').val();
	
	// Call the populateSaleDetails.php script to get item details
	// relevant to the itemNumber which the user entered
	$.ajax({
		url: 'model/sale/populateSale.php',
		method: 'POST',
		data: {saleID:saleID},
		dataType: 'json',
		success: function(data){
			$('#saleItemNumber').val(data.itemNumber);
			$('#saleCustomerID').val(data.customerID);
			$('#saleCustomerName').val(data.customerName);
			$('#saleItemName').val(data.itemName);
			$('#saleSaleDate').val(data.saleDate);
			$('#saleDiscount').val(data.discount);
			$('#saleQuantity').val(data.quantity);
			$('#saleUnitPrice').val(data.unitPrice);
		},
		complete: function(){
			calculateSaleTotal();
			getPopulateItemStock('saleItemNumber', getItemStockFile, 'saleTotalStock');
		}
	});
}


// Function to call the upateItemDetails.php script to UPDATE item data in db
function updateItem() {
	var itemNumber = $('#itemNumber').val();
	var itemName = $('#itemName').val();
	var itemDiscount = $('#itemDiscount').val();
	var itemQuantity = $('#itemQuantity').val();
	var itemUnitPrice = $('#itemUnitPrice').val();
	var itemStatus = $('#itemStatus').val();
	var itemDescription = $('#itemDescription').val();
	
	$.ajax({
		url: 'model/item/updateItem.php',
		method: 'POST',
		data: {
			itemNumber:itemNumber,
			itemName:itemName,
			itemDiscount:itemDiscount,
			itemQuantity:itemQuantity,
			itemUnitPrice:itemUnitPrice,
			itemStatus:itemStatus,
			itemDescription:itemDescription,
		},
		success: function(data){
			var result = $.parseJSON(data);
			$('#itemMessage').fadeIn();
			$('#itemMessage').html(result.alertMessage);
			if(result.newStock != null){
				$('#itemTotalStock').val(result.newStock);
			}
		},
		complete: function(){
			searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');			
			searchTableCreator('purchaseSearchTableDiv', purchaseSearchTableCreatorFile, 'purchaseSearchTable');
			searchTableCreator('saleDetailsTableDiv', saleSearchTableCreatorFile, 'saleSearchTable');
			reportsTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
			reportPurchaseTableCreator('purchaseReportTableDiv', purchaseReportTableCreatorFile, 'purchaseReportTable');
			reportSaleTableCreator('saleReportTableDiv', saleReportTableCreatorFile, 'saleReportTable');
		}
	});
}


// Function to call the upateCustomerDetails.php script to UPDATE customer data in db
function updateCustomer() {
	var customerID = $('#customerID').val();
	var customerFullName = $('#customerFullName').val();
	var customerMobile = $('#customerMobile').val();
	var customerPhone = $('#customerPhone').val();
	var customerAddress = $('#customerAddress').val();
	var customerEmail = $('#customerEmail').val();
	var customerAddress2 = $('#customerAddress2').val();
	var customerCity = $('#customerCity').val();
	var customerDistrict = $('#customerDistrict').val();
	var customerStatus = $('#customerStatus option:selected').text();
	
	$.ajax({
		url: 'model/customer/updateCustomer.php',
		method: 'POST',
		data: {
			customerID:customerID,
			customerFullName:customerFullName,
			customerMobile:customerMobile,
			customerPhone:customerPhone,
			customerAddress:customerAddress,
			customerEmail:customerEmail,
			customerAddress2:customerAddress2,
			customerCity:customerCity,
			customerDistrict:customerDistrict,
			customerStatus:customerStatus,
		},
		success: function(data){
			$('#customerMessage').fadeIn();
			$('#customerMessage').html(data);
		},
		complete: function(){
			searchTableCreator('customerSearchTableDiv', customerSearchTableCreatorFile, 'customerSearchTable');
			reportTableCreator('customerReportTableDiv', customerReportTableCreatorFile, 'customerReportTable');
			searchTableCreator('saleSearchTableDiv', saleSearchTableCreatorFile, 'saleSearchTable');
			reportSaleTableCreator('saleReportTableDiv', saleReportTableCreatorFile, 'saleReportTable');
		}
	});
}


// Function to call the upateVendorDetails.php script to UPDATE vendor data in db
function updateVendor() {
	var vendorID = $('#vendorID').val();
	var vendorFullName = $('#vendorFullName').val();
	var vendorMobile = $('#vendorMobile').val();
	var vendorPhone = $('#vendorPhone').val();
	var vendorAddress = $('#vendorAddress').val();
	var vendorEmail = $('#vendorEmail').val();
	var vendorAddress2 = $('#vendorAddress2').val();
	var vendorCity = $('#vendorCity').val();
	var vendorDistrict = $('#vendorDistrict').val();
	var vendorStatus = $('#vendorStatus option:selected').text();
	
	$.ajax({
		url: 'model/vendor/updateVendor.php',
		method: 'POST',
		data: {
			vendorID:vendorID,
			vendorFullName:vendorFullName,
			vendorMobile:vendorMobile,
			vendorPhone:vendorPhone,
			vendorAddress:vendorAddress,
			vendorEmail:vendorEmail,
			vendorAddress2:vendorAddress2,
			vendorCity:vendorCity,
			vendorDistrict:vendorDistrict,
			vendorStatus:vendorStatus,
		},
		success: function(data){
			$('#vendorMessage').fadeIn();
			$('#vendorMessage').html(data);
		},
		complete: function(){
			searchTableCreator('purchaseSearchTableDiv', purchaseSearchTableCreatorFile, 'purchaseSearchTable');
			searchTableCreator('vendorSearchTableDiv', vendorSearchTableCreatorFile, 'vendorSearchTable');
			reportsPurchaseTableCreator('purchaseReportTableDiv', purchaseReportTableCreatorFile, 'purchaseReportTable');
			reportsTableCreator('vendorReportTableDiv', vendorReportTableCreatorFile, 'vendorReportTable');
		}
	});
}


// Function to call the updatePurchase.php script to update purchase data to db
function updatePurchase() {
	var purchaseItemNumber = $('#purchaseItemNumber').val();
	var purchaseDate = $('#purchaseDate').val();
	var purchaseItemName = $('#purchaseItemName').val();
	var purchaseQuantity = $('#purchaseQuantity').val();
	var purchaseUnitPrice = $('#purchaseUnitPrice').val();
	var purchaseID = $('#purchaseID').val();
	var purchaseVendorName = $('#purchaseVendorName').val();
	
	$.ajax({
		url: 'model/purchase/updatePurchase.php',
		method: 'POST',
		data: {
			purchaseItemNumber:purchaseItemNumber,
			purchaseDate:purchaseDate,
			purchaseItemName:purchaseItemName,
			purchaseQuantity:purchaseQuantity,
			purchaseUnitPrice:purchaseUnitPrice,
			purchaseID:purchaseID,
			purchaseVendorName:purchaseVendorName,
		},
		success: function(data){
			$('#purchaseDetailsMessage').fadeIn();
			$('#purchaseDetailsMessage').html(data);
		},
		complete: function(){
			getPopulateItemStock('purchaseItemNumber', getItemStockFile, 'purchaseCurrentStock');
			searchTableCreator('purchaseSearchTableDiv', purchaseSearchTableCreatorFile, 'purchaseDetailsTable');
			reportPurchaseTableCreator('purchaseReportTableDiv', purchaseReportTableCreatorFile, 'purchaseReportTable');
			searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemSearchTable');
			reportTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
		}
	});
}


// Function to call the updateSale.php script to update sale data to db
function updateSale() {
	var saleItemNumber = $('#saleItemNumber').val();
	var saleDate = $('#saleDate').val();
	var saleItemName = $('#saleItemName').val();
	var saleQuantity = $('#saleQuantity').val();
	var saleUnitPrice = $('#saleUnitPrice').val();
	var saleID = $('#saleID').val();
	var saleCustomerName = $('#saleCustomerName').val();
	var saleDiscount = $('#saleDiscount').val();
	var saleCustomerID = $('#saleCustomerID').val();
	
	$.ajax({
		url: 'model/sale/updateSale.php',
		method: 'POST',
		data: {
			saleItemNumber:saleItemNumber,
			saleDate:saleDate,
			saleItemName:saleItemName,
			saleQuantity:saleQuantity,
			saleUnitPrice:saleUnitPrice,
			saleID:saleID,
			saleCustomerName:saleCustomerName,
			saleDiscount:saleDiscount,
			saleCustomerID:saleCustomerID,
		},
		success: function(data){
			$('#saleMessage').fadeIn();
			$('#saleMessage').html(data);
		},
		complete: function(){			
			getPopulateItemStock('saleItemNumber', getItemStockFile, 'saleTotalStock');
			searchTableCreator('saleSearchTableDiv', saleSearchTableCreatorFile, 'saleSearchTable');
			reportSaleTableCreator('saleReportTableDiv', saleReportTableCreatorFile, 'saleReportTable');
			searchTableCreator('itemSearchTableDiv', itemSearchTableCreatorFile, 'itemReportTable');
			reportTableCreator('itemReportTableDiv', itemReportTableCreatorFile, 'itemReportTable');
		}
	});
}



