
// PUTImport //

async function putimportReportCard($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportReportCardVals(JSON.parse(json), success, error);
}

function putimportReportCardVals(json, success, error) {
	$.ajax({
		url: '/api/reportcard/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeReportCard($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeReportCardVals(JSON.parse(json), success, error);
}

function putmergeReportCardVals(json, success, error) {
	$.ajax({
		url: '/api/reportcard/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyReportCard($formValues, pk, success, error) {
	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueReportCardStartYear = $formValues.find('.valueReportCardStartYear').val();
	if(valueReportCardStartYear != null && valueReportCardStartYear !== '')
		vals['reportCardStartYear'] = valueReportCardStartYear;

	var valueReportCardEndYear = $formValues.find('.valueReportCardEndYear').val();
	if(valueReportCardEndYear != null && valueReportCardEndYear !== '')
		vals['reportCardEndYear'] = valueReportCardEndYear;

	var valueCountyKey = $formValues.find('input.valueCountyKey:checked').val();
	if(valueCountyKey != null && valueCountyKey !== '')
		vals['countyKey'] = valueCountyKey;

	var valuePupilsTotal = $formValues.find('.valuePupilsTotal').val();
	if(valuePupilsTotal != null && valuePupilsTotal !== '')
		vals['pupilsTotal'] = valuePupilsTotal;

	var valuePupilsIndianFemale = $formValues.find('.valuePupilsIndianFemale').val();
	if(valuePupilsIndianFemale != null && valuePupilsIndianFemale !== '')
		vals['pupilsIndianFemale'] = valuePupilsIndianFemale;

	var valuePupilsIndianMale = $formValues.find('.valuePupilsIndianMale').val();
	if(valuePupilsIndianMale != null && valuePupilsIndianMale !== '')
		vals['pupilsIndianMale'] = valuePupilsIndianMale;

	var valuePupilsIndianTotal = $formValues.find('.valuePupilsIndianTotal').val();
	if(valuePupilsIndianTotal != null && valuePupilsIndianTotal !== '')
		vals['pupilsIndianTotal'] = valuePupilsIndianTotal;

	var valuePupilsIndianPercent = $formValues.find('.valuePupilsIndianPercent').val();
	if(valuePupilsIndianPercent != null && valuePupilsIndianPercent !== '')
		vals['pupilsIndianPercent'] = valuePupilsIndianPercent;

	var valuePupilsAsianFemale = $formValues.find('.valuePupilsAsianFemale').val();
	if(valuePupilsAsianFemale != null && valuePupilsAsianFemale !== '')
		vals['pupilsAsianFemale'] = valuePupilsAsianFemale;

	var valuePupilsAsianMale = $formValues.find('.valuePupilsAsianMale').val();
	if(valuePupilsAsianMale != null && valuePupilsAsianMale !== '')
		vals['pupilsAsianMale'] = valuePupilsAsianMale;

	var valuePupilsAsianTotal = $formValues.find('.valuePupilsAsianTotal').val();
	if(valuePupilsAsianTotal != null && valuePupilsAsianTotal !== '')
		vals['pupilsAsianTotal'] = valuePupilsAsianTotal;

	var valuePupilsAsianPercent = $formValues.find('.valuePupilsAsianPercent').val();
	if(valuePupilsAsianPercent != null && valuePupilsAsianPercent !== '')
		vals['pupilsAsianPercent'] = valuePupilsAsianPercent;

	var valuePupilsHispanicFemale = $formValues.find('.valuePupilsHispanicFemale').val();
	if(valuePupilsHispanicFemale != null && valuePupilsHispanicFemale !== '')
		vals['pupilsHispanicFemale'] = valuePupilsHispanicFemale;

	var valuePupilsHispanicMale = $formValues.find('.valuePupilsHispanicMale').val();
	if(valuePupilsHispanicMale != null && valuePupilsHispanicMale !== '')
		vals['pupilsHispanicMale'] = valuePupilsHispanicMale;

	var valuePupilsHispanicTotal = $formValues.find('.valuePupilsHispanicTotal').val();
	if(valuePupilsHispanicTotal != null && valuePupilsHispanicTotal !== '')
		vals['pupilsHispanicTotal'] = valuePupilsHispanicTotal;

	var valuePupilsHispanicPercent = $formValues.find('.valuePupilsHispanicPercent').val();
	if(valuePupilsHispanicPercent != null && valuePupilsHispanicPercent !== '')
		vals['pupilsHispanicPercent'] = valuePupilsHispanicPercent;

	var valuePupilsBlackFemale = $formValues.find('.valuePupilsBlackFemale').val();
	if(valuePupilsBlackFemale != null && valuePupilsBlackFemale !== '')
		vals['pupilsBlackFemale'] = valuePupilsBlackFemale;

	var valuePupilsBlackMale = $formValues.find('.valuePupilsBlackMale').val();
	if(valuePupilsBlackMale != null && valuePupilsBlackMale !== '')
		vals['pupilsBlackMale'] = valuePupilsBlackMale;

	var valuePupilsBlackTotal = $formValues.find('.valuePupilsBlackTotal').val();
	if(valuePupilsBlackTotal != null && valuePupilsBlackTotal !== '')
		vals['pupilsBlackTotal'] = valuePupilsBlackTotal;

	var valuePupilsBlackPercent = $formValues.find('.valuePupilsBlackPercent').val();
	if(valuePupilsBlackPercent != null && valuePupilsBlackPercent !== '')
		vals['pupilsBlackPercent'] = valuePupilsBlackPercent;

	var valuePupilsWhiteFemale = $formValues.find('.valuePupilsWhiteFemale').val();
	if(valuePupilsWhiteFemale != null && valuePupilsWhiteFemale !== '')
		vals['pupilsWhiteFemale'] = valuePupilsWhiteFemale;

	var valuePupilsWhiteMale = $formValues.find('.valuePupilsWhiteMale').val();
	if(valuePupilsWhiteMale != null && valuePupilsWhiteMale !== '')
		vals['pupilsWhiteMale'] = valuePupilsWhiteMale;

	var valuePupilsWhiteTotal = $formValues.find('.valuePupilsWhiteTotal').val();
	if(valuePupilsWhiteTotal != null && valuePupilsWhiteTotal !== '')
		vals['pupilsWhiteTotal'] = valuePupilsWhiteTotal;

	var valuePupilsWhitePercent = $formValues.find('.valuePupilsWhitePercent').val();
	if(valuePupilsWhitePercent != null && valuePupilsWhitePercent !== '')
		vals['pupilsWhitePercent'] = valuePupilsWhitePercent;

	var valuePupilsPacificIslanderFemale = $formValues.find('.valuePupilsPacificIslanderFemale').val();
	if(valuePupilsPacificIslanderFemale != null && valuePupilsPacificIslanderFemale !== '')
		vals['pupilsPacificIslanderFemale'] = valuePupilsPacificIslanderFemale;

	var valuePupilsPacificIslanderMale = $formValues.find('.valuePupilsPacificIslanderMale').val();
	if(valuePupilsPacificIslanderMale != null && valuePupilsPacificIslanderMale !== '')
		vals['pupilsPacificIslanderMale'] = valuePupilsPacificIslanderMale;

	var valuePupilsPacificIslanderTotal = $formValues.find('.valuePupilsPacificIslanderTotal').val();
	if(valuePupilsPacificIslanderTotal != null && valuePupilsPacificIslanderTotal !== '')
		vals['pupilsPacificIslanderTotal'] = valuePupilsPacificIslanderTotal;

	var valuePupilsPacificIslanderPercent = $formValues.find('.valuePupilsPacificIslanderPercent').val();
	if(valuePupilsPacificIslanderPercent != null && valuePupilsPacificIslanderPercent !== '')
		vals['pupilsPacificIslanderPercent'] = valuePupilsPacificIslanderPercent;

	var valuePupilsMultiRacialFemale = $formValues.find('.valuePupilsMultiRacialFemale').val();
	if(valuePupilsMultiRacialFemale != null && valuePupilsMultiRacialFemale !== '')
		vals['pupilsMultiRacialFemale'] = valuePupilsMultiRacialFemale;

	var valuePupilsMultiRacialMale = $formValues.find('.valuePupilsMultiRacialMale').val();
	if(valuePupilsMultiRacialMale != null && valuePupilsMultiRacialMale !== '')
		vals['pupilsMultiRacialMale'] = valuePupilsMultiRacialMale;

	var valuePupilsMultiRacialTotal = $formValues.find('.valuePupilsMultiRacialTotal').val();
	if(valuePupilsMultiRacialTotal != null && valuePupilsMultiRacialTotal !== '')
		vals['pupilsMultiRacialTotal'] = valuePupilsMultiRacialTotal;

	var valuePupilsMultiRacialPercent = $formValues.find('.valuePupilsMultiRacialPercent').val();
	if(valuePupilsMultiRacialPercent != null && valuePupilsMultiRacialPercent !== '')
		vals['pupilsMultiRacialPercent'] = valuePupilsMultiRacialPercent;

	var valueDelinquentComplaintsTotal = $formValues.find('.valueDelinquentComplaintsTotal').val();
	if(valueDelinquentComplaintsTotal != null && valueDelinquentComplaintsTotal !== '')
		vals['delinquentComplaintsTotal'] = valueDelinquentComplaintsTotal;

	var valueDelinquentComplaintsAtSchool = $formValues.find('.valueDelinquentComplaintsAtSchool').val();
	if(valueDelinquentComplaintsAtSchool != null && valueDelinquentComplaintsAtSchool !== '')
		vals['delinquentComplaintsAtSchool'] = valueDelinquentComplaintsAtSchool;

	var valueDelinquentComplaintsAtSchoolPercent = $formValues.find('.valueDelinquentComplaintsAtSchoolPercent').val();
	if(valueDelinquentComplaintsAtSchoolPercent != null && valueDelinquentComplaintsAtSchoolPercent !== '')
		vals['delinquentComplaintsAtSchoolPercent'] = valueDelinquentComplaintsAtSchoolPercent;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopyReportCardVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyReportCardVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/reportcard/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postReportCard($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueReportCardStartYear = $formValues.find('.valueReportCardStartYear').val();
	if(valueReportCardStartYear != null && valueReportCardStartYear !== '')
		vals['reportCardStartYear'] = valueReportCardStartYear;

	var valueReportCardEndYear = $formValues.find('.valueReportCardEndYear').val();
	if(valueReportCardEndYear != null && valueReportCardEndYear !== '')
		vals['reportCardEndYear'] = valueReportCardEndYear;

	var valueCountyKey = $formValues.find('.valueCountyKey').val();
	if(valueCountyKey != null && valueCountyKey !== '')
		vals['countyKey'] = valueCountyKey;

	var valuePupilsTotal = $formValues.find('.valuePupilsTotal').val();
	if(valuePupilsTotal != null && valuePupilsTotal !== '')
		vals['pupilsTotal'] = valuePupilsTotal;

	var valuePupilsIndianFemale = $formValues.find('.valuePupilsIndianFemale').val();
	if(valuePupilsIndianFemale != null && valuePupilsIndianFemale !== '')
		vals['pupilsIndianFemale'] = valuePupilsIndianFemale;

	var valuePupilsIndianMale = $formValues.find('.valuePupilsIndianMale').val();
	if(valuePupilsIndianMale != null && valuePupilsIndianMale !== '')
		vals['pupilsIndianMale'] = valuePupilsIndianMale;

	var valuePupilsIndianTotal = $formValues.find('.valuePupilsIndianTotal').val();
	if(valuePupilsIndianTotal != null && valuePupilsIndianTotal !== '')
		vals['pupilsIndianTotal'] = valuePupilsIndianTotal;

	var valuePupilsIndianPercent = $formValues.find('.valuePupilsIndianPercent').val();
	if(valuePupilsIndianPercent != null && valuePupilsIndianPercent !== '')
		vals['pupilsIndianPercent'] = valuePupilsIndianPercent;

	var valuePupilsAsianFemale = $formValues.find('.valuePupilsAsianFemale').val();
	if(valuePupilsAsianFemale != null && valuePupilsAsianFemale !== '')
		vals['pupilsAsianFemale'] = valuePupilsAsianFemale;

	var valuePupilsAsianMale = $formValues.find('.valuePupilsAsianMale').val();
	if(valuePupilsAsianMale != null && valuePupilsAsianMale !== '')
		vals['pupilsAsianMale'] = valuePupilsAsianMale;

	var valuePupilsAsianTotal = $formValues.find('.valuePupilsAsianTotal').val();
	if(valuePupilsAsianTotal != null && valuePupilsAsianTotal !== '')
		vals['pupilsAsianTotal'] = valuePupilsAsianTotal;

	var valuePupilsAsianPercent = $formValues.find('.valuePupilsAsianPercent').val();
	if(valuePupilsAsianPercent != null && valuePupilsAsianPercent !== '')
		vals['pupilsAsianPercent'] = valuePupilsAsianPercent;

	var valuePupilsHispanicFemale = $formValues.find('.valuePupilsHispanicFemale').val();
	if(valuePupilsHispanicFemale != null && valuePupilsHispanicFemale !== '')
		vals['pupilsHispanicFemale'] = valuePupilsHispanicFemale;

	var valuePupilsHispanicMale = $formValues.find('.valuePupilsHispanicMale').val();
	if(valuePupilsHispanicMale != null && valuePupilsHispanicMale !== '')
		vals['pupilsHispanicMale'] = valuePupilsHispanicMale;

	var valuePupilsHispanicTotal = $formValues.find('.valuePupilsHispanicTotal').val();
	if(valuePupilsHispanicTotal != null && valuePupilsHispanicTotal !== '')
		vals['pupilsHispanicTotal'] = valuePupilsHispanicTotal;

	var valuePupilsHispanicPercent = $formValues.find('.valuePupilsHispanicPercent').val();
	if(valuePupilsHispanicPercent != null && valuePupilsHispanicPercent !== '')
		vals['pupilsHispanicPercent'] = valuePupilsHispanicPercent;

	var valuePupilsBlackFemale = $formValues.find('.valuePupilsBlackFemale').val();
	if(valuePupilsBlackFemale != null && valuePupilsBlackFemale !== '')
		vals['pupilsBlackFemale'] = valuePupilsBlackFemale;

	var valuePupilsBlackMale = $formValues.find('.valuePupilsBlackMale').val();
	if(valuePupilsBlackMale != null && valuePupilsBlackMale !== '')
		vals['pupilsBlackMale'] = valuePupilsBlackMale;

	var valuePupilsBlackTotal = $formValues.find('.valuePupilsBlackTotal').val();
	if(valuePupilsBlackTotal != null && valuePupilsBlackTotal !== '')
		vals['pupilsBlackTotal'] = valuePupilsBlackTotal;

	var valuePupilsBlackPercent = $formValues.find('.valuePupilsBlackPercent').val();
	if(valuePupilsBlackPercent != null && valuePupilsBlackPercent !== '')
		vals['pupilsBlackPercent'] = valuePupilsBlackPercent;

	var valuePupilsWhiteFemale = $formValues.find('.valuePupilsWhiteFemale').val();
	if(valuePupilsWhiteFemale != null && valuePupilsWhiteFemale !== '')
		vals['pupilsWhiteFemale'] = valuePupilsWhiteFemale;

	var valuePupilsWhiteMale = $formValues.find('.valuePupilsWhiteMale').val();
	if(valuePupilsWhiteMale != null && valuePupilsWhiteMale !== '')
		vals['pupilsWhiteMale'] = valuePupilsWhiteMale;

	var valuePupilsWhiteTotal = $formValues.find('.valuePupilsWhiteTotal').val();
	if(valuePupilsWhiteTotal != null && valuePupilsWhiteTotal !== '')
		vals['pupilsWhiteTotal'] = valuePupilsWhiteTotal;

	var valuePupilsWhitePercent = $formValues.find('.valuePupilsWhitePercent').val();
	if(valuePupilsWhitePercent != null && valuePupilsWhitePercent !== '')
		vals['pupilsWhitePercent'] = valuePupilsWhitePercent;

	var valuePupilsPacificIslanderFemale = $formValues.find('.valuePupilsPacificIslanderFemale').val();
	if(valuePupilsPacificIslanderFemale != null && valuePupilsPacificIslanderFemale !== '')
		vals['pupilsPacificIslanderFemale'] = valuePupilsPacificIslanderFemale;

	var valuePupilsPacificIslanderMale = $formValues.find('.valuePupilsPacificIslanderMale').val();
	if(valuePupilsPacificIslanderMale != null && valuePupilsPacificIslanderMale !== '')
		vals['pupilsPacificIslanderMale'] = valuePupilsPacificIslanderMale;

	var valuePupilsPacificIslanderTotal = $formValues.find('.valuePupilsPacificIslanderTotal').val();
	if(valuePupilsPacificIslanderTotal != null && valuePupilsPacificIslanderTotal !== '')
		vals['pupilsPacificIslanderTotal'] = valuePupilsPacificIslanderTotal;

	var valuePupilsPacificIslanderPercent = $formValues.find('.valuePupilsPacificIslanderPercent').val();
	if(valuePupilsPacificIslanderPercent != null && valuePupilsPacificIslanderPercent !== '')
		vals['pupilsPacificIslanderPercent'] = valuePupilsPacificIslanderPercent;

	var valuePupilsMultiRacialFemale = $formValues.find('.valuePupilsMultiRacialFemale').val();
	if(valuePupilsMultiRacialFemale != null && valuePupilsMultiRacialFemale !== '')
		vals['pupilsMultiRacialFemale'] = valuePupilsMultiRacialFemale;

	var valuePupilsMultiRacialMale = $formValues.find('.valuePupilsMultiRacialMale').val();
	if(valuePupilsMultiRacialMale != null && valuePupilsMultiRacialMale !== '')
		vals['pupilsMultiRacialMale'] = valuePupilsMultiRacialMale;

	var valuePupilsMultiRacialTotal = $formValues.find('.valuePupilsMultiRacialTotal').val();
	if(valuePupilsMultiRacialTotal != null && valuePupilsMultiRacialTotal !== '')
		vals['pupilsMultiRacialTotal'] = valuePupilsMultiRacialTotal;

	var valuePupilsMultiRacialPercent = $formValues.find('.valuePupilsMultiRacialPercent').val();
	if(valuePupilsMultiRacialPercent != null && valuePupilsMultiRacialPercent !== '')
		vals['pupilsMultiRacialPercent'] = valuePupilsMultiRacialPercent;

	var valueDelinquentComplaintsTotal = $formValues.find('.valueDelinquentComplaintsTotal').val();
	if(valueDelinquentComplaintsTotal != null && valueDelinquentComplaintsTotal !== '')
		vals['delinquentComplaintsTotal'] = valueDelinquentComplaintsTotal;

	var valueDelinquentComplaintsAtSchool = $formValues.find('.valueDelinquentComplaintsAtSchool').val();
	if(valueDelinquentComplaintsAtSchool != null && valueDelinquentComplaintsAtSchool !== '')
		vals['delinquentComplaintsAtSchool'] = valueDelinquentComplaintsAtSchool;

	var valueDelinquentComplaintsAtSchoolPercent = $formValues.find('.valueDelinquentComplaintsAtSchoolPercent').val();
	if(valueDelinquentComplaintsAtSchoolPercent != null && valueDelinquentComplaintsAtSchoolPercent !== '')
		vals['delinquentComplaintsAtSchoolPercent'] = valueDelinquentComplaintsAtSchoolPercent;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/reportcard'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postReportCardVals(vals, success, error) {
	$.ajax({
		url: '/api/reportcard'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchReportCard($formFilters, $formValues, pk, success, error) {
	var filters = patchReportCardFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueReportCardStartYear = $formValues.find('.valueReportCardStartYear').val();
	if(valueReportCardStartYear != null && valueReportCardStartYear !== '')
	var removeReportCardStartYear = $formFilters.find('.removeReportCardStartYear').val() === 'true';
	var setReportCardStartYear = removeReportCardStartYear ? null : $formValues.find('.setReportCardStartYear').val();
	if(removeReportCardStartYear || setReportCardStartYear != null && setReportCardStartYear !== '')
		vals['setReportCardStartYear'] = setReportCardStartYear;
	var addReportCardStartYear = $formValues.find('.addReportCardStartYear').val();
	if(addReportCardStartYear != null && addReportCardStartYear !== '')
		vals['addReportCardStartYear'] = addReportCardStartYear;
	var removeReportCardStartYear = $formValues.find('.removeReportCardStartYear').val();
	if(removeReportCardStartYear != null && removeReportCardStartYear !== '')
		vals['removeReportCardStartYear'] = removeReportCardStartYear;

	var valueReportCardEndYear = $formValues.find('.valueReportCardEndYear').val();
	if(valueReportCardEndYear != null && valueReportCardEndYear !== '')
	var removeReportCardEndYear = $formFilters.find('.removeReportCardEndYear').val() === 'true';
	var setReportCardEndYear = removeReportCardEndYear ? null : $formValues.find('.setReportCardEndYear').val();
	if(removeReportCardEndYear || setReportCardEndYear != null && setReportCardEndYear !== '')
		vals['setReportCardEndYear'] = setReportCardEndYear;
	var addReportCardEndYear = $formValues.find('.addReportCardEndYear').val();
	if(addReportCardEndYear != null && addReportCardEndYear !== '')
		vals['addReportCardEndYear'] = addReportCardEndYear;
	var removeReportCardEndYear = $formValues.find('.removeReportCardEndYear').val();
	if(removeReportCardEndYear != null && removeReportCardEndYear !== '')
		vals['removeReportCardEndYear'] = removeReportCardEndYear;

	var valueCountyKey = $formValues.find('input.valueCountyKey:checked').val();
	if(valueCountyKey != null && valueCountyKey !== '')
		vals['setCountyKey'] = valueCountyKey;

	var valuePupilsTotal = $formValues.find('.valuePupilsTotal').val();
	if(valuePupilsTotal != null && valuePupilsTotal !== '')
	var removePupilsTotal = $formFilters.find('.removePupilsTotal').val() === 'true';
	var setPupilsTotal = removePupilsTotal ? null : $formValues.find('.setPupilsTotal').val();
	if(removePupilsTotal || setPupilsTotal != null && setPupilsTotal !== '')
		vals['setPupilsTotal'] = setPupilsTotal;
	var addPupilsTotal = $formValues.find('.addPupilsTotal').val();
	if(addPupilsTotal != null && addPupilsTotal !== '')
		vals['addPupilsTotal'] = addPupilsTotal;
	var removePupilsTotal = $formValues.find('.removePupilsTotal').val();
	if(removePupilsTotal != null && removePupilsTotal !== '')
		vals['removePupilsTotal'] = removePupilsTotal;

	var valuePupilsIndianFemale = $formValues.find('.valuePupilsIndianFemale').val();
	if(valuePupilsIndianFemale != null && valuePupilsIndianFemale !== '')
	var removePupilsIndianFemale = $formFilters.find('.removePupilsIndianFemale').val() === 'true';
	var setPupilsIndianFemale = removePupilsIndianFemale ? null : $formValues.find('.setPupilsIndianFemale').val();
	if(removePupilsIndianFemale || setPupilsIndianFemale != null && setPupilsIndianFemale !== '')
		vals['setPupilsIndianFemale'] = setPupilsIndianFemale;
	var addPupilsIndianFemale = $formValues.find('.addPupilsIndianFemale').val();
	if(addPupilsIndianFemale != null && addPupilsIndianFemale !== '')
		vals['addPupilsIndianFemale'] = addPupilsIndianFemale;
	var removePupilsIndianFemale = $formValues.find('.removePupilsIndianFemale').val();
	if(removePupilsIndianFemale != null && removePupilsIndianFemale !== '')
		vals['removePupilsIndianFemale'] = removePupilsIndianFemale;

	var valuePupilsIndianMale = $formValues.find('.valuePupilsIndianMale').val();
	if(valuePupilsIndianMale != null && valuePupilsIndianMale !== '')
	var removePupilsIndianMale = $formFilters.find('.removePupilsIndianMale').val() === 'true';
	var setPupilsIndianMale = removePupilsIndianMale ? null : $formValues.find('.setPupilsIndianMale').val();
	if(removePupilsIndianMale || setPupilsIndianMale != null && setPupilsIndianMale !== '')
		vals['setPupilsIndianMale'] = setPupilsIndianMale;
	var addPupilsIndianMale = $formValues.find('.addPupilsIndianMale').val();
	if(addPupilsIndianMale != null && addPupilsIndianMale !== '')
		vals['addPupilsIndianMale'] = addPupilsIndianMale;
	var removePupilsIndianMale = $formValues.find('.removePupilsIndianMale').val();
	if(removePupilsIndianMale != null && removePupilsIndianMale !== '')
		vals['removePupilsIndianMale'] = removePupilsIndianMale;

	var valuePupilsIndianTotal = $formValues.find('.valuePupilsIndianTotal').val();
	if(valuePupilsIndianTotal != null && valuePupilsIndianTotal !== '')
	var removePupilsIndianTotal = $formFilters.find('.removePupilsIndianTotal').val() === 'true';
	var setPupilsIndianTotal = removePupilsIndianTotal ? null : $formValues.find('.setPupilsIndianTotal').val();
	if(removePupilsIndianTotal || setPupilsIndianTotal != null && setPupilsIndianTotal !== '')
		vals['setPupilsIndianTotal'] = setPupilsIndianTotal;
	var addPupilsIndianTotal = $formValues.find('.addPupilsIndianTotal').val();
	if(addPupilsIndianTotal != null && addPupilsIndianTotal !== '')
		vals['addPupilsIndianTotal'] = addPupilsIndianTotal;
	var removePupilsIndianTotal = $formValues.find('.removePupilsIndianTotal').val();
	if(removePupilsIndianTotal != null && removePupilsIndianTotal !== '')
		vals['removePupilsIndianTotal'] = removePupilsIndianTotal;

	var valuePupilsIndianPercent = $formValues.find('.valuePupilsIndianPercent').val();
	if(valuePupilsIndianPercent != null && valuePupilsIndianPercent !== '')
	var removePupilsIndianPercent = $formFilters.find('.removePupilsIndianPercent').val() === 'true';
	var setPupilsIndianPercent = removePupilsIndianPercent ? null : $formValues.find('.setPupilsIndianPercent').val();
	if(removePupilsIndianPercent || setPupilsIndianPercent != null && setPupilsIndianPercent !== '')
		vals['setPupilsIndianPercent'] = setPupilsIndianPercent;
	var addPupilsIndianPercent = $formValues.find('.addPupilsIndianPercent').val();
	if(addPupilsIndianPercent != null && addPupilsIndianPercent !== '')
		vals['addPupilsIndianPercent'] = addPupilsIndianPercent;
	var removePupilsIndianPercent = $formValues.find('.removePupilsIndianPercent').val();
	if(removePupilsIndianPercent != null && removePupilsIndianPercent !== '')
		vals['removePupilsIndianPercent'] = removePupilsIndianPercent;

	var valuePupilsAsianFemale = $formValues.find('.valuePupilsAsianFemale').val();
	if(valuePupilsAsianFemale != null && valuePupilsAsianFemale !== '')
	var removePupilsAsianFemale = $formFilters.find('.removePupilsAsianFemale').val() === 'true';
	var setPupilsAsianFemale = removePupilsAsianFemale ? null : $formValues.find('.setPupilsAsianFemale').val();
	if(removePupilsAsianFemale || setPupilsAsianFemale != null && setPupilsAsianFemale !== '')
		vals['setPupilsAsianFemale'] = setPupilsAsianFemale;
	var addPupilsAsianFemale = $formValues.find('.addPupilsAsianFemale').val();
	if(addPupilsAsianFemale != null && addPupilsAsianFemale !== '')
		vals['addPupilsAsianFemale'] = addPupilsAsianFemale;
	var removePupilsAsianFemale = $formValues.find('.removePupilsAsianFemale').val();
	if(removePupilsAsianFemale != null && removePupilsAsianFemale !== '')
		vals['removePupilsAsianFemale'] = removePupilsAsianFemale;

	var valuePupilsAsianMale = $formValues.find('.valuePupilsAsianMale').val();
	if(valuePupilsAsianMale != null && valuePupilsAsianMale !== '')
	var removePupilsAsianMale = $formFilters.find('.removePupilsAsianMale').val() === 'true';
	var setPupilsAsianMale = removePupilsAsianMale ? null : $formValues.find('.setPupilsAsianMale').val();
	if(removePupilsAsianMale || setPupilsAsianMale != null && setPupilsAsianMale !== '')
		vals['setPupilsAsianMale'] = setPupilsAsianMale;
	var addPupilsAsianMale = $formValues.find('.addPupilsAsianMale').val();
	if(addPupilsAsianMale != null && addPupilsAsianMale !== '')
		vals['addPupilsAsianMale'] = addPupilsAsianMale;
	var removePupilsAsianMale = $formValues.find('.removePupilsAsianMale').val();
	if(removePupilsAsianMale != null && removePupilsAsianMale !== '')
		vals['removePupilsAsianMale'] = removePupilsAsianMale;

	var valuePupilsAsianTotal = $formValues.find('.valuePupilsAsianTotal').val();
	if(valuePupilsAsianTotal != null && valuePupilsAsianTotal !== '')
	var removePupilsAsianTotal = $formFilters.find('.removePupilsAsianTotal').val() === 'true';
	var setPupilsAsianTotal = removePupilsAsianTotal ? null : $formValues.find('.setPupilsAsianTotal').val();
	if(removePupilsAsianTotal || setPupilsAsianTotal != null && setPupilsAsianTotal !== '')
		vals['setPupilsAsianTotal'] = setPupilsAsianTotal;
	var addPupilsAsianTotal = $formValues.find('.addPupilsAsianTotal').val();
	if(addPupilsAsianTotal != null && addPupilsAsianTotal !== '')
		vals['addPupilsAsianTotal'] = addPupilsAsianTotal;
	var removePupilsAsianTotal = $formValues.find('.removePupilsAsianTotal').val();
	if(removePupilsAsianTotal != null && removePupilsAsianTotal !== '')
		vals['removePupilsAsianTotal'] = removePupilsAsianTotal;

	var valuePupilsAsianPercent = $formValues.find('.valuePupilsAsianPercent').val();
	if(valuePupilsAsianPercent != null && valuePupilsAsianPercent !== '')
	var removePupilsAsianPercent = $formFilters.find('.removePupilsAsianPercent').val() === 'true';
	var setPupilsAsianPercent = removePupilsAsianPercent ? null : $formValues.find('.setPupilsAsianPercent').val();
	if(removePupilsAsianPercent || setPupilsAsianPercent != null && setPupilsAsianPercent !== '')
		vals['setPupilsAsianPercent'] = setPupilsAsianPercent;
	var addPupilsAsianPercent = $formValues.find('.addPupilsAsianPercent').val();
	if(addPupilsAsianPercent != null && addPupilsAsianPercent !== '')
		vals['addPupilsAsianPercent'] = addPupilsAsianPercent;
	var removePupilsAsianPercent = $formValues.find('.removePupilsAsianPercent').val();
	if(removePupilsAsianPercent != null && removePupilsAsianPercent !== '')
		vals['removePupilsAsianPercent'] = removePupilsAsianPercent;

	var valuePupilsHispanicFemale = $formValues.find('.valuePupilsHispanicFemale').val();
	if(valuePupilsHispanicFemale != null && valuePupilsHispanicFemale !== '')
	var removePupilsHispanicFemale = $formFilters.find('.removePupilsHispanicFemale').val() === 'true';
	var setPupilsHispanicFemale = removePupilsHispanicFemale ? null : $formValues.find('.setPupilsHispanicFemale').val();
	if(removePupilsHispanicFemale || setPupilsHispanicFemale != null && setPupilsHispanicFemale !== '')
		vals['setPupilsHispanicFemale'] = setPupilsHispanicFemale;
	var addPupilsHispanicFemale = $formValues.find('.addPupilsHispanicFemale').val();
	if(addPupilsHispanicFemale != null && addPupilsHispanicFemale !== '')
		vals['addPupilsHispanicFemale'] = addPupilsHispanicFemale;
	var removePupilsHispanicFemale = $formValues.find('.removePupilsHispanicFemale').val();
	if(removePupilsHispanicFemale != null && removePupilsHispanicFemale !== '')
		vals['removePupilsHispanicFemale'] = removePupilsHispanicFemale;

	var valuePupilsHispanicMale = $formValues.find('.valuePupilsHispanicMale').val();
	if(valuePupilsHispanicMale != null && valuePupilsHispanicMale !== '')
	var removePupilsHispanicMale = $formFilters.find('.removePupilsHispanicMale').val() === 'true';
	var setPupilsHispanicMale = removePupilsHispanicMale ? null : $formValues.find('.setPupilsHispanicMale').val();
	if(removePupilsHispanicMale || setPupilsHispanicMale != null && setPupilsHispanicMale !== '')
		vals['setPupilsHispanicMale'] = setPupilsHispanicMale;
	var addPupilsHispanicMale = $formValues.find('.addPupilsHispanicMale').val();
	if(addPupilsHispanicMale != null && addPupilsHispanicMale !== '')
		vals['addPupilsHispanicMale'] = addPupilsHispanicMale;
	var removePupilsHispanicMale = $formValues.find('.removePupilsHispanicMale').val();
	if(removePupilsHispanicMale != null && removePupilsHispanicMale !== '')
		vals['removePupilsHispanicMale'] = removePupilsHispanicMale;

	var valuePupilsHispanicTotal = $formValues.find('.valuePupilsHispanicTotal').val();
	if(valuePupilsHispanicTotal != null && valuePupilsHispanicTotal !== '')
	var removePupilsHispanicTotal = $formFilters.find('.removePupilsHispanicTotal').val() === 'true';
	var setPupilsHispanicTotal = removePupilsHispanicTotal ? null : $formValues.find('.setPupilsHispanicTotal').val();
	if(removePupilsHispanicTotal || setPupilsHispanicTotal != null && setPupilsHispanicTotal !== '')
		vals['setPupilsHispanicTotal'] = setPupilsHispanicTotal;
	var addPupilsHispanicTotal = $formValues.find('.addPupilsHispanicTotal').val();
	if(addPupilsHispanicTotal != null && addPupilsHispanicTotal !== '')
		vals['addPupilsHispanicTotal'] = addPupilsHispanicTotal;
	var removePupilsHispanicTotal = $formValues.find('.removePupilsHispanicTotal').val();
	if(removePupilsHispanicTotal != null && removePupilsHispanicTotal !== '')
		vals['removePupilsHispanicTotal'] = removePupilsHispanicTotal;

	var valuePupilsHispanicPercent = $formValues.find('.valuePupilsHispanicPercent').val();
	if(valuePupilsHispanicPercent != null && valuePupilsHispanicPercent !== '')
	var removePupilsHispanicPercent = $formFilters.find('.removePupilsHispanicPercent').val() === 'true';
	var setPupilsHispanicPercent = removePupilsHispanicPercent ? null : $formValues.find('.setPupilsHispanicPercent').val();
	if(removePupilsHispanicPercent || setPupilsHispanicPercent != null && setPupilsHispanicPercent !== '')
		vals['setPupilsHispanicPercent'] = setPupilsHispanicPercent;
	var addPupilsHispanicPercent = $formValues.find('.addPupilsHispanicPercent').val();
	if(addPupilsHispanicPercent != null && addPupilsHispanicPercent !== '')
		vals['addPupilsHispanicPercent'] = addPupilsHispanicPercent;
	var removePupilsHispanicPercent = $formValues.find('.removePupilsHispanicPercent').val();
	if(removePupilsHispanicPercent != null && removePupilsHispanicPercent !== '')
		vals['removePupilsHispanicPercent'] = removePupilsHispanicPercent;

	var valuePupilsBlackFemale = $formValues.find('.valuePupilsBlackFemale').val();
	if(valuePupilsBlackFemale != null && valuePupilsBlackFemale !== '')
	var removePupilsBlackFemale = $formFilters.find('.removePupilsBlackFemale').val() === 'true';
	var setPupilsBlackFemale = removePupilsBlackFemale ? null : $formValues.find('.setPupilsBlackFemale').val();
	if(removePupilsBlackFemale || setPupilsBlackFemale != null && setPupilsBlackFemale !== '')
		vals['setPupilsBlackFemale'] = setPupilsBlackFemale;
	var addPupilsBlackFemale = $formValues.find('.addPupilsBlackFemale').val();
	if(addPupilsBlackFemale != null && addPupilsBlackFemale !== '')
		vals['addPupilsBlackFemale'] = addPupilsBlackFemale;
	var removePupilsBlackFemale = $formValues.find('.removePupilsBlackFemale').val();
	if(removePupilsBlackFemale != null && removePupilsBlackFemale !== '')
		vals['removePupilsBlackFemale'] = removePupilsBlackFemale;

	var valuePupilsBlackMale = $formValues.find('.valuePupilsBlackMale').val();
	if(valuePupilsBlackMale != null && valuePupilsBlackMale !== '')
	var removePupilsBlackMale = $formFilters.find('.removePupilsBlackMale').val() === 'true';
	var setPupilsBlackMale = removePupilsBlackMale ? null : $formValues.find('.setPupilsBlackMale').val();
	if(removePupilsBlackMale || setPupilsBlackMale != null && setPupilsBlackMale !== '')
		vals['setPupilsBlackMale'] = setPupilsBlackMale;
	var addPupilsBlackMale = $formValues.find('.addPupilsBlackMale').val();
	if(addPupilsBlackMale != null && addPupilsBlackMale !== '')
		vals['addPupilsBlackMale'] = addPupilsBlackMale;
	var removePupilsBlackMale = $formValues.find('.removePupilsBlackMale').val();
	if(removePupilsBlackMale != null && removePupilsBlackMale !== '')
		vals['removePupilsBlackMale'] = removePupilsBlackMale;

	var valuePupilsBlackTotal = $formValues.find('.valuePupilsBlackTotal').val();
	if(valuePupilsBlackTotal != null && valuePupilsBlackTotal !== '')
	var removePupilsBlackTotal = $formFilters.find('.removePupilsBlackTotal').val() === 'true';
	var setPupilsBlackTotal = removePupilsBlackTotal ? null : $formValues.find('.setPupilsBlackTotal').val();
	if(removePupilsBlackTotal || setPupilsBlackTotal != null && setPupilsBlackTotal !== '')
		vals['setPupilsBlackTotal'] = setPupilsBlackTotal;
	var addPupilsBlackTotal = $formValues.find('.addPupilsBlackTotal').val();
	if(addPupilsBlackTotal != null && addPupilsBlackTotal !== '')
		vals['addPupilsBlackTotal'] = addPupilsBlackTotal;
	var removePupilsBlackTotal = $formValues.find('.removePupilsBlackTotal').val();
	if(removePupilsBlackTotal != null && removePupilsBlackTotal !== '')
		vals['removePupilsBlackTotal'] = removePupilsBlackTotal;

	var valuePupilsBlackPercent = $formValues.find('.valuePupilsBlackPercent').val();
	if(valuePupilsBlackPercent != null && valuePupilsBlackPercent !== '')
	var removePupilsBlackPercent = $formFilters.find('.removePupilsBlackPercent').val() === 'true';
	var setPupilsBlackPercent = removePupilsBlackPercent ? null : $formValues.find('.setPupilsBlackPercent').val();
	if(removePupilsBlackPercent || setPupilsBlackPercent != null && setPupilsBlackPercent !== '')
		vals['setPupilsBlackPercent'] = setPupilsBlackPercent;
	var addPupilsBlackPercent = $formValues.find('.addPupilsBlackPercent').val();
	if(addPupilsBlackPercent != null && addPupilsBlackPercent !== '')
		vals['addPupilsBlackPercent'] = addPupilsBlackPercent;
	var removePupilsBlackPercent = $formValues.find('.removePupilsBlackPercent').val();
	if(removePupilsBlackPercent != null && removePupilsBlackPercent !== '')
		vals['removePupilsBlackPercent'] = removePupilsBlackPercent;

	var valuePupilsWhiteFemale = $formValues.find('.valuePupilsWhiteFemale').val();
	if(valuePupilsWhiteFemale != null && valuePupilsWhiteFemale !== '')
	var removePupilsWhiteFemale = $formFilters.find('.removePupilsWhiteFemale').val() === 'true';
	var setPupilsWhiteFemale = removePupilsWhiteFemale ? null : $formValues.find('.setPupilsWhiteFemale').val();
	if(removePupilsWhiteFemale || setPupilsWhiteFemale != null && setPupilsWhiteFemale !== '')
		vals['setPupilsWhiteFemale'] = setPupilsWhiteFemale;
	var addPupilsWhiteFemale = $formValues.find('.addPupilsWhiteFemale').val();
	if(addPupilsWhiteFemale != null && addPupilsWhiteFemale !== '')
		vals['addPupilsWhiteFemale'] = addPupilsWhiteFemale;
	var removePupilsWhiteFemale = $formValues.find('.removePupilsWhiteFemale').val();
	if(removePupilsWhiteFemale != null && removePupilsWhiteFemale !== '')
		vals['removePupilsWhiteFemale'] = removePupilsWhiteFemale;

	var valuePupilsWhiteMale = $formValues.find('.valuePupilsWhiteMale').val();
	if(valuePupilsWhiteMale != null && valuePupilsWhiteMale !== '')
	var removePupilsWhiteMale = $formFilters.find('.removePupilsWhiteMale').val() === 'true';
	var setPupilsWhiteMale = removePupilsWhiteMale ? null : $formValues.find('.setPupilsWhiteMale').val();
	if(removePupilsWhiteMale || setPupilsWhiteMale != null && setPupilsWhiteMale !== '')
		vals['setPupilsWhiteMale'] = setPupilsWhiteMale;
	var addPupilsWhiteMale = $formValues.find('.addPupilsWhiteMale').val();
	if(addPupilsWhiteMale != null && addPupilsWhiteMale !== '')
		vals['addPupilsWhiteMale'] = addPupilsWhiteMale;
	var removePupilsWhiteMale = $formValues.find('.removePupilsWhiteMale').val();
	if(removePupilsWhiteMale != null && removePupilsWhiteMale !== '')
		vals['removePupilsWhiteMale'] = removePupilsWhiteMale;

	var valuePupilsWhiteTotal = $formValues.find('.valuePupilsWhiteTotal').val();
	if(valuePupilsWhiteTotal != null && valuePupilsWhiteTotal !== '')
	var removePupilsWhiteTotal = $formFilters.find('.removePupilsWhiteTotal').val() === 'true';
	var setPupilsWhiteTotal = removePupilsWhiteTotal ? null : $formValues.find('.setPupilsWhiteTotal').val();
	if(removePupilsWhiteTotal || setPupilsWhiteTotal != null && setPupilsWhiteTotal !== '')
		vals['setPupilsWhiteTotal'] = setPupilsWhiteTotal;
	var addPupilsWhiteTotal = $formValues.find('.addPupilsWhiteTotal').val();
	if(addPupilsWhiteTotal != null && addPupilsWhiteTotal !== '')
		vals['addPupilsWhiteTotal'] = addPupilsWhiteTotal;
	var removePupilsWhiteTotal = $formValues.find('.removePupilsWhiteTotal').val();
	if(removePupilsWhiteTotal != null && removePupilsWhiteTotal !== '')
		vals['removePupilsWhiteTotal'] = removePupilsWhiteTotal;

	var valuePupilsWhitePercent = $formValues.find('.valuePupilsWhitePercent').val();
	if(valuePupilsWhitePercent != null && valuePupilsWhitePercent !== '')
	var removePupilsWhitePercent = $formFilters.find('.removePupilsWhitePercent').val() === 'true';
	var setPupilsWhitePercent = removePupilsWhitePercent ? null : $formValues.find('.setPupilsWhitePercent').val();
	if(removePupilsWhitePercent || setPupilsWhitePercent != null && setPupilsWhitePercent !== '')
		vals['setPupilsWhitePercent'] = setPupilsWhitePercent;
	var addPupilsWhitePercent = $formValues.find('.addPupilsWhitePercent').val();
	if(addPupilsWhitePercent != null && addPupilsWhitePercent !== '')
		vals['addPupilsWhitePercent'] = addPupilsWhitePercent;
	var removePupilsWhitePercent = $formValues.find('.removePupilsWhitePercent').val();
	if(removePupilsWhitePercent != null && removePupilsWhitePercent !== '')
		vals['removePupilsWhitePercent'] = removePupilsWhitePercent;

	var valuePupilsPacificIslanderFemale = $formValues.find('.valuePupilsPacificIslanderFemale').val();
	if(valuePupilsPacificIslanderFemale != null && valuePupilsPacificIslanderFemale !== '')
	var removePupilsPacificIslanderFemale = $formFilters.find('.removePupilsPacificIslanderFemale').val() === 'true';
	var setPupilsPacificIslanderFemale = removePupilsPacificIslanderFemale ? null : $formValues.find('.setPupilsPacificIslanderFemale').val();
	if(removePupilsPacificIslanderFemale || setPupilsPacificIslanderFemale != null && setPupilsPacificIslanderFemale !== '')
		vals['setPupilsPacificIslanderFemale'] = setPupilsPacificIslanderFemale;
	var addPupilsPacificIslanderFemale = $formValues.find('.addPupilsPacificIslanderFemale').val();
	if(addPupilsPacificIslanderFemale != null && addPupilsPacificIslanderFemale !== '')
		vals['addPupilsPacificIslanderFemale'] = addPupilsPacificIslanderFemale;
	var removePupilsPacificIslanderFemale = $formValues.find('.removePupilsPacificIslanderFemale').val();
	if(removePupilsPacificIslanderFemale != null && removePupilsPacificIslanderFemale !== '')
		vals['removePupilsPacificIslanderFemale'] = removePupilsPacificIslanderFemale;

	var valuePupilsPacificIslanderMale = $formValues.find('.valuePupilsPacificIslanderMale').val();
	if(valuePupilsPacificIslanderMale != null && valuePupilsPacificIslanderMale !== '')
	var removePupilsPacificIslanderMale = $formFilters.find('.removePupilsPacificIslanderMale').val() === 'true';
	var setPupilsPacificIslanderMale = removePupilsPacificIslanderMale ? null : $formValues.find('.setPupilsPacificIslanderMale').val();
	if(removePupilsPacificIslanderMale || setPupilsPacificIslanderMale != null && setPupilsPacificIslanderMale !== '')
		vals['setPupilsPacificIslanderMale'] = setPupilsPacificIslanderMale;
	var addPupilsPacificIslanderMale = $formValues.find('.addPupilsPacificIslanderMale').val();
	if(addPupilsPacificIslanderMale != null && addPupilsPacificIslanderMale !== '')
		vals['addPupilsPacificIslanderMale'] = addPupilsPacificIslanderMale;
	var removePupilsPacificIslanderMale = $formValues.find('.removePupilsPacificIslanderMale').val();
	if(removePupilsPacificIslanderMale != null && removePupilsPacificIslanderMale !== '')
		vals['removePupilsPacificIslanderMale'] = removePupilsPacificIslanderMale;

	var valuePupilsPacificIslanderTotal = $formValues.find('.valuePupilsPacificIslanderTotal').val();
	if(valuePupilsPacificIslanderTotal != null && valuePupilsPacificIslanderTotal !== '')
	var removePupilsPacificIslanderTotal = $formFilters.find('.removePupilsPacificIslanderTotal').val() === 'true';
	var setPupilsPacificIslanderTotal = removePupilsPacificIslanderTotal ? null : $formValues.find('.setPupilsPacificIslanderTotal').val();
	if(removePupilsPacificIslanderTotal || setPupilsPacificIslanderTotal != null && setPupilsPacificIslanderTotal !== '')
		vals['setPupilsPacificIslanderTotal'] = setPupilsPacificIslanderTotal;
	var addPupilsPacificIslanderTotal = $formValues.find('.addPupilsPacificIslanderTotal').val();
	if(addPupilsPacificIslanderTotal != null && addPupilsPacificIslanderTotal !== '')
		vals['addPupilsPacificIslanderTotal'] = addPupilsPacificIslanderTotal;
	var removePupilsPacificIslanderTotal = $formValues.find('.removePupilsPacificIslanderTotal').val();
	if(removePupilsPacificIslanderTotal != null && removePupilsPacificIslanderTotal !== '')
		vals['removePupilsPacificIslanderTotal'] = removePupilsPacificIslanderTotal;

	var valuePupilsPacificIslanderPercent = $formValues.find('.valuePupilsPacificIslanderPercent').val();
	if(valuePupilsPacificIslanderPercent != null && valuePupilsPacificIslanderPercent !== '')
	var removePupilsPacificIslanderPercent = $formFilters.find('.removePupilsPacificIslanderPercent').val() === 'true';
	var setPupilsPacificIslanderPercent = removePupilsPacificIslanderPercent ? null : $formValues.find('.setPupilsPacificIslanderPercent').val();
	if(removePupilsPacificIslanderPercent || setPupilsPacificIslanderPercent != null && setPupilsPacificIslanderPercent !== '')
		vals['setPupilsPacificIslanderPercent'] = setPupilsPacificIslanderPercent;
	var addPupilsPacificIslanderPercent = $formValues.find('.addPupilsPacificIslanderPercent').val();
	if(addPupilsPacificIslanderPercent != null && addPupilsPacificIslanderPercent !== '')
		vals['addPupilsPacificIslanderPercent'] = addPupilsPacificIslanderPercent;
	var removePupilsPacificIslanderPercent = $formValues.find('.removePupilsPacificIslanderPercent').val();
	if(removePupilsPacificIslanderPercent != null && removePupilsPacificIslanderPercent !== '')
		vals['removePupilsPacificIslanderPercent'] = removePupilsPacificIslanderPercent;

	var valuePupilsMultiRacialFemale = $formValues.find('.valuePupilsMultiRacialFemale').val();
	if(valuePupilsMultiRacialFemale != null && valuePupilsMultiRacialFemale !== '')
	var removePupilsMultiRacialFemale = $formFilters.find('.removePupilsMultiRacialFemale').val() === 'true';
	var setPupilsMultiRacialFemale = removePupilsMultiRacialFemale ? null : $formValues.find('.setPupilsMultiRacialFemale').val();
	if(removePupilsMultiRacialFemale || setPupilsMultiRacialFemale != null && setPupilsMultiRacialFemale !== '')
		vals['setPupilsMultiRacialFemale'] = setPupilsMultiRacialFemale;
	var addPupilsMultiRacialFemale = $formValues.find('.addPupilsMultiRacialFemale').val();
	if(addPupilsMultiRacialFemale != null && addPupilsMultiRacialFemale !== '')
		vals['addPupilsMultiRacialFemale'] = addPupilsMultiRacialFemale;
	var removePupilsMultiRacialFemale = $formValues.find('.removePupilsMultiRacialFemale').val();
	if(removePupilsMultiRacialFemale != null && removePupilsMultiRacialFemale !== '')
		vals['removePupilsMultiRacialFemale'] = removePupilsMultiRacialFemale;

	var valuePupilsMultiRacialMale = $formValues.find('.valuePupilsMultiRacialMale').val();
	if(valuePupilsMultiRacialMale != null && valuePupilsMultiRacialMale !== '')
	var removePupilsMultiRacialMale = $formFilters.find('.removePupilsMultiRacialMale').val() === 'true';
	var setPupilsMultiRacialMale = removePupilsMultiRacialMale ? null : $formValues.find('.setPupilsMultiRacialMale').val();
	if(removePupilsMultiRacialMale || setPupilsMultiRacialMale != null && setPupilsMultiRacialMale !== '')
		vals['setPupilsMultiRacialMale'] = setPupilsMultiRacialMale;
	var addPupilsMultiRacialMale = $formValues.find('.addPupilsMultiRacialMale').val();
	if(addPupilsMultiRacialMale != null && addPupilsMultiRacialMale !== '')
		vals['addPupilsMultiRacialMale'] = addPupilsMultiRacialMale;
	var removePupilsMultiRacialMale = $formValues.find('.removePupilsMultiRacialMale').val();
	if(removePupilsMultiRacialMale != null && removePupilsMultiRacialMale !== '')
		vals['removePupilsMultiRacialMale'] = removePupilsMultiRacialMale;

	var valuePupilsMultiRacialTotal = $formValues.find('.valuePupilsMultiRacialTotal').val();
	if(valuePupilsMultiRacialTotal != null && valuePupilsMultiRacialTotal !== '')
	var removePupilsMultiRacialTotal = $formFilters.find('.removePupilsMultiRacialTotal').val() === 'true';
	var setPupilsMultiRacialTotal = removePupilsMultiRacialTotal ? null : $formValues.find('.setPupilsMultiRacialTotal').val();
	if(removePupilsMultiRacialTotal || setPupilsMultiRacialTotal != null && setPupilsMultiRacialTotal !== '')
		vals['setPupilsMultiRacialTotal'] = setPupilsMultiRacialTotal;
	var addPupilsMultiRacialTotal = $formValues.find('.addPupilsMultiRacialTotal').val();
	if(addPupilsMultiRacialTotal != null && addPupilsMultiRacialTotal !== '')
		vals['addPupilsMultiRacialTotal'] = addPupilsMultiRacialTotal;
	var removePupilsMultiRacialTotal = $formValues.find('.removePupilsMultiRacialTotal').val();
	if(removePupilsMultiRacialTotal != null && removePupilsMultiRacialTotal !== '')
		vals['removePupilsMultiRacialTotal'] = removePupilsMultiRacialTotal;

	var valuePupilsMultiRacialPercent = $formValues.find('.valuePupilsMultiRacialPercent').val();
	if(valuePupilsMultiRacialPercent != null && valuePupilsMultiRacialPercent !== '')
	var removePupilsMultiRacialPercent = $formFilters.find('.removePupilsMultiRacialPercent').val() === 'true';
	var setPupilsMultiRacialPercent = removePupilsMultiRacialPercent ? null : $formValues.find('.setPupilsMultiRacialPercent').val();
	if(removePupilsMultiRacialPercent || setPupilsMultiRacialPercent != null && setPupilsMultiRacialPercent !== '')
		vals['setPupilsMultiRacialPercent'] = setPupilsMultiRacialPercent;
	var addPupilsMultiRacialPercent = $formValues.find('.addPupilsMultiRacialPercent').val();
	if(addPupilsMultiRacialPercent != null && addPupilsMultiRacialPercent !== '')
		vals['addPupilsMultiRacialPercent'] = addPupilsMultiRacialPercent;
	var removePupilsMultiRacialPercent = $formValues.find('.removePupilsMultiRacialPercent').val();
	if(removePupilsMultiRacialPercent != null && removePupilsMultiRacialPercent !== '')
		vals['removePupilsMultiRacialPercent'] = removePupilsMultiRacialPercent;

	var valueDelinquentComplaintsTotal = $formValues.find('.valueDelinquentComplaintsTotal').val();
	if(valueDelinquentComplaintsTotal != null && valueDelinquentComplaintsTotal !== '')
	var removeDelinquentComplaintsTotal = $formFilters.find('.removeDelinquentComplaintsTotal').val() === 'true';
	var setDelinquentComplaintsTotal = removeDelinquentComplaintsTotal ? null : $formValues.find('.setDelinquentComplaintsTotal').val();
	if(removeDelinquentComplaintsTotal || setDelinquentComplaintsTotal != null && setDelinquentComplaintsTotal !== '')
		vals['setDelinquentComplaintsTotal'] = setDelinquentComplaintsTotal;
	var addDelinquentComplaintsTotal = $formValues.find('.addDelinquentComplaintsTotal').val();
	if(addDelinquentComplaintsTotal != null && addDelinquentComplaintsTotal !== '')
		vals['addDelinquentComplaintsTotal'] = addDelinquentComplaintsTotal;
	var removeDelinquentComplaintsTotal = $formValues.find('.removeDelinquentComplaintsTotal').val();
	if(removeDelinquentComplaintsTotal != null && removeDelinquentComplaintsTotal !== '')
		vals['removeDelinquentComplaintsTotal'] = removeDelinquentComplaintsTotal;

	var valueDelinquentComplaintsAtSchool = $formValues.find('.valueDelinquentComplaintsAtSchool').val();
	if(valueDelinquentComplaintsAtSchool != null && valueDelinquentComplaintsAtSchool !== '')
	var removeDelinquentComplaintsAtSchool = $formFilters.find('.removeDelinquentComplaintsAtSchool').val() === 'true';
	var setDelinquentComplaintsAtSchool = removeDelinquentComplaintsAtSchool ? null : $formValues.find('.setDelinquentComplaintsAtSchool').val();
	if(removeDelinquentComplaintsAtSchool || setDelinquentComplaintsAtSchool != null && setDelinquentComplaintsAtSchool !== '')
		vals['setDelinquentComplaintsAtSchool'] = setDelinquentComplaintsAtSchool;
	var addDelinquentComplaintsAtSchool = $formValues.find('.addDelinquentComplaintsAtSchool').val();
	if(addDelinquentComplaintsAtSchool != null && addDelinquentComplaintsAtSchool !== '')
		vals['addDelinquentComplaintsAtSchool'] = addDelinquentComplaintsAtSchool;
	var removeDelinquentComplaintsAtSchool = $formValues.find('.removeDelinquentComplaintsAtSchool').val();
	if(removeDelinquentComplaintsAtSchool != null && removeDelinquentComplaintsAtSchool !== '')
		vals['removeDelinquentComplaintsAtSchool'] = removeDelinquentComplaintsAtSchool;

	var valueDelinquentComplaintsAtSchoolPercent = $formValues.find('.valueDelinquentComplaintsAtSchoolPercent').val();
	if(valueDelinquentComplaintsAtSchoolPercent != null && valueDelinquentComplaintsAtSchoolPercent !== '')
	var removeDelinquentComplaintsAtSchoolPercent = $formFilters.find('.removeDelinquentComplaintsAtSchoolPercent').val() === 'true';
	var setDelinquentComplaintsAtSchoolPercent = removeDelinquentComplaintsAtSchoolPercent ? null : $formValues.find('.setDelinquentComplaintsAtSchoolPercent').val();
	if(removeDelinquentComplaintsAtSchoolPercent || setDelinquentComplaintsAtSchoolPercent != null && setDelinquentComplaintsAtSchoolPercent !== '')
		vals['setDelinquentComplaintsAtSchoolPercent'] = setDelinquentComplaintsAtSchoolPercent;
	var addDelinquentComplaintsAtSchoolPercent = $formValues.find('.addDelinquentComplaintsAtSchoolPercent').val();
	if(addDelinquentComplaintsAtSchoolPercent != null && addDelinquentComplaintsAtSchoolPercent !== '')
		vals['addDelinquentComplaintsAtSchoolPercent'] = addDelinquentComplaintsAtSchoolPercent;
	var removeDelinquentComplaintsAtSchoolPercent = $formValues.find('.removeDelinquentComplaintsAtSchoolPercent').val();
	if(removeDelinquentComplaintsAtSchoolPercent != null && removeDelinquentComplaintsAtSchoolPercent !== '')
		vals['removeDelinquentComplaintsAtSchoolPercent'] = removeDelinquentComplaintsAtSchoolPercent;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchReportCardVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchReportCardFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterReportCardStartYear = $formFilters.find('.valueReportCardStartYear').val();
		if(filterReportCardStartYear != null && filterReportCardStartYear !== '')
			filters.push({ name: 'fq', value: 'reportCardStartYear:' + filterReportCardStartYear });

		var filterReportCardEndYear = $formFilters.find('.valueReportCardEndYear').val();
		if(filterReportCardEndYear != null && filterReportCardEndYear !== '')
			filters.push({ name: 'fq', value: 'reportCardEndYear:' + filterReportCardEndYear });

		var filterCountyKey = $formFilters.find('.valueCountyKey').val();
		if(filterCountyKey != null && filterCountyKey !== '')
			filters.push({ name: 'fq', value: 'countyKey:' + filterCountyKey });

		var filterPupilsTotal = $formFilters.find('.valuePupilsTotal').val();
		if(filterPupilsTotal != null && filterPupilsTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsTotal:' + filterPupilsTotal });

		var filterPupilsIndianFemale = $formFilters.find('.valuePupilsIndianFemale').val();
		if(filterPupilsIndianFemale != null && filterPupilsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianFemale:' + filterPupilsIndianFemale });

		var filterPupilsIndianMale = $formFilters.find('.valuePupilsIndianMale').val();
		if(filterPupilsIndianMale != null && filterPupilsIndianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianMale:' + filterPupilsIndianMale });

		var filterPupilsIndianTotal = $formFilters.find('.valuePupilsIndianTotal').val();
		if(filterPupilsIndianTotal != null && filterPupilsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianTotal:' + filterPupilsIndianTotal });

		var filterPupilsIndianPercent = $formFilters.find('.valuePupilsIndianPercent').val();
		if(filterPupilsIndianPercent != null && filterPupilsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianPercent:' + filterPupilsIndianPercent });

		var filterPupilsAsianFemale = $formFilters.find('.valuePupilsAsianFemale').val();
		if(filterPupilsAsianFemale != null && filterPupilsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianFemale:' + filterPupilsAsianFemale });

		var filterPupilsAsianMale = $formFilters.find('.valuePupilsAsianMale').val();
		if(filterPupilsAsianMale != null && filterPupilsAsianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianMale:' + filterPupilsAsianMale });

		var filterPupilsAsianTotal = $formFilters.find('.valuePupilsAsianTotal').val();
		if(filterPupilsAsianTotal != null && filterPupilsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianTotal:' + filterPupilsAsianTotal });

		var filterPupilsAsianPercent = $formFilters.find('.valuePupilsAsianPercent').val();
		if(filterPupilsAsianPercent != null && filterPupilsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianPercent:' + filterPupilsAsianPercent });

		var filterPupilsHispanicFemale = $formFilters.find('.valuePupilsHispanicFemale').val();
		if(filterPupilsHispanicFemale != null && filterPupilsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicFemale:' + filterPupilsHispanicFemale });

		var filterPupilsHispanicMale = $formFilters.find('.valuePupilsHispanicMale').val();
		if(filterPupilsHispanicMale != null && filterPupilsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicMale:' + filterPupilsHispanicMale });

		var filterPupilsHispanicTotal = $formFilters.find('.valuePupilsHispanicTotal').val();
		if(filterPupilsHispanicTotal != null && filterPupilsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicTotal:' + filterPupilsHispanicTotal });

		var filterPupilsHispanicPercent = $formFilters.find('.valuePupilsHispanicPercent').val();
		if(filterPupilsHispanicPercent != null && filterPupilsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicPercent:' + filterPupilsHispanicPercent });

		var filterPupilsBlackFemale = $formFilters.find('.valuePupilsBlackFemale').val();
		if(filterPupilsBlackFemale != null && filterPupilsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackFemale:' + filterPupilsBlackFemale });

		var filterPupilsBlackMale = $formFilters.find('.valuePupilsBlackMale').val();
		if(filterPupilsBlackMale != null && filterPupilsBlackMale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackMale:' + filterPupilsBlackMale });

		var filterPupilsBlackTotal = $formFilters.find('.valuePupilsBlackTotal').val();
		if(filterPupilsBlackTotal != null && filterPupilsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackTotal:' + filterPupilsBlackTotal });

		var filterPupilsBlackPercent = $formFilters.find('.valuePupilsBlackPercent').val();
		if(filterPupilsBlackPercent != null && filterPupilsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackPercent:' + filterPupilsBlackPercent });

		var filterPupilsWhiteFemale = $formFilters.find('.valuePupilsWhiteFemale').val();
		if(filterPupilsWhiteFemale != null && filterPupilsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteFemale:' + filterPupilsWhiteFemale });

		var filterPupilsWhiteMale = $formFilters.find('.valuePupilsWhiteMale').val();
		if(filterPupilsWhiteMale != null && filterPupilsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteMale:' + filterPupilsWhiteMale });

		var filterPupilsWhiteTotal = $formFilters.find('.valuePupilsWhiteTotal').val();
		if(filterPupilsWhiteTotal != null && filterPupilsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteTotal:' + filterPupilsWhiteTotal });

		var filterPupilsWhitePercent = $formFilters.find('.valuePupilsWhitePercent').val();
		if(filterPupilsWhitePercent != null && filterPupilsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'pupilsWhitePercent:' + filterPupilsWhitePercent });

		var filterPupilsPacificIslanderFemale = $formFilters.find('.valuePupilsPacificIslanderFemale').val();
		if(filterPupilsPacificIslanderFemale != null && filterPupilsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderFemale:' + filterPupilsPacificIslanderFemale });

		var filterPupilsPacificIslanderMale = $formFilters.find('.valuePupilsPacificIslanderMale').val();
		if(filterPupilsPacificIslanderMale != null && filterPupilsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderMale:' + filterPupilsPacificIslanderMale });

		var filterPupilsPacificIslanderTotal = $formFilters.find('.valuePupilsPacificIslanderTotal').val();
		if(filterPupilsPacificIslanderTotal != null && filterPupilsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderTotal:' + filterPupilsPacificIslanderTotal });

		var filterPupilsPacificIslanderPercent = $formFilters.find('.valuePupilsPacificIslanderPercent').val();
		if(filterPupilsPacificIslanderPercent != null && filterPupilsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderPercent:' + filterPupilsPacificIslanderPercent });

		var filterPupilsMultiRacialFemale = $formFilters.find('.valuePupilsMultiRacialFemale').val();
		if(filterPupilsMultiRacialFemale != null && filterPupilsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialFemale:' + filterPupilsMultiRacialFemale });

		var filterPupilsMultiRacialMale = $formFilters.find('.valuePupilsMultiRacialMale').val();
		if(filterPupilsMultiRacialMale != null && filterPupilsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialMale:' + filterPupilsMultiRacialMale });

		var filterPupilsMultiRacialTotal = $formFilters.find('.valuePupilsMultiRacialTotal').val();
		if(filterPupilsMultiRacialTotal != null && filterPupilsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialTotal:' + filterPupilsMultiRacialTotal });

		var filterPupilsMultiRacialPercent = $formFilters.find('.valuePupilsMultiRacialPercent').val();
		if(filterPupilsMultiRacialPercent != null && filterPupilsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialPercent:' + filterPupilsMultiRacialPercent });

		var filterDelinquentComplaintsTotal = $formFilters.find('.valueDelinquentComplaintsTotal').val();
		if(filterDelinquentComplaintsTotal != null && filterDelinquentComplaintsTotal !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsTotal:' + filterDelinquentComplaintsTotal });

		var filterDelinquentComplaintsAtSchool = $formFilters.find('.valueDelinquentComplaintsAtSchool').val();
		if(filterDelinquentComplaintsAtSchool != null && filterDelinquentComplaintsAtSchool !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchool:' + filterDelinquentComplaintsAtSchool });

		var filterDelinquentComplaintsAtSchoolPercent = $formFilters.find('.valueDelinquentComplaintsAtSchoolPercent').val();
		if(filterDelinquentComplaintsAtSchoolPercent != null && filterDelinquentComplaintsAtSchoolPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchoolPercent:' + filterDelinquentComplaintsAtSchoolPercent });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterReportCardKey = $formFilters.find('.valueReportCardKey').val();
		if(filterReportCardKey != null && filterReportCardKey !== '')
			filters.push({ name: 'fq', value: 'reportCardKey:' + filterReportCardKey });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterCountyName = $formFilters.find('.valueCountyName').val();
		if(filterCountyName != null && filterCountyName !== '')
			filters.push({ name: 'fq', value: 'countyName:' + filterCountyName });

		var filterCountyCompleteName = $formFilters.find('.valueCountyCompleteName').val();
		if(filterCountyCompleteName != null && filterCountyCompleteName !== '')
			filters.push({ name: 'fq', value: 'countyCompleteName:' + filterCountyCompleteName });
	}
	return filters;
}

function patchReportCardVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchReportCardVals(filters, vals, success, error);
}

function patchReportCardVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/reportcard?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getReportCard(pk) {
	$.ajax({
		url: '/api/reportcard/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchReportCard($formFilters, success, error) {
	var filters = searchReportCardFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchReportCardVals(filters, success, error);
}

function searchReportCardFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterReportCardStartYear = $formFilters.find('.valueReportCardStartYear').val();
		if(filterReportCardStartYear != null && filterReportCardStartYear !== '')
			filters.push({ name: 'fq', value: 'reportCardStartYear:' + filterReportCardStartYear });

		var filterReportCardEndYear = $formFilters.find('.valueReportCardEndYear').val();
		if(filterReportCardEndYear != null && filterReportCardEndYear !== '')
			filters.push({ name: 'fq', value: 'reportCardEndYear:' + filterReportCardEndYear });

		var filterCountyKey = $formFilters.find('.valueCountyKey').val();
		if(filterCountyKey != null && filterCountyKey !== '')
			filters.push({ name: 'fq', value: 'countyKey:' + filterCountyKey });

		var filterPupilsTotal = $formFilters.find('.valuePupilsTotal').val();
		if(filterPupilsTotal != null && filterPupilsTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsTotal:' + filterPupilsTotal });

		var filterPupilsIndianFemale = $formFilters.find('.valuePupilsIndianFemale').val();
		if(filterPupilsIndianFemale != null && filterPupilsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianFemale:' + filterPupilsIndianFemale });

		var filterPupilsIndianMale = $formFilters.find('.valuePupilsIndianMale').val();
		if(filterPupilsIndianMale != null && filterPupilsIndianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianMale:' + filterPupilsIndianMale });

		var filterPupilsIndianTotal = $formFilters.find('.valuePupilsIndianTotal').val();
		if(filterPupilsIndianTotal != null && filterPupilsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianTotal:' + filterPupilsIndianTotal });

		var filterPupilsIndianPercent = $formFilters.find('.valuePupilsIndianPercent').val();
		if(filterPupilsIndianPercent != null && filterPupilsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianPercent:' + filterPupilsIndianPercent });

		var filterPupilsAsianFemale = $formFilters.find('.valuePupilsAsianFemale').val();
		if(filterPupilsAsianFemale != null && filterPupilsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianFemale:' + filterPupilsAsianFemale });

		var filterPupilsAsianMale = $formFilters.find('.valuePupilsAsianMale').val();
		if(filterPupilsAsianMale != null && filterPupilsAsianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianMale:' + filterPupilsAsianMale });

		var filterPupilsAsianTotal = $formFilters.find('.valuePupilsAsianTotal').val();
		if(filterPupilsAsianTotal != null && filterPupilsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianTotal:' + filterPupilsAsianTotal });

		var filterPupilsAsianPercent = $formFilters.find('.valuePupilsAsianPercent').val();
		if(filterPupilsAsianPercent != null && filterPupilsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianPercent:' + filterPupilsAsianPercent });

		var filterPupilsHispanicFemale = $formFilters.find('.valuePupilsHispanicFemale').val();
		if(filterPupilsHispanicFemale != null && filterPupilsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicFemale:' + filterPupilsHispanicFemale });

		var filterPupilsHispanicMale = $formFilters.find('.valuePupilsHispanicMale').val();
		if(filterPupilsHispanicMale != null && filterPupilsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicMale:' + filterPupilsHispanicMale });

		var filterPupilsHispanicTotal = $formFilters.find('.valuePupilsHispanicTotal').val();
		if(filterPupilsHispanicTotal != null && filterPupilsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicTotal:' + filterPupilsHispanicTotal });

		var filterPupilsHispanicPercent = $formFilters.find('.valuePupilsHispanicPercent').val();
		if(filterPupilsHispanicPercent != null && filterPupilsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicPercent:' + filterPupilsHispanicPercent });

		var filterPupilsBlackFemale = $formFilters.find('.valuePupilsBlackFemale').val();
		if(filterPupilsBlackFemale != null && filterPupilsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackFemale:' + filterPupilsBlackFemale });

		var filterPupilsBlackMale = $formFilters.find('.valuePupilsBlackMale').val();
		if(filterPupilsBlackMale != null && filterPupilsBlackMale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackMale:' + filterPupilsBlackMale });

		var filterPupilsBlackTotal = $formFilters.find('.valuePupilsBlackTotal').val();
		if(filterPupilsBlackTotal != null && filterPupilsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackTotal:' + filterPupilsBlackTotal });

		var filterPupilsBlackPercent = $formFilters.find('.valuePupilsBlackPercent').val();
		if(filterPupilsBlackPercent != null && filterPupilsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackPercent:' + filterPupilsBlackPercent });

		var filterPupilsWhiteFemale = $formFilters.find('.valuePupilsWhiteFemale').val();
		if(filterPupilsWhiteFemale != null && filterPupilsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteFemale:' + filterPupilsWhiteFemale });

		var filterPupilsWhiteMale = $formFilters.find('.valuePupilsWhiteMale').val();
		if(filterPupilsWhiteMale != null && filterPupilsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteMale:' + filterPupilsWhiteMale });

		var filterPupilsWhiteTotal = $formFilters.find('.valuePupilsWhiteTotal').val();
		if(filterPupilsWhiteTotal != null && filterPupilsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteTotal:' + filterPupilsWhiteTotal });

		var filterPupilsWhitePercent = $formFilters.find('.valuePupilsWhitePercent').val();
		if(filterPupilsWhitePercent != null && filterPupilsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'pupilsWhitePercent:' + filterPupilsWhitePercent });

		var filterPupilsPacificIslanderFemale = $formFilters.find('.valuePupilsPacificIslanderFemale').val();
		if(filterPupilsPacificIslanderFemale != null && filterPupilsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderFemale:' + filterPupilsPacificIslanderFemale });

		var filterPupilsPacificIslanderMale = $formFilters.find('.valuePupilsPacificIslanderMale').val();
		if(filterPupilsPacificIslanderMale != null && filterPupilsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderMale:' + filterPupilsPacificIslanderMale });

		var filterPupilsPacificIslanderTotal = $formFilters.find('.valuePupilsPacificIslanderTotal').val();
		if(filterPupilsPacificIslanderTotal != null && filterPupilsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderTotal:' + filterPupilsPacificIslanderTotal });

		var filterPupilsPacificIslanderPercent = $formFilters.find('.valuePupilsPacificIslanderPercent').val();
		if(filterPupilsPacificIslanderPercent != null && filterPupilsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderPercent:' + filterPupilsPacificIslanderPercent });

		var filterPupilsMultiRacialFemale = $formFilters.find('.valuePupilsMultiRacialFemale').val();
		if(filterPupilsMultiRacialFemale != null && filterPupilsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialFemale:' + filterPupilsMultiRacialFemale });

		var filterPupilsMultiRacialMale = $formFilters.find('.valuePupilsMultiRacialMale').val();
		if(filterPupilsMultiRacialMale != null && filterPupilsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialMale:' + filterPupilsMultiRacialMale });

		var filterPupilsMultiRacialTotal = $formFilters.find('.valuePupilsMultiRacialTotal').val();
		if(filterPupilsMultiRacialTotal != null && filterPupilsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialTotal:' + filterPupilsMultiRacialTotal });

		var filterPupilsMultiRacialPercent = $formFilters.find('.valuePupilsMultiRacialPercent').val();
		if(filterPupilsMultiRacialPercent != null && filterPupilsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialPercent:' + filterPupilsMultiRacialPercent });

		var filterDelinquentComplaintsTotal = $formFilters.find('.valueDelinquentComplaintsTotal').val();
		if(filterDelinquentComplaintsTotal != null && filterDelinquentComplaintsTotal !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsTotal:' + filterDelinquentComplaintsTotal });

		var filterDelinquentComplaintsAtSchool = $formFilters.find('.valueDelinquentComplaintsAtSchool').val();
		if(filterDelinquentComplaintsAtSchool != null && filterDelinquentComplaintsAtSchool !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchool:' + filterDelinquentComplaintsAtSchool });

		var filterDelinquentComplaintsAtSchoolPercent = $formFilters.find('.valueDelinquentComplaintsAtSchoolPercent').val();
		if(filterDelinquentComplaintsAtSchoolPercent != null && filterDelinquentComplaintsAtSchoolPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchoolPercent:' + filterDelinquentComplaintsAtSchoolPercent });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterReportCardKey = $formFilters.find('.valueReportCardKey').val();
		if(filterReportCardKey != null && filterReportCardKey !== '')
			filters.push({ name: 'fq', value: 'reportCardKey:' + filterReportCardKey });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterCountyName = $formFilters.find('.valueCountyName').val();
		if(filterCountyName != null && filterCountyName !== '')
			filters.push({ name: 'fq', value: 'countyName:' + filterCountyName });

		var filterCountyCompleteName = $formFilters.find('.valueCountyCompleteName').val();
		if(filterCountyCompleteName != null && filterCountyCompleteName !== '')
			filters.push({ name: 'fq', value: 'countyCompleteName:' + filterCountyCompleteName });
	}
	return filters;
}

function searchReportCardVals(filters, success, error) {

	filters.push({ name: 'sort', value: 'reportCardStartYear desc' });
	filters.push({ name: 'sort', value: 'stateName asc' });
	filters.push({ name: 'sort', value: 'countyName asc' });
	$.ajax({
		url: '/api/reportcard?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestReportCardObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['countyCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportCardVals($formFilters, success, error);
}

function suggestReportCardCountyKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-road ');
			var $span = $('<span>').attr('class', '').text(o['countyCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['reportCardKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_countyKey_' + pk + '_reportCardKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueCountyKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_countyKey_" + pk + "_reportCardKeys_" + o['pk'] + "'); patchReportCardVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'CountyKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#ReportCardForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteCountyVals(filters, success, error);
}

// AdminSearch //

async function adminsearchReportCard($formFilters, success, error) {
	var filters = adminsearchReportCardFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchReportCardVals(filters, success, error);
}

function adminsearchReportCardFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterReportCardStartYear = $formFilters.find('.valueReportCardStartYear').val();
		if(filterReportCardStartYear != null && filterReportCardStartYear !== '')
			filters.push({ name: 'fq', value: 'reportCardStartYear:' + filterReportCardStartYear });

		var filterReportCardEndYear = $formFilters.find('.valueReportCardEndYear').val();
		if(filterReportCardEndYear != null && filterReportCardEndYear !== '')
			filters.push({ name: 'fq', value: 'reportCardEndYear:' + filterReportCardEndYear });

		var filterCountyKey = $formFilters.find('.valueCountyKey').val();
		if(filterCountyKey != null && filterCountyKey !== '')
			filters.push({ name: 'fq', value: 'countyKey:' + filterCountyKey });

		var filterPupilsTotal = $formFilters.find('.valuePupilsTotal').val();
		if(filterPupilsTotal != null && filterPupilsTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsTotal:' + filterPupilsTotal });

		var filterPupilsIndianFemale = $formFilters.find('.valuePupilsIndianFemale').val();
		if(filterPupilsIndianFemale != null && filterPupilsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianFemale:' + filterPupilsIndianFemale });

		var filterPupilsIndianMale = $formFilters.find('.valuePupilsIndianMale').val();
		if(filterPupilsIndianMale != null && filterPupilsIndianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianMale:' + filterPupilsIndianMale });

		var filterPupilsIndianTotal = $formFilters.find('.valuePupilsIndianTotal').val();
		if(filterPupilsIndianTotal != null && filterPupilsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianTotal:' + filterPupilsIndianTotal });

		var filterPupilsIndianPercent = $formFilters.find('.valuePupilsIndianPercent').val();
		if(filterPupilsIndianPercent != null && filterPupilsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianPercent:' + filterPupilsIndianPercent });

		var filterPupilsAsianFemale = $formFilters.find('.valuePupilsAsianFemale').val();
		if(filterPupilsAsianFemale != null && filterPupilsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianFemale:' + filterPupilsAsianFemale });

		var filterPupilsAsianMale = $formFilters.find('.valuePupilsAsianMale').val();
		if(filterPupilsAsianMale != null && filterPupilsAsianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianMale:' + filterPupilsAsianMale });

		var filterPupilsAsianTotal = $formFilters.find('.valuePupilsAsianTotal').val();
		if(filterPupilsAsianTotal != null && filterPupilsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianTotal:' + filterPupilsAsianTotal });

		var filterPupilsAsianPercent = $formFilters.find('.valuePupilsAsianPercent').val();
		if(filterPupilsAsianPercent != null && filterPupilsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianPercent:' + filterPupilsAsianPercent });

		var filterPupilsHispanicFemale = $formFilters.find('.valuePupilsHispanicFemale').val();
		if(filterPupilsHispanicFemale != null && filterPupilsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicFemale:' + filterPupilsHispanicFemale });

		var filterPupilsHispanicMale = $formFilters.find('.valuePupilsHispanicMale').val();
		if(filterPupilsHispanicMale != null && filterPupilsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicMale:' + filterPupilsHispanicMale });

		var filterPupilsHispanicTotal = $formFilters.find('.valuePupilsHispanicTotal').val();
		if(filterPupilsHispanicTotal != null && filterPupilsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicTotal:' + filterPupilsHispanicTotal });

		var filterPupilsHispanicPercent = $formFilters.find('.valuePupilsHispanicPercent').val();
		if(filterPupilsHispanicPercent != null && filterPupilsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicPercent:' + filterPupilsHispanicPercent });

		var filterPupilsBlackFemale = $formFilters.find('.valuePupilsBlackFemale').val();
		if(filterPupilsBlackFemale != null && filterPupilsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackFemale:' + filterPupilsBlackFemale });

		var filterPupilsBlackMale = $formFilters.find('.valuePupilsBlackMale').val();
		if(filterPupilsBlackMale != null && filterPupilsBlackMale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackMale:' + filterPupilsBlackMale });

		var filterPupilsBlackTotal = $formFilters.find('.valuePupilsBlackTotal').val();
		if(filterPupilsBlackTotal != null && filterPupilsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackTotal:' + filterPupilsBlackTotal });

		var filterPupilsBlackPercent = $formFilters.find('.valuePupilsBlackPercent').val();
		if(filterPupilsBlackPercent != null && filterPupilsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackPercent:' + filterPupilsBlackPercent });

		var filterPupilsWhiteFemale = $formFilters.find('.valuePupilsWhiteFemale').val();
		if(filterPupilsWhiteFemale != null && filterPupilsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteFemale:' + filterPupilsWhiteFemale });

		var filterPupilsWhiteMale = $formFilters.find('.valuePupilsWhiteMale').val();
		if(filterPupilsWhiteMale != null && filterPupilsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteMale:' + filterPupilsWhiteMale });

		var filterPupilsWhiteTotal = $formFilters.find('.valuePupilsWhiteTotal').val();
		if(filterPupilsWhiteTotal != null && filterPupilsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteTotal:' + filterPupilsWhiteTotal });

		var filterPupilsWhitePercent = $formFilters.find('.valuePupilsWhitePercent').val();
		if(filterPupilsWhitePercent != null && filterPupilsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'pupilsWhitePercent:' + filterPupilsWhitePercent });

		var filterPupilsPacificIslanderFemale = $formFilters.find('.valuePupilsPacificIslanderFemale').val();
		if(filterPupilsPacificIslanderFemale != null && filterPupilsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderFemale:' + filterPupilsPacificIslanderFemale });

		var filterPupilsPacificIslanderMale = $formFilters.find('.valuePupilsPacificIslanderMale').val();
		if(filterPupilsPacificIslanderMale != null && filterPupilsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderMale:' + filterPupilsPacificIslanderMale });

		var filterPupilsPacificIslanderTotal = $formFilters.find('.valuePupilsPacificIslanderTotal').val();
		if(filterPupilsPacificIslanderTotal != null && filterPupilsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderTotal:' + filterPupilsPacificIslanderTotal });

		var filterPupilsPacificIslanderPercent = $formFilters.find('.valuePupilsPacificIslanderPercent').val();
		if(filterPupilsPacificIslanderPercent != null && filterPupilsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderPercent:' + filterPupilsPacificIslanderPercent });

		var filterPupilsMultiRacialFemale = $formFilters.find('.valuePupilsMultiRacialFemale').val();
		if(filterPupilsMultiRacialFemale != null && filterPupilsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialFemale:' + filterPupilsMultiRacialFemale });

		var filterPupilsMultiRacialMale = $formFilters.find('.valuePupilsMultiRacialMale').val();
		if(filterPupilsMultiRacialMale != null && filterPupilsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialMale:' + filterPupilsMultiRacialMale });

		var filterPupilsMultiRacialTotal = $formFilters.find('.valuePupilsMultiRacialTotal').val();
		if(filterPupilsMultiRacialTotal != null && filterPupilsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialTotal:' + filterPupilsMultiRacialTotal });

		var filterPupilsMultiRacialPercent = $formFilters.find('.valuePupilsMultiRacialPercent').val();
		if(filterPupilsMultiRacialPercent != null && filterPupilsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialPercent:' + filterPupilsMultiRacialPercent });

		var filterDelinquentComplaintsTotal = $formFilters.find('.valueDelinquentComplaintsTotal').val();
		if(filterDelinquentComplaintsTotal != null && filterDelinquentComplaintsTotal !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsTotal:' + filterDelinquentComplaintsTotal });

		var filterDelinquentComplaintsAtSchool = $formFilters.find('.valueDelinquentComplaintsAtSchool').val();
		if(filterDelinquentComplaintsAtSchool != null && filterDelinquentComplaintsAtSchool !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchool:' + filterDelinquentComplaintsAtSchool });

		var filterDelinquentComplaintsAtSchoolPercent = $formFilters.find('.valueDelinquentComplaintsAtSchoolPercent').val();
		if(filterDelinquentComplaintsAtSchoolPercent != null && filterDelinquentComplaintsAtSchoolPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchoolPercent:' + filterDelinquentComplaintsAtSchoolPercent });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterReportCardKey = $formFilters.find('.valueReportCardKey').val();
		if(filterReportCardKey != null && filterReportCardKey !== '')
			filters.push({ name: 'fq', value: 'reportCardKey:' + filterReportCardKey });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterCountyName = $formFilters.find('.valueCountyName').val();
		if(filterCountyName != null && filterCountyName !== '')
			filters.push({ name: 'fq', value: 'countyName:' + filterCountyName });

		var filterCountyCompleteName = $formFilters.find('.valueCountyCompleteName').val();
		if(filterCountyCompleteName != null && filterCountyCompleteName !== '')
			filters.push({ name: 'fq', value: 'countyCompleteName:' + filterCountyCompleteName });
	}
	return filters;
}

function adminsearchReportCardVals(filters, success, error) {

	filters.push({ name: 'sort', value: 'reportCardStartYear desc' });
	filters.push({ name: 'sort', value: 'stateName asc' });
	filters.push({ name: 'sort', value: 'countyName asc' });
	$.ajax({
		url: '/api/admin/reportcard?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestReportCardObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-newspaper ');
			var $span = $('<span>').attr('class', '').text(o['countyCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportCardVals($formFilters, success, error);
}

function suggestReportCardCountyKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-road ');
			var $span = $('<span>').attr('class', '').text(o['countyCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['reportCardKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_countyKey_' + pk + '_reportCardKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueCountyKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_countyKey_" + pk + "_reportCardKeys_" + o['pk'] + "'); patchReportCardVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'CountyKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#ReportCardForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteCountyVals(filters, success, error);
}

async function websocketReportCard(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketReportCard', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#ReportCardForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-newspaper w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify report cards');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pale-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
			$('.top-box').append($box);
			if(pk && pkPage && pk == pkPage) {;
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketSiteCounty', function (error, message) {
			$('#Page_countyKey').trigger('oninput');
			$('#Page_countyKey_add').text('add a county');
			$('#Page_countyKey_add').removeClass('w3-disabled');
			$('#Page_countyKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteCounty', function (error, message) {
			$('#Page_countyKey').trigger('oninput');
			$('#Page_countyKey_add').text('add a county');
			$('#Page_countyKey_add').removeClass('w3-disabled');
			$('#Page_countyKey_add').attr('disabled', false);
		});
	}
}
async function websocketReportCardInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchReportCardVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputReportCard' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputReportCard' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputReportCard' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputReportCard' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputReportCard' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputReportCard' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Deleted'));
			}
			var val = o['reportCardStartYear'];
			if(vars.includes('reportCardStartYear')) {
				$('.inputReportCard' + pk + 'ReportCardStartYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ReportCardStartYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ReportCardStartYear'));
			}
			var val = o['reportCardEndYear'];
			if(vars.includes('reportCardEndYear')) {
				$('.inputReportCard' + pk + 'ReportCardEndYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ReportCardEndYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ReportCardEndYear'));
			}
			var val = o['countyKey'];
			if(vars.includes('countyKey')) {
				$('.inputReportCard' + pk + 'CountyKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'CountyKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'CountyKey'));
			}
			var val = o['pupilsTotal'];
			if(vars.includes('pupilsTotal')) {
				$('.inputReportCard' + pk + 'PupilsTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsTotal'));
			}
			var val = o['pupilsIndianFemale'];
			if(vars.includes('pupilsIndianFemale')) {
				$('.inputReportCard' + pk + 'PupilsIndianFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndianFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndianFemale'));
			}
			var val = o['pupilsIndianMale'];
			if(vars.includes('pupilsIndianMale')) {
				$('.inputReportCard' + pk + 'PupilsIndianMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndianMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndianMale'));
			}
			var val = o['pupilsIndianTotal'];
			if(vars.includes('pupilsIndianTotal')) {
				$('.inputReportCard' + pk + 'PupilsIndianTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndianTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndianTotal'));
			}
			var val = o['pupilsIndianPercent'];
			if(vars.includes('pupilsIndianPercent')) {
				$('.inputReportCard' + pk + 'PupilsIndianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndianPercent'));
			}
			var val = o['pupilsAsianFemale'];
			if(vars.includes('pupilsAsianFemale')) {
				$('.inputReportCard' + pk + 'PupilsAsianFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsAsianFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsAsianFemale'));
			}
			var val = o['pupilsAsianMale'];
			if(vars.includes('pupilsAsianMale')) {
				$('.inputReportCard' + pk + 'PupilsAsianMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsAsianMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsAsianMale'));
			}
			var val = o['pupilsAsianTotal'];
			if(vars.includes('pupilsAsianTotal')) {
				$('.inputReportCard' + pk + 'PupilsAsianTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsAsianTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsAsianTotal'));
			}
			var val = o['pupilsAsianPercent'];
			if(vars.includes('pupilsAsianPercent')) {
				$('.inputReportCard' + pk + 'PupilsAsianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsAsianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsAsianPercent'));
			}
			var val = o['pupilsHispanicFemale'];
			if(vars.includes('pupilsHispanicFemale')) {
				$('.inputReportCard' + pk + 'PupilsHispanicFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsHispanicFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsHispanicFemale'));
			}
			var val = o['pupilsHispanicMale'];
			if(vars.includes('pupilsHispanicMale')) {
				$('.inputReportCard' + pk + 'PupilsHispanicMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsHispanicMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsHispanicMale'));
			}
			var val = o['pupilsHispanicTotal'];
			if(vars.includes('pupilsHispanicTotal')) {
				$('.inputReportCard' + pk + 'PupilsHispanicTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsHispanicTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsHispanicTotal'));
			}
			var val = o['pupilsHispanicPercent'];
			if(vars.includes('pupilsHispanicPercent')) {
				$('.inputReportCard' + pk + 'PupilsHispanicPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsHispanicPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsHispanicPercent'));
			}
			var val = o['pupilsBlackFemale'];
			if(vars.includes('pupilsBlackFemale')) {
				$('.inputReportCard' + pk + 'PupilsBlackFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsBlackFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsBlackFemale'));
			}
			var val = o['pupilsBlackMale'];
			if(vars.includes('pupilsBlackMale')) {
				$('.inputReportCard' + pk + 'PupilsBlackMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsBlackMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsBlackMale'));
			}
			var val = o['pupilsBlackTotal'];
			if(vars.includes('pupilsBlackTotal')) {
				$('.inputReportCard' + pk + 'PupilsBlackTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsBlackTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsBlackTotal'));
			}
			var val = o['pupilsBlackPercent'];
			if(vars.includes('pupilsBlackPercent')) {
				$('.inputReportCard' + pk + 'PupilsBlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsBlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsBlackPercent'));
			}
			var val = o['pupilsWhiteFemale'];
			if(vars.includes('pupilsWhiteFemale')) {
				$('.inputReportCard' + pk + 'PupilsWhiteFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsWhiteFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsWhiteFemale'));
			}
			var val = o['pupilsWhiteMale'];
			if(vars.includes('pupilsWhiteMale')) {
				$('.inputReportCard' + pk + 'PupilsWhiteMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsWhiteMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsWhiteMale'));
			}
			var val = o['pupilsWhiteTotal'];
			if(vars.includes('pupilsWhiteTotal')) {
				$('.inputReportCard' + pk + 'PupilsWhiteTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsWhiteTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsWhiteTotal'));
			}
			var val = o['pupilsWhitePercent'];
			if(vars.includes('pupilsWhitePercent')) {
				$('.inputReportCard' + pk + 'PupilsWhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsWhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsWhitePercent'));
			}
			var val = o['pupilsPacificIslanderFemale'];
			if(vars.includes('pupilsPacificIslanderFemale')) {
				$('.inputReportCard' + pk + 'PupilsPacificIslanderFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsPacificIslanderFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsPacificIslanderFemale'));
			}
			var val = o['pupilsPacificIslanderMale'];
			if(vars.includes('pupilsPacificIslanderMale')) {
				$('.inputReportCard' + pk + 'PupilsPacificIslanderMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsPacificIslanderMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsPacificIslanderMale'));
			}
			var val = o['pupilsPacificIslanderTotal'];
			if(vars.includes('pupilsPacificIslanderTotal')) {
				$('.inputReportCard' + pk + 'PupilsPacificIslanderTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsPacificIslanderTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsPacificIslanderTotal'));
			}
			var val = o['pupilsPacificIslanderPercent'];
			if(vars.includes('pupilsPacificIslanderPercent')) {
				$('.inputReportCard' + pk + 'PupilsPacificIslanderPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsPacificIslanderPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsPacificIslanderPercent'));
			}
			var val = o['pupilsMultiRacialFemale'];
			if(vars.includes('pupilsMultiRacialFemale')) {
				$('.inputReportCard' + pk + 'PupilsMultiRacialFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsMultiRacialFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsMultiRacialFemale'));
			}
			var val = o['pupilsMultiRacialMale'];
			if(vars.includes('pupilsMultiRacialMale')) {
				$('.inputReportCard' + pk + 'PupilsMultiRacialMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsMultiRacialMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsMultiRacialMale'));
			}
			var val = o['pupilsMultiRacialTotal'];
			if(vars.includes('pupilsMultiRacialTotal')) {
				$('.inputReportCard' + pk + 'PupilsMultiRacialTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsMultiRacialTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsMultiRacialTotal'));
			}
			var val = o['pupilsMultiRacialPercent'];
			if(vars.includes('pupilsMultiRacialPercent')) {
				$('.inputReportCard' + pk + 'PupilsMultiRacialPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsMultiRacialPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsMultiRacialPercent'));
			}
			var val = o['delinquentComplaintsTotal'];
			if(vars.includes('delinquentComplaintsTotal')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsTotal'));
			}
			var val = o['delinquentComplaintsAtSchool'];
			if(vars.includes('delinquentComplaintsAtSchool')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsAtSchool').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsAtSchool').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsAtSchool'));
			}
			var val = o['delinquentComplaintsAtSchoolPercent'];
			if(vars.includes('delinquentComplaintsAtSchoolPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsAtSchoolPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsAtSchoolPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsAtSchoolPercent'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputReportCard' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputReportCard' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputReportCard' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputReportCard' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputReportCard' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputReportCard' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputReportCard' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputReportCard' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputReportCard' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputReportCard' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputReportCard' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputReportCard' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputReportCard' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputReportCard' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PageUrlPk'));
			}
			var val = o['reportCardKey'];
			if(vars.includes('reportCardKey')) {
				$('.inputReportCard' + pk + 'ReportCardKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ReportCardKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ReportCardKey'));
			}
			var val = o['stateName'];
			if(vars.includes('stateName')) {
				$('.inputReportCard' + pk + 'StateName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'StateName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'StateName'));
			}
			var val = o['stateAbbreviation'];
			if(vars.includes('stateAbbreviation')) {
				$('.inputReportCard' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'StateAbbreviation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'StateAbbreviation'));
			}
			var val = o['countyName'];
			if(vars.includes('countyName')) {
				$('.inputReportCard' + pk + 'CountyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'CountyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'CountyName'));
			}
			var val = o['countyCompleteName'];
			if(vars.includes('countyCompleteName')) {
				$('.inputReportCard' + pk + 'CountyCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'CountyCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'CountyCompleteName'));
			}
		});
	}
}
