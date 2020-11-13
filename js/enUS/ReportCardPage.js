
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

	var valueAgencyKey = $formValues.find('input.valueAgencyKey:checked').val();
	if(valueAgencyKey != null && valueAgencyKey !== '')
		vals['agencyKey'] = valueAgencyKey;

	var valuePupilsIndigenousMale = $formValues.find('.valuePupilsIndigenousMale').val();
	if(valuePupilsIndigenousMale != null && valuePupilsIndigenousMale !== '')
		vals['pupilsIndigenousMale'] = valuePupilsIndigenousMale;

	var valuePupilsIndigenousFemale = $formValues.find('.valuePupilsIndigenousFemale').val();
	if(valuePupilsIndigenousFemale != null && valuePupilsIndigenousFemale !== '')
		vals['pupilsIndigenousFemale'] = valuePupilsIndigenousFemale;

	var valuePupilsIndigenousTotal = $formValues.find('.valuePupilsIndigenousTotal').val();
	if(valuePupilsIndigenousTotal != null && valuePupilsIndigenousTotal !== '')
		vals['pupilsIndigenousTotal'] = valuePupilsIndigenousTotal;

	var valuePupilsIndigenousPercent = $formValues.find('.valuePupilsIndigenousPercent').val();
	if(valuePupilsIndigenousPercent != null && valuePupilsIndigenousPercent !== '')
		vals['pupilsIndigenousPercent'] = valuePupilsIndigenousPercent;

	var valuePupilsAsianMale = $formValues.find('.valuePupilsAsianMale').val();
	if(valuePupilsAsianMale != null && valuePupilsAsianMale !== '')
		vals['pupilsAsianMale'] = valuePupilsAsianMale;

	var valuePupilsAsianFemale = $formValues.find('.valuePupilsAsianFemale').val();
	if(valuePupilsAsianFemale != null && valuePupilsAsianFemale !== '')
		vals['pupilsAsianFemale'] = valuePupilsAsianFemale;

	var valuePupilsAsianTotal = $formValues.find('.valuePupilsAsianTotal').val();
	if(valuePupilsAsianTotal != null && valuePupilsAsianTotal !== '')
		vals['pupilsAsianTotal'] = valuePupilsAsianTotal;

	var valuePupilsAsianPercent = $formValues.find('.valuePupilsAsianPercent').val();
	if(valuePupilsAsianPercent != null && valuePupilsAsianPercent !== '')
		vals['pupilsAsianPercent'] = valuePupilsAsianPercent;

	var valuePupilsLatinxMale = $formValues.find('.valuePupilsLatinxMale').val();
	if(valuePupilsLatinxMale != null && valuePupilsLatinxMale !== '')
		vals['pupilsLatinxMale'] = valuePupilsLatinxMale;

	var valuePupilsLatinxFemale = $formValues.find('.valuePupilsLatinxFemale').val();
	if(valuePupilsLatinxFemale != null && valuePupilsLatinxFemale !== '')
		vals['pupilsLatinxFemale'] = valuePupilsLatinxFemale;

	var valuePupilsLatinxTotal = $formValues.find('.valuePupilsLatinxTotal').val();
	if(valuePupilsLatinxTotal != null && valuePupilsLatinxTotal !== '')
		vals['pupilsLatinxTotal'] = valuePupilsLatinxTotal;

	var valuePupilsLatinxPercent = $formValues.find('.valuePupilsLatinxPercent').val();
	if(valuePupilsLatinxPercent != null && valuePupilsLatinxPercent !== '')
		vals['pupilsLatinxPercent'] = valuePupilsLatinxPercent;

	var valuePupilsBlackMale = $formValues.find('.valuePupilsBlackMale').val();
	if(valuePupilsBlackMale != null && valuePupilsBlackMale !== '')
		vals['pupilsBlackMale'] = valuePupilsBlackMale;

	var valuePupilsBlackFemale = $formValues.find('.valuePupilsBlackFemale').val();
	if(valuePupilsBlackFemale != null && valuePupilsBlackFemale !== '')
		vals['pupilsBlackFemale'] = valuePupilsBlackFemale;

	var valuePupilsBlackTotal = $formValues.find('.valuePupilsBlackTotal').val();
	if(valuePupilsBlackTotal != null && valuePupilsBlackTotal !== '')
		vals['pupilsBlackTotal'] = valuePupilsBlackTotal;

	var valuePupilsBlackPercent = $formValues.find('.valuePupilsBlackPercent').val();
	if(valuePupilsBlackPercent != null && valuePupilsBlackPercent !== '')
		vals['pupilsBlackPercent'] = valuePupilsBlackPercent;

	var valuePupilsWhiteMale = $formValues.find('.valuePupilsWhiteMale').val();
	if(valuePupilsWhiteMale != null && valuePupilsWhiteMale !== '')
		vals['pupilsWhiteMale'] = valuePupilsWhiteMale;

	var valuePupilsWhiteFemale = $formValues.find('.valuePupilsWhiteFemale').val();
	if(valuePupilsWhiteFemale != null && valuePupilsWhiteFemale !== '')
		vals['pupilsWhiteFemale'] = valuePupilsWhiteFemale;

	var valuePupilsWhiteTotal = $formValues.find('.valuePupilsWhiteTotal').val();
	if(valuePupilsWhiteTotal != null && valuePupilsWhiteTotal !== '')
		vals['pupilsWhiteTotal'] = valuePupilsWhiteTotal;

	var valuePupilsWhitePercent = $formValues.find('.valuePupilsWhitePercent').val();
	if(valuePupilsWhitePercent != null && valuePupilsWhitePercent !== '')
		vals['pupilsWhitePercent'] = valuePupilsWhitePercent;

	var valuePupilsPacificIslanderMale = $formValues.find('.valuePupilsPacificIslanderMale').val();
	if(valuePupilsPacificIslanderMale != null && valuePupilsPacificIslanderMale !== '')
		vals['pupilsPacificIslanderMale'] = valuePupilsPacificIslanderMale;

	var valuePupilsPacificIslanderFemale = $formValues.find('.valuePupilsPacificIslanderFemale').val();
	if(valuePupilsPacificIslanderFemale != null && valuePupilsPacificIslanderFemale !== '')
		vals['pupilsPacificIslanderFemale'] = valuePupilsPacificIslanderFemale;

	var valuePupilsPacificIslanderTotal = $formValues.find('.valuePupilsPacificIslanderTotal').val();
	if(valuePupilsPacificIslanderTotal != null && valuePupilsPacificIslanderTotal !== '')
		vals['pupilsPacificIslanderTotal'] = valuePupilsPacificIslanderTotal;

	var valuePupilsPacificIslanderPercent = $formValues.find('.valuePupilsPacificIslanderPercent').val();
	if(valuePupilsPacificIslanderPercent != null && valuePupilsPacificIslanderPercent !== '')
		vals['pupilsPacificIslanderPercent'] = valuePupilsPacificIslanderPercent;

	var valuePupilsMultiRacialMale = $formValues.find('.valuePupilsMultiRacialMale').val();
	if(valuePupilsMultiRacialMale != null && valuePupilsMultiRacialMale !== '')
		vals['pupilsMultiRacialMale'] = valuePupilsMultiRacialMale;

	var valuePupilsMultiRacialFemale = $formValues.find('.valuePupilsMultiRacialFemale').val();
	if(valuePupilsMultiRacialFemale != null && valuePupilsMultiRacialFemale !== '')
		vals['pupilsMultiRacialFemale'] = valuePupilsMultiRacialFemale;

	var valuePupilsMultiRacialTotal = $formValues.find('.valuePupilsMultiRacialTotal').val();
	if(valuePupilsMultiRacialTotal != null && valuePupilsMultiRacialTotal !== '')
		vals['pupilsMultiRacialTotal'] = valuePupilsMultiRacialTotal;

	var valuePupilsMultiRacialPercent = $formValues.find('.valuePupilsMultiRacialPercent').val();
	if(valuePupilsMultiRacialPercent != null && valuePupilsMultiRacialPercent !== '')
		vals['pupilsMultiRacialPercent'] = valuePupilsMultiRacialPercent;

	var valuePupilsTotal = $formValues.find('.valuePupilsTotal').val();
	if(valuePupilsTotal != null && valuePupilsTotal !== '')
		vals['pupilsTotal'] = valuePupilsTotal;

	var valueTeachersMale = $formValues.find('.valueTeachersMale').val();
	if(valueTeachersMale != null && valueTeachersMale !== '')
		vals['teachersMale'] = valueTeachersMale;

	var valueTeachersFemale = $formValues.find('.valueTeachersFemale').val();
	if(valueTeachersFemale != null && valueTeachersFemale !== '')
		vals['teachersFemale'] = valueTeachersFemale;

	var valueTeachersTotal = $formValues.find('.valueTeachersTotal').val();
	if(valueTeachersTotal != null && valueTeachersTotal !== '')
		vals['teachersTotal'] = valueTeachersTotal;

	var valueTeachersWhiteTotal = $formValues.find('.valueTeachersWhiteTotal').val();
	if(valueTeachersWhiteTotal != null && valueTeachersWhiteTotal !== '')
		vals['teachersWhiteTotal'] = valueTeachersWhiteTotal;

	var valueTeachersWhitePercent = $formValues.find('.valueTeachersWhitePercent').val();
	if(valueTeachersWhitePercent != null && valueTeachersWhitePercent !== '')
		vals['teachersWhitePercent'] = valueTeachersWhitePercent;

	var valueTeachersBlackTotal = $formValues.find('.valueTeachersBlackTotal').val();
	if(valueTeachersBlackTotal != null && valueTeachersBlackTotal !== '')
		vals['teachersBlackTotal'] = valueTeachersBlackTotal;

	var valueTeachersBlackPercent = $formValues.find('.valueTeachersBlackPercent').val();
	if(valueTeachersBlackPercent != null && valueTeachersBlackPercent !== '')
		vals['teachersBlackPercent'] = valueTeachersBlackPercent;

	var valueTeachersOtherTotal = $formValues.find('.valueTeachersOtherTotal').val();
	if(valueTeachersOtherTotal != null && valueTeachersOtherTotal !== '')
		vals['teachersOtherTotal'] = valueTeachersOtherTotal;

	var valueTeachersOtherPercent = $formValues.find('.valueTeachersOtherPercent').val();
	if(valueTeachersOtherPercent != null && valueTeachersOtherPercent !== '')
		vals['teachersOtherPercent'] = valueTeachersOtherPercent;

	var valueDelinquentComplaintsTotal = $formValues.find('.valueDelinquentComplaintsTotal').val();
	if(valueDelinquentComplaintsTotal != null && valueDelinquentComplaintsTotal !== '')
		vals['delinquentComplaintsTotal'] = valueDelinquentComplaintsTotal;

	var valueDelinquentComplaintsAtSchool = $formValues.find('.valueDelinquentComplaintsAtSchool').val();
	if(valueDelinquentComplaintsAtSchool != null && valueDelinquentComplaintsAtSchool !== '')
		vals['delinquentComplaintsAtSchool'] = valueDelinquentComplaintsAtSchool;

	var valueDelinquentComplaintsAtSchoolPercent = $formValues.find('.valueDelinquentComplaintsAtSchoolPercent').val();
	if(valueDelinquentComplaintsAtSchoolPercent != null && valueDelinquentComplaintsAtSchoolPercent !== '')
		vals['delinquentComplaintsAtSchoolPercent'] = valueDelinquentComplaintsAtSchoolPercent;

	var valueDelinquentComplaintsAsian = $formValues.find('.valueDelinquentComplaintsAsian').val();
	if(valueDelinquentComplaintsAsian != null && valueDelinquentComplaintsAsian !== '')
		vals['delinquentComplaintsAsian'] = valueDelinquentComplaintsAsian;

	var valueDelinquentComplaintsAsianPercent = $formValues.find('.valueDelinquentComplaintsAsianPercent').val();
	if(valueDelinquentComplaintsAsianPercent != null && valueDelinquentComplaintsAsianPercent !== '')
		vals['delinquentComplaintsAsianPercent'] = valueDelinquentComplaintsAsianPercent;

	var valueDelinquentComplaintsBlack = $formValues.find('.valueDelinquentComplaintsBlack').val();
	if(valueDelinquentComplaintsBlack != null && valueDelinquentComplaintsBlack !== '')
		vals['delinquentComplaintsBlack'] = valueDelinquentComplaintsBlack;

	var valueDelinquentComplaintsBlackPercent = $formValues.find('.valueDelinquentComplaintsBlackPercent').val();
	if(valueDelinquentComplaintsBlackPercent != null && valueDelinquentComplaintsBlackPercent !== '')
		vals['delinquentComplaintsBlackPercent'] = valueDelinquentComplaintsBlackPercent;

	var valueDelinquentComplaintsLatinx = $formValues.find('.valueDelinquentComplaintsLatinx').val();
	if(valueDelinquentComplaintsLatinx != null && valueDelinquentComplaintsLatinx !== '')
		vals['delinquentComplaintsLatinx'] = valueDelinquentComplaintsLatinx;

	var valueDelinquentComplaintsLatinxPercent = $formValues.find('.valueDelinquentComplaintsLatinxPercent').val();
	if(valueDelinquentComplaintsLatinxPercent != null && valueDelinquentComplaintsLatinxPercent !== '')
		vals['delinquentComplaintsLatinxPercent'] = valueDelinquentComplaintsLatinxPercent;

	var valueDelinquentComplaintsMultiRacial = $formValues.find('.valueDelinquentComplaintsMultiRacial').val();
	if(valueDelinquentComplaintsMultiRacial != null && valueDelinquentComplaintsMultiRacial !== '')
		vals['delinquentComplaintsMultiRacial'] = valueDelinquentComplaintsMultiRacial;

	var valueDelinquentComplaintsMultiRacialPercent = $formValues.find('.valueDelinquentComplaintsMultiRacialPercent').val();
	if(valueDelinquentComplaintsMultiRacialPercent != null && valueDelinquentComplaintsMultiRacialPercent !== '')
		vals['delinquentComplaintsMultiRacialPercent'] = valueDelinquentComplaintsMultiRacialPercent;

	var valueDelinquentComplaintsIndigenous = $formValues.find('.valueDelinquentComplaintsIndigenous').val();
	if(valueDelinquentComplaintsIndigenous != null && valueDelinquentComplaintsIndigenous !== '')
		vals['delinquentComplaintsIndigenous'] = valueDelinquentComplaintsIndigenous;

	var valueDelinquentComplaintsIndigenousPercent = $formValues.find('.valueDelinquentComplaintsIndigenousPercent').val();
	if(valueDelinquentComplaintsIndigenousPercent != null && valueDelinquentComplaintsIndigenousPercent !== '')
		vals['delinquentComplaintsIndigenousPercent'] = valueDelinquentComplaintsIndigenousPercent;

	var valueDelinquentComplaintsWhite = $formValues.find('.valueDelinquentComplaintsWhite').val();
	if(valueDelinquentComplaintsWhite != null && valueDelinquentComplaintsWhite !== '')
		vals['delinquentComplaintsWhite'] = valueDelinquentComplaintsWhite;

	var valueDelinquentComplaintsWhitePercent = $formValues.find('.valueDelinquentComplaintsWhitePercent').val();
	if(valueDelinquentComplaintsWhitePercent != null && valueDelinquentComplaintsWhitePercent !== '')
		vals['delinquentComplaintsWhitePercent'] = valueDelinquentComplaintsWhitePercent;

	var valueDelinquentComplaintsPacificIslander = $formValues.find('.valueDelinquentComplaintsPacificIslander').val();
	if(valueDelinquentComplaintsPacificIslander != null && valueDelinquentComplaintsPacificIslander !== '')
		vals['delinquentComplaintsPacificIslander'] = valueDelinquentComplaintsPacificIslander;

	var valueDelinquentComplaintsPacificIslanderPercent = $formValues.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
	if(valueDelinquentComplaintsPacificIslanderPercent != null && valueDelinquentComplaintsPacificIslanderPercent !== '')
		vals['delinquentComplaintsPacificIslanderPercent'] = valueDelinquentComplaintsPacificIslanderPercent;

	var valueShortTermSuspensionRate = $formValues.find('.valueShortTermSuspensionRate').val();
	if(valueShortTermSuspensionRate != null && valueShortTermSuspensionRate !== '')
		vals['shortTermSuspensionRate'] = valueShortTermSuspensionRate;

	var valueShortTermSuspensionsTotal = $formValues.find('.valueShortTermSuspensionsTotal').val();
	if(valueShortTermSuspensionsTotal != null && valueShortTermSuspensionsTotal !== '')
		vals['shortTermSuspensionsTotal'] = valueShortTermSuspensionsTotal;

	var valueLongTermSuspensionsTotal = $formValues.find('.valueLongTermSuspensionsTotal').val();
	if(valueLongTermSuspensionsTotal != null && valueLongTermSuspensionsTotal !== '')
		vals['longTermSuspensionsTotal'] = valueLongTermSuspensionsTotal;

	var valueExpulsionsTotal = $formValues.find('.valueExpulsionsTotal').val();
	if(valueExpulsionsTotal != null && valueExpulsionsTotal !== '')
		vals['expulsionsTotal'] = valueExpulsionsTotal;

	var valueShortTermSuspensionsAsianFemale = $formValues.find('.valueShortTermSuspensionsAsianFemale').val();
	if(valueShortTermSuspensionsAsianFemale != null && valueShortTermSuspensionsAsianFemale !== '')
		vals['shortTermSuspensionsAsianFemale'] = valueShortTermSuspensionsAsianFemale;

	var valueShortTermSuspensionsAsianMale = $formValues.find('.valueShortTermSuspensionsAsianMale').val();
	if(valueShortTermSuspensionsAsianMale != null && valueShortTermSuspensionsAsianMale !== '')
		vals['shortTermSuspensionsAsianMale'] = valueShortTermSuspensionsAsianMale;

	var valueShortTermSuspensionsAsianTotal = $formValues.find('.valueShortTermSuspensionsAsianTotal').val();
	if(valueShortTermSuspensionsAsianTotal != null && valueShortTermSuspensionsAsianTotal !== '')
		vals['shortTermSuspensionsAsianTotal'] = valueShortTermSuspensionsAsianTotal;

	var valueShortTermSuspensionsAsianPercent = $formValues.find('.valueShortTermSuspensionsAsianPercent').val();
	if(valueShortTermSuspensionsAsianPercent != null && valueShortTermSuspensionsAsianPercent !== '')
		vals['shortTermSuspensionsAsianPercent'] = valueShortTermSuspensionsAsianPercent;

	var valueShortTermSuspensionsAsianRate = $formValues.find('.valueShortTermSuspensionsAsianRate').val();
	if(valueShortTermSuspensionsAsianRate != null && valueShortTermSuspensionsAsianRate !== '')
		vals['shortTermSuspensionsAsianRate'] = valueShortTermSuspensionsAsianRate;

	var valueShortTermSuspensionsBlackFemale = $formValues.find('.valueShortTermSuspensionsBlackFemale').val();
	if(valueShortTermSuspensionsBlackFemale != null && valueShortTermSuspensionsBlackFemale !== '')
		vals['shortTermSuspensionsBlackFemale'] = valueShortTermSuspensionsBlackFemale;

	var valueShortTermSuspensionsBlackMale = $formValues.find('.valueShortTermSuspensionsBlackMale').val();
	if(valueShortTermSuspensionsBlackMale != null && valueShortTermSuspensionsBlackMale !== '')
		vals['shortTermSuspensionsBlackMale'] = valueShortTermSuspensionsBlackMale;

	var valueShortTermSuspensionsBlackTotal = $formValues.find('.valueShortTermSuspensionsBlackTotal').val();
	if(valueShortTermSuspensionsBlackTotal != null && valueShortTermSuspensionsBlackTotal !== '')
		vals['shortTermSuspensionsBlackTotal'] = valueShortTermSuspensionsBlackTotal;

	var valueShortTermSuspensionsBlackPercent = $formValues.find('.valueShortTermSuspensionsBlackPercent').val();
	if(valueShortTermSuspensionsBlackPercent != null && valueShortTermSuspensionsBlackPercent !== '')
		vals['shortTermSuspensionsBlackPercent'] = valueShortTermSuspensionsBlackPercent;

	var valueShortTermSuspensionsBlackRate = $formValues.find('.valueShortTermSuspensionsBlackRate').val();
	if(valueShortTermSuspensionsBlackRate != null && valueShortTermSuspensionsBlackRate !== '')
		vals['shortTermSuspensionsBlackRate'] = valueShortTermSuspensionsBlackRate;

	var valueShortTermSuspensionsLatinxFemale = $formValues.find('.valueShortTermSuspensionsLatinxFemale').val();
	if(valueShortTermSuspensionsLatinxFemale != null && valueShortTermSuspensionsLatinxFemale !== '')
		vals['shortTermSuspensionsLatinxFemale'] = valueShortTermSuspensionsLatinxFemale;

	var valueShortTermSuspensionsLatinxMale = $formValues.find('.valueShortTermSuspensionsLatinxMale').val();
	if(valueShortTermSuspensionsLatinxMale != null && valueShortTermSuspensionsLatinxMale !== '')
		vals['shortTermSuspensionsLatinxMale'] = valueShortTermSuspensionsLatinxMale;

	var valueShortTermSuspensionsLatinxTotal = $formValues.find('.valueShortTermSuspensionsLatinxTotal').val();
	if(valueShortTermSuspensionsLatinxTotal != null && valueShortTermSuspensionsLatinxTotal !== '')
		vals['shortTermSuspensionsLatinxTotal'] = valueShortTermSuspensionsLatinxTotal;

	var valueShortTermSuspensionsLatinxPercent = $formValues.find('.valueShortTermSuspensionsLatinxPercent').val();
	if(valueShortTermSuspensionsLatinxPercent != null && valueShortTermSuspensionsLatinxPercent !== '')
		vals['shortTermSuspensionsLatinxPercent'] = valueShortTermSuspensionsLatinxPercent;

	var valueShortTermSuspensionsLatinxRate = $formValues.find('.valueShortTermSuspensionsLatinxRate').val();
	if(valueShortTermSuspensionsLatinxRate != null && valueShortTermSuspensionsLatinxRate !== '')
		vals['shortTermSuspensionsLatinxRate'] = valueShortTermSuspensionsLatinxRate;

	var valueShortTermSuspensionsIndigenousFemale = $formValues.find('.valueShortTermSuspensionsIndigenousFemale').val();
	if(valueShortTermSuspensionsIndigenousFemale != null && valueShortTermSuspensionsIndigenousFemale !== '')
		vals['shortTermSuspensionsIndigenousFemale'] = valueShortTermSuspensionsIndigenousFemale;

	var valueShortTermSuspensionsIndigenousMale = $formValues.find('.valueShortTermSuspensionsIndigenousMale').val();
	if(valueShortTermSuspensionsIndigenousMale != null && valueShortTermSuspensionsIndigenousMale !== '')
		vals['shortTermSuspensionsIndigenousMale'] = valueShortTermSuspensionsIndigenousMale;

	var valueShortTermSuspensionsIndigenousTotal = $formValues.find('.valueShortTermSuspensionsIndigenousTotal').val();
	if(valueShortTermSuspensionsIndigenousTotal != null && valueShortTermSuspensionsIndigenousTotal !== '')
		vals['shortTermSuspensionsIndigenousTotal'] = valueShortTermSuspensionsIndigenousTotal;

	var valueShortTermSuspensionsIndigenousPercent = $formValues.find('.valueShortTermSuspensionsIndigenousPercent').val();
	if(valueShortTermSuspensionsIndigenousPercent != null && valueShortTermSuspensionsIndigenousPercent !== '')
		vals['shortTermSuspensionsIndigenousPercent'] = valueShortTermSuspensionsIndigenousPercent;

	var valueShortTermSuspensionsIndigenousRate = $formValues.find('.valueShortTermSuspensionsIndigenousRate').val();
	if(valueShortTermSuspensionsIndigenousRate != null && valueShortTermSuspensionsIndigenousRate !== '')
		vals['shortTermSuspensionsIndigenousRate'] = valueShortTermSuspensionsIndigenousRate;

	var valueShortTermSuspensionsMultiRacialFemale = $formValues.find('.valueShortTermSuspensionsMultiRacialFemale').val();
	if(valueShortTermSuspensionsMultiRacialFemale != null && valueShortTermSuspensionsMultiRacialFemale !== '')
		vals['shortTermSuspensionsMultiRacialFemale'] = valueShortTermSuspensionsMultiRacialFemale;

	var valueShortTermSuspensionsMultiRacialMale = $formValues.find('.valueShortTermSuspensionsMultiRacialMale').val();
	if(valueShortTermSuspensionsMultiRacialMale != null && valueShortTermSuspensionsMultiRacialMale !== '')
		vals['shortTermSuspensionsMultiRacialMale'] = valueShortTermSuspensionsMultiRacialMale;

	var valueShortTermSuspensionsMultiRacialTotal = $formValues.find('.valueShortTermSuspensionsMultiRacialTotal').val();
	if(valueShortTermSuspensionsMultiRacialTotal != null && valueShortTermSuspensionsMultiRacialTotal !== '')
		vals['shortTermSuspensionsMultiRacialTotal'] = valueShortTermSuspensionsMultiRacialTotal;

	var valueShortTermSuspensionsMultiRacialPercent = $formValues.find('.valueShortTermSuspensionsMultiRacialPercent').val();
	if(valueShortTermSuspensionsMultiRacialPercent != null && valueShortTermSuspensionsMultiRacialPercent !== '')
		vals['shortTermSuspensionsMultiRacialPercent'] = valueShortTermSuspensionsMultiRacialPercent;

	var valueShortTermSuspensionsMultiRacialRate = $formValues.find('.valueShortTermSuspensionsMultiRacialRate').val();
	if(valueShortTermSuspensionsMultiRacialRate != null && valueShortTermSuspensionsMultiRacialRate !== '')
		vals['shortTermSuspensionsMultiRacialRate'] = valueShortTermSuspensionsMultiRacialRate;

	var valueShortTermSuspensionsPacificIslanderFemale = $formValues.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
	if(valueShortTermSuspensionsPacificIslanderFemale != null && valueShortTermSuspensionsPacificIslanderFemale !== '')
		vals['shortTermSuspensionsPacificIslanderFemale'] = valueShortTermSuspensionsPacificIslanderFemale;

	var valueShortTermSuspensionsPacificIslanderMale = $formValues.find('.valueShortTermSuspensionsPacificIslanderMale').val();
	if(valueShortTermSuspensionsPacificIslanderMale != null && valueShortTermSuspensionsPacificIslanderMale !== '')
		vals['shortTermSuspensionsPacificIslanderMale'] = valueShortTermSuspensionsPacificIslanderMale;

	var valueShortTermSuspensionsPacificIslanderTotal = $formValues.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
	if(valueShortTermSuspensionsPacificIslanderTotal != null && valueShortTermSuspensionsPacificIslanderTotal !== '')
		vals['shortTermSuspensionsPacificIslanderTotal'] = valueShortTermSuspensionsPacificIslanderTotal;

	var valueShortTermSuspensionsPacificIslanderPercent = $formValues.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
	if(valueShortTermSuspensionsPacificIslanderPercent != null && valueShortTermSuspensionsPacificIslanderPercent !== '')
		vals['shortTermSuspensionsPacificIslanderPercent'] = valueShortTermSuspensionsPacificIslanderPercent;

	var valueShortTermSuspensionsPacificIslanderRate = $formValues.find('.valueShortTermSuspensionsPacificIslanderRate').val();
	if(valueShortTermSuspensionsPacificIslanderRate != null && valueShortTermSuspensionsPacificIslanderRate !== '')
		vals['shortTermSuspensionsPacificIslanderRate'] = valueShortTermSuspensionsPacificIslanderRate;

	var valueShortTermSuspensionsWhiteFemale = $formValues.find('.valueShortTermSuspensionsWhiteFemale').val();
	if(valueShortTermSuspensionsWhiteFemale != null && valueShortTermSuspensionsWhiteFemale !== '')
		vals['shortTermSuspensionsWhiteFemale'] = valueShortTermSuspensionsWhiteFemale;

	var valueShortTermSuspensionsWhiteMale = $formValues.find('.valueShortTermSuspensionsWhiteMale').val();
	if(valueShortTermSuspensionsWhiteMale != null && valueShortTermSuspensionsWhiteMale !== '')
		vals['shortTermSuspensionsWhiteMale'] = valueShortTermSuspensionsWhiteMale;

	var valueShortTermSuspensionsWhiteTotal = $formValues.find('.valueShortTermSuspensionsWhiteTotal').val();
	if(valueShortTermSuspensionsWhiteTotal != null && valueShortTermSuspensionsWhiteTotal !== '')
		vals['shortTermSuspensionsWhiteTotal'] = valueShortTermSuspensionsWhiteTotal;

	var valueShortTermSuspensionsWhitePercent = $formValues.find('.valueShortTermSuspensionsWhitePercent').val();
	if(valueShortTermSuspensionsWhitePercent != null && valueShortTermSuspensionsWhitePercent !== '')
		vals['shortTermSuspensionsWhitePercent'] = valueShortTermSuspensionsWhitePercent;

	var valueShortTermSuspensionsWhiteRate = $formValues.find('.valueShortTermSuspensionsWhiteRate').val();
	if(valueShortTermSuspensionsWhiteRate != null && valueShortTermSuspensionsWhiteRate !== '')
		vals['shortTermSuspensionsWhiteRate'] = valueShortTermSuspensionsWhiteRate;

	var valueShortTermSuspensionsAllRate = $formValues.find('.valueShortTermSuspensionsAllRate').val();
	if(valueShortTermSuspensionsAllRate != null && valueShortTermSuspensionsAllRate !== '')
		vals['shortTermSuspensionsAllRate'] = valueShortTermSuspensionsAllRate;

	var valueShortTermSuspensionsBlackVsWhite = $formValues.find('.valueShortTermSuspensionsBlackVsWhite').val();
	if(valueShortTermSuspensionsBlackVsWhite != null && valueShortTermSuspensionsBlackVsWhite !== '')
		vals['shortTermSuspensionsBlackVsWhite'] = valueShortTermSuspensionsBlackVsWhite;

	var valueExamsCollegeReadyGrades38OverallPercent = $formValues.find('.valueExamsCollegeReadyGrades38OverallPercent').val();
	if(valueExamsCollegeReadyGrades38OverallPercent != null && valueExamsCollegeReadyGrades38OverallPercent !== '')
		vals['examsCollegeReadyGrades38OverallPercent'] = valueExamsCollegeReadyGrades38OverallPercent;

	var valueExamsCollegeReadyGrades38IndigenousPercent = $formValues.find('.valueExamsCollegeReadyGrades38IndigenousPercent').val();
	if(valueExamsCollegeReadyGrades38IndigenousPercent != null && valueExamsCollegeReadyGrades38IndigenousPercent !== '')
		vals['examsCollegeReadyGrades38IndigenousPercent'] = valueExamsCollegeReadyGrades38IndigenousPercent;

	var valueExamsCollegeReadyGrades38AsianPercent = $formValues.find('.valueExamsCollegeReadyGrades38AsianPercent').val();
	if(valueExamsCollegeReadyGrades38AsianPercent != null && valueExamsCollegeReadyGrades38AsianPercent !== '')
		vals['examsCollegeReadyGrades38AsianPercent'] = valueExamsCollegeReadyGrades38AsianPercent;

	var valueExamsCollegeReadyGrades38BlackPercent = $formValues.find('.valueExamsCollegeReadyGrades38BlackPercent').val();
	if(valueExamsCollegeReadyGrades38BlackPercent != null && valueExamsCollegeReadyGrades38BlackPercent !== '')
		vals['examsCollegeReadyGrades38BlackPercent'] = valueExamsCollegeReadyGrades38BlackPercent;

	var valueExamsCollegeReadyGrades38LatinxPercent = $formValues.find('.valueExamsCollegeReadyGrades38LatinxPercent').val();
	if(valueExamsCollegeReadyGrades38LatinxPercent != null && valueExamsCollegeReadyGrades38LatinxPercent !== '')
		vals['examsCollegeReadyGrades38LatinxPercent'] = valueExamsCollegeReadyGrades38LatinxPercent;

	var valueExamsCollegeReadyGrades38MultiRacialPercent = $formValues.find('.valueExamsCollegeReadyGrades38MultiRacialPercent').val();
	if(valueExamsCollegeReadyGrades38MultiRacialPercent != null && valueExamsCollegeReadyGrades38MultiRacialPercent !== '')
		vals['examsCollegeReadyGrades38MultiRacialPercent'] = valueExamsCollegeReadyGrades38MultiRacialPercent;

	var valueExamsCollegeReadyGrades38PacificIslanderPercent = $formValues.find('.valueExamsCollegeReadyGrades38PacificIslanderPercent').val();
	if(valueExamsCollegeReadyGrades38PacificIslanderPercent != null && valueExamsCollegeReadyGrades38PacificIslanderPercent !== '')
		vals['examsCollegeReadyGrades38PacificIslanderPercent'] = valueExamsCollegeReadyGrades38PacificIslanderPercent;

	var valueExamsCollegeReadyGrades38WhitePercent = $formValues.find('.valueExamsCollegeReadyGrades38WhitePercent').val();
	if(valueExamsCollegeReadyGrades38WhitePercent != null && valueExamsCollegeReadyGrades38WhitePercent !== '')
		vals['examsCollegeReadyGrades38WhitePercent'] = valueExamsCollegeReadyGrades38WhitePercent;

	var valueExamsCollegeReadyGrades912OverallPercent = $formValues.find('.valueExamsCollegeReadyGrades912OverallPercent').val();
	if(valueExamsCollegeReadyGrades912OverallPercent != null && valueExamsCollegeReadyGrades912OverallPercent !== '')
		vals['examsCollegeReadyGrades912OverallPercent'] = valueExamsCollegeReadyGrades912OverallPercent;

	var valueExamsCollegeReadyGrades912IndigenousPercent = $formValues.find('.valueExamsCollegeReadyGrades912IndigenousPercent').val();
	if(valueExamsCollegeReadyGrades912IndigenousPercent != null && valueExamsCollegeReadyGrades912IndigenousPercent !== '')
		vals['examsCollegeReadyGrades912IndigenousPercent'] = valueExamsCollegeReadyGrades912IndigenousPercent;

	var valueExamsCollegeReadyGrades912AsianPercent = $formValues.find('.valueExamsCollegeReadyGrades912AsianPercent').val();
	if(valueExamsCollegeReadyGrades912AsianPercent != null && valueExamsCollegeReadyGrades912AsianPercent !== '')
		vals['examsCollegeReadyGrades912AsianPercent'] = valueExamsCollegeReadyGrades912AsianPercent;

	var valueExamsCollegeReadyGrades912BlackPercent = $formValues.find('.valueExamsCollegeReadyGrades912BlackPercent').val();
	if(valueExamsCollegeReadyGrades912BlackPercent != null && valueExamsCollegeReadyGrades912BlackPercent !== '')
		vals['examsCollegeReadyGrades912BlackPercent'] = valueExamsCollegeReadyGrades912BlackPercent;

	var valueExamsCollegeReadyGrades912LatinxPercent = $formValues.find('.valueExamsCollegeReadyGrades912LatinxPercent').val();
	if(valueExamsCollegeReadyGrades912LatinxPercent != null && valueExamsCollegeReadyGrades912LatinxPercent !== '')
		vals['examsCollegeReadyGrades912LatinxPercent'] = valueExamsCollegeReadyGrades912LatinxPercent;

	var valueExamsCollegeReadyGrades912MultiRacialPercent = $formValues.find('.valueExamsCollegeReadyGrades912MultiRacialPercent').val();
	if(valueExamsCollegeReadyGrades912MultiRacialPercent != null && valueExamsCollegeReadyGrades912MultiRacialPercent !== '')
		vals['examsCollegeReadyGrades912MultiRacialPercent'] = valueExamsCollegeReadyGrades912MultiRacialPercent;

	var valueExamsCollegeReadyGrades912PacificIslanderPercent = $formValues.find('.valueExamsCollegeReadyGrades912PacificIslanderPercent').val();
	if(valueExamsCollegeReadyGrades912PacificIslanderPercent != null && valueExamsCollegeReadyGrades912PacificIslanderPercent !== '')
		vals['examsCollegeReadyGrades912PacificIslanderPercent'] = valueExamsCollegeReadyGrades912PacificIslanderPercent;

	var valueExamsCollegeReadyGrades912WhitePercent = $formValues.find('.valueExamsCollegeReadyGrades912WhitePercent').val();
	if(valueExamsCollegeReadyGrades912WhitePercent != null && valueExamsCollegeReadyGrades912WhitePercent !== '')
		vals['examsCollegeReadyGrades912WhitePercent'] = valueExamsCollegeReadyGrades912WhitePercent;

	var valueGraduateWithin4YearsOverallPercent = $formValues.find('.valueGraduateWithin4YearsOverallPercent').val();
	if(valueGraduateWithin4YearsOverallPercent != null && valueGraduateWithin4YearsOverallPercent !== '')
		vals['graduateWithin4YearsOverallPercent'] = valueGraduateWithin4YearsOverallPercent;

	var valueGraduateWithin4YearsIndigenousPercent = $formValues.find('.valueGraduateWithin4YearsIndigenousPercent').val();
	if(valueGraduateWithin4YearsIndigenousPercent != null && valueGraduateWithin4YearsIndigenousPercent !== '')
		vals['graduateWithin4YearsIndigenousPercent'] = valueGraduateWithin4YearsIndigenousPercent;

	var valueGraduateWithin4YearsAsianPercent = $formValues.find('.valueGraduateWithin4YearsAsianPercent').val();
	if(valueGraduateWithin4YearsAsianPercent != null && valueGraduateWithin4YearsAsianPercent !== '')
		vals['graduateWithin4YearsAsianPercent'] = valueGraduateWithin4YearsAsianPercent;

	var valueGraduateWithin4YearsBlackPercent = $formValues.find('.valueGraduateWithin4YearsBlackPercent').val();
	if(valueGraduateWithin4YearsBlackPercent != null && valueGraduateWithin4YearsBlackPercent !== '')
		vals['graduateWithin4YearsBlackPercent'] = valueGraduateWithin4YearsBlackPercent;

	var valueGraduateWithin4YearsLatinxPercent = $formValues.find('.valueGraduateWithin4YearsLatinxPercent').val();
	if(valueGraduateWithin4YearsLatinxPercent != null && valueGraduateWithin4YearsLatinxPercent !== '')
		vals['graduateWithin4YearsLatinxPercent'] = valueGraduateWithin4YearsLatinxPercent;

	var valueGraduateWithin4YearsMultiRacialPercent = $formValues.find('.valueGraduateWithin4YearsMultiRacialPercent').val();
	if(valueGraduateWithin4YearsMultiRacialPercent != null && valueGraduateWithin4YearsMultiRacialPercent !== '')
		vals['graduateWithin4YearsMultiRacialPercent'] = valueGraduateWithin4YearsMultiRacialPercent;

	var valueGraduateWithin4YearsPacificIslanderPercent = $formValues.find('.valueGraduateWithin4YearsPacificIslanderPercent').val();
	if(valueGraduateWithin4YearsPacificIslanderPercent != null && valueGraduateWithin4YearsPacificIslanderPercent !== '')
		vals['graduateWithin4YearsPacificIslanderPercent'] = valueGraduateWithin4YearsPacificIslanderPercent;

	var valueGraduateWithin4YearsWhitePercent = $formValues.find('.valueGraduateWithin4YearsWhitePercent').val();
	if(valueGraduateWithin4YearsWhitePercent != null && valueGraduateWithin4YearsWhitePercent !== '')
		vals['graduateWithin4YearsWhitePercent'] = valueGraduateWithin4YearsWhitePercent;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

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

	var valueAgencyKey = $formValues.find('.valueAgencyKey').val();
	if(valueAgencyKey != null && valueAgencyKey !== '')
		vals['agencyKey'] = valueAgencyKey;

	var valuePupilsIndigenousMale = $formValues.find('.valuePupilsIndigenousMale').val();
	if(valuePupilsIndigenousMale != null && valuePupilsIndigenousMale !== '')
		vals['pupilsIndigenousMale'] = valuePupilsIndigenousMale;

	var valuePupilsIndigenousFemale = $formValues.find('.valuePupilsIndigenousFemale').val();
	if(valuePupilsIndigenousFemale != null && valuePupilsIndigenousFemale !== '')
		vals['pupilsIndigenousFemale'] = valuePupilsIndigenousFemale;

	var valuePupilsIndigenousTotal = $formValues.find('.valuePupilsIndigenousTotal').val();
	if(valuePupilsIndigenousTotal != null && valuePupilsIndigenousTotal !== '')
		vals['pupilsIndigenousTotal'] = valuePupilsIndigenousTotal;

	var valuePupilsIndigenousPercent = $formValues.find('.valuePupilsIndigenousPercent').val();
	if(valuePupilsIndigenousPercent != null && valuePupilsIndigenousPercent !== '')
		vals['pupilsIndigenousPercent'] = valuePupilsIndigenousPercent;

	var valuePupilsAsianMale = $formValues.find('.valuePupilsAsianMale').val();
	if(valuePupilsAsianMale != null && valuePupilsAsianMale !== '')
		vals['pupilsAsianMale'] = valuePupilsAsianMale;

	var valuePupilsAsianFemale = $formValues.find('.valuePupilsAsianFemale').val();
	if(valuePupilsAsianFemale != null && valuePupilsAsianFemale !== '')
		vals['pupilsAsianFemale'] = valuePupilsAsianFemale;

	var valuePupilsAsianTotal = $formValues.find('.valuePupilsAsianTotal').val();
	if(valuePupilsAsianTotal != null && valuePupilsAsianTotal !== '')
		vals['pupilsAsianTotal'] = valuePupilsAsianTotal;

	var valuePupilsAsianPercent = $formValues.find('.valuePupilsAsianPercent').val();
	if(valuePupilsAsianPercent != null && valuePupilsAsianPercent !== '')
		vals['pupilsAsianPercent'] = valuePupilsAsianPercent;

	var valuePupilsLatinxMale = $formValues.find('.valuePupilsLatinxMale').val();
	if(valuePupilsLatinxMale != null && valuePupilsLatinxMale !== '')
		vals['pupilsLatinxMale'] = valuePupilsLatinxMale;

	var valuePupilsLatinxFemale = $formValues.find('.valuePupilsLatinxFemale').val();
	if(valuePupilsLatinxFemale != null && valuePupilsLatinxFemale !== '')
		vals['pupilsLatinxFemale'] = valuePupilsLatinxFemale;

	var valuePupilsLatinxTotal = $formValues.find('.valuePupilsLatinxTotal').val();
	if(valuePupilsLatinxTotal != null && valuePupilsLatinxTotal !== '')
		vals['pupilsLatinxTotal'] = valuePupilsLatinxTotal;

	var valuePupilsLatinxPercent = $formValues.find('.valuePupilsLatinxPercent').val();
	if(valuePupilsLatinxPercent != null && valuePupilsLatinxPercent !== '')
		vals['pupilsLatinxPercent'] = valuePupilsLatinxPercent;

	var valuePupilsBlackMale = $formValues.find('.valuePupilsBlackMale').val();
	if(valuePupilsBlackMale != null && valuePupilsBlackMale !== '')
		vals['pupilsBlackMale'] = valuePupilsBlackMale;

	var valuePupilsBlackFemale = $formValues.find('.valuePupilsBlackFemale').val();
	if(valuePupilsBlackFemale != null && valuePupilsBlackFemale !== '')
		vals['pupilsBlackFemale'] = valuePupilsBlackFemale;

	var valuePupilsBlackTotal = $formValues.find('.valuePupilsBlackTotal').val();
	if(valuePupilsBlackTotal != null && valuePupilsBlackTotal !== '')
		vals['pupilsBlackTotal'] = valuePupilsBlackTotal;

	var valuePupilsBlackPercent = $formValues.find('.valuePupilsBlackPercent').val();
	if(valuePupilsBlackPercent != null && valuePupilsBlackPercent !== '')
		vals['pupilsBlackPercent'] = valuePupilsBlackPercent;

	var valuePupilsWhiteMale = $formValues.find('.valuePupilsWhiteMale').val();
	if(valuePupilsWhiteMale != null && valuePupilsWhiteMale !== '')
		vals['pupilsWhiteMale'] = valuePupilsWhiteMale;

	var valuePupilsWhiteFemale = $formValues.find('.valuePupilsWhiteFemale').val();
	if(valuePupilsWhiteFemale != null && valuePupilsWhiteFemale !== '')
		vals['pupilsWhiteFemale'] = valuePupilsWhiteFemale;

	var valuePupilsWhiteTotal = $formValues.find('.valuePupilsWhiteTotal').val();
	if(valuePupilsWhiteTotal != null && valuePupilsWhiteTotal !== '')
		vals['pupilsWhiteTotal'] = valuePupilsWhiteTotal;

	var valuePupilsWhitePercent = $formValues.find('.valuePupilsWhitePercent').val();
	if(valuePupilsWhitePercent != null && valuePupilsWhitePercent !== '')
		vals['pupilsWhitePercent'] = valuePupilsWhitePercent;

	var valuePupilsPacificIslanderMale = $formValues.find('.valuePupilsPacificIslanderMale').val();
	if(valuePupilsPacificIslanderMale != null && valuePupilsPacificIslanderMale !== '')
		vals['pupilsPacificIslanderMale'] = valuePupilsPacificIslanderMale;

	var valuePupilsPacificIslanderFemale = $formValues.find('.valuePupilsPacificIslanderFemale').val();
	if(valuePupilsPacificIslanderFemale != null && valuePupilsPacificIslanderFemale !== '')
		vals['pupilsPacificIslanderFemale'] = valuePupilsPacificIslanderFemale;

	var valuePupilsPacificIslanderTotal = $formValues.find('.valuePupilsPacificIslanderTotal').val();
	if(valuePupilsPacificIslanderTotal != null && valuePupilsPacificIslanderTotal !== '')
		vals['pupilsPacificIslanderTotal'] = valuePupilsPacificIslanderTotal;

	var valuePupilsPacificIslanderPercent = $formValues.find('.valuePupilsPacificIslanderPercent').val();
	if(valuePupilsPacificIslanderPercent != null && valuePupilsPacificIslanderPercent !== '')
		vals['pupilsPacificIslanderPercent'] = valuePupilsPacificIslanderPercent;

	var valuePupilsMultiRacialMale = $formValues.find('.valuePupilsMultiRacialMale').val();
	if(valuePupilsMultiRacialMale != null && valuePupilsMultiRacialMale !== '')
		vals['pupilsMultiRacialMale'] = valuePupilsMultiRacialMale;

	var valuePupilsMultiRacialFemale = $formValues.find('.valuePupilsMultiRacialFemale').val();
	if(valuePupilsMultiRacialFemale != null && valuePupilsMultiRacialFemale !== '')
		vals['pupilsMultiRacialFemale'] = valuePupilsMultiRacialFemale;

	var valuePupilsMultiRacialTotal = $formValues.find('.valuePupilsMultiRacialTotal').val();
	if(valuePupilsMultiRacialTotal != null && valuePupilsMultiRacialTotal !== '')
		vals['pupilsMultiRacialTotal'] = valuePupilsMultiRacialTotal;

	var valuePupilsMultiRacialPercent = $formValues.find('.valuePupilsMultiRacialPercent').val();
	if(valuePupilsMultiRacialPercent != null && valuePupilsMultiRacialPercent !== '')
		vals['pupilsMultiRacialPercent'] = valuePupilsMultiRacialPercent;

	var valuePupilsTotal = $formValues.find('.valuePupilsTotal').val();
	if(valuePupilsTotal != null && valuePupilsTotal !== '')
		vals['pupilsTotal'] = valuePupilsTotal;

	var valueTeachersMale = $formValues.find('.valueTeachersMale').val();
	if(valueTeachersMale != null && valueTeachersMale !== '')
		vals['teachersMale'] = valueTeachersMale;

	var valueTeachersFemale = $formValues.find('.valueTeachersFemale').val();
	if(valueTeachersFemale != null && valueTeachersFemale !== '')
		vals['teachersFemale'] = valueTeachersFemale;

	var valueTeachersTotal = $formValues.find('.valueTeachersTotal').val();
	if(valueTeachersTotal != null && valueTeachersTotal !== '')
		vals['teachersTotal'] = valueTeachersTotal;

	var valueTeachersWhiteTotal = $formValues.find('.valueTeachersWhiteTotal').val();
	if(valueTeachersWhiteTotal != null && valueTeachersWhiteTotal !== '')
		vals['teachersWhiteTotal'] = valueTeachersWhiteTotal;

	var valueTeachersWhitePercent = $formValues.find('.valueTeachersWhitePercent').val();
	if(valueTeachersWhitePercent != null && valueTeachersWhitePercent !== '')
		vals['teachersWhitePercent'] = valueTeachersWhitePercent;

	var valueTeachersBlackTotal = $formValues.find('.valueTeachersBlackTotal').val();
	if(valueTeachersBlackTotal != null && valueTeachersBlackTotal !== '')
		vals['teachersBlackTotal'] = valueTeachersBlackTotal;

	var valueTeachersBlackPercent = $formValues.find('.valueTeachersBlackPercent').val();
	if(valueTeachersBlackPercent != null && valueTeachersBlackPercent !== '')
		vals['teachersBlackPercent'] = valueTeachersBlackPercent;

	var valueTeachersOtherTotal = $formValues.find('.valueTeachersOtherTotal').val();
	if(valueTeachersOtherTotal != null && valueTeachersOtherTotal !== '')
		vals['teachersOtherTotal'] = valueTeachersOtherTotal;

	var valueTeachersOtherPercent = $formValues.find('.valueTeachersOtherPercent').val();
	if(valueTeachersOtherPercent != null && valueTeachersOtherPercent !== '')
		vals['teachersOtherPercent'] = valueTeachersOtherPercent;

	var valueDelinquentComplaintsTotal = $formValues.find('.valueDelinquentComplaintsTotal').val();
	if(valueDelinquentComplaintsTotal != null && valueDelinquentComplaintsTotal !== '')
		vals['delinquentComplaintsTotal'] = valueDelinquentComplaintsTotal;

	var valueDelinquentComplaintsAtSchool = $formValues.find('.valueDelinquentComplaintsAtSchool').val();
	if(valueDelinquentComplaintsAtSchool != null && valueDelinquentComplaintsAtSchool !== '')
		vals['delinquentComplaintsAtSchool'] = valueDelinquentComplaintsAtSchool;

	var valueDelinquentComplaintsAtSchoolPercent = $formValues.find('.valueDelinquentComplaintsAtSchoolPercent').val();
	if(valueDelinquentComplaintsAtSchoolPercent != null && valueDelinquentComplaintsAtSchoolPercent !== '')
		vals['delinquentComplaintsAtSchoolPercent'] = valueDelinquentComplaintsAtSchoolPercent;

	var valueDelinquentComplaintsAsian = $formValues.find('.valueDelinquentComplaintsAsian').val();
	if(valueDelinquentComplaintsAsian != null && valueDelinquentComplaintsAsian !== '')
		vals['delinquentComplaintsAsian'] = valueDelinquentComplaintsAsian;

	var valueDelinquentComplaintsAsianPercent = $formValues.find('.valueDelinquentComplaintsAsianPercent').val();
	if(valueDelinquentComplaintsAsianPercent != null && valueDelinquentComplaintsAsianPercent !== '')
		vals['delinquentComplaintsAsianPercent'] = valueDelinquentComplaintsAsianPercent;

	var valueDelinquentComplaintsBlack = $formValues.find('.valueDelinquentComplaintsBlack').val();
	if(valueDelinquentComplaintsBlack != null && valueDelinquentComplaintsBlack !== '')
		vals['delinquentComplaintsBlack'] = valueDelinquentComplaintsBlack;

	var valueDelinquentComplaintsBlackPercent = $formValues.find('.valueDelinquentComplaintsBlackPercent').val();
	if(valueDelinquentComplaintsBlackPercent != null && valueDelinquentComplaintsBlackPercent !== '')
		vals['delinquentComplaintsBlackPercent'] = valueDelinquentComplaintsBlackPercent;

	var valueDelinquentComplaintsLatinx = $formValues.find('.valueDelinquentComplaintsLatinx').val();
	if(valueDelinquentComplaintsLatinx != null && valueDelinquentComplaintsLatinx !== '')
		vals['delinquentComplaintsLatinx'] = valueDelinquentComplaintsLatinx;

	var valueDelinquentComplaintsLatinxPercent = $formValues.find('.valueDelinquentComplaintsLatinxPercent').val();
	if(valueDelinquentComplaintsLatinxPercent != null && valueDelinquentComplaintsLatinxPercent !== '')
		vals['delinquentComplaintsLatinxPercent'] = valueDelinquentComplaintsLatinxPercent;

	var valueDelinquentComplaintsMultiRacial = $formValues.find('.valueDelinquentComplaintsMultiRacial').val();
	if(valueDelinquentComplaintsMultiRacial != null && valueDelinquentComplaintsMultiRacial !== '')
		vals['delinquentComplaintsMultiRacial'] = valueDelinquentComplaintsMultiRacial;

	var valueDelinquentComplaintsMultiRacialPercent = $formValues.find('.valueDelinquentComplaintsMultiRacialPercent').val();
	if(valueDelinquentComplaintsMultiRacialPercent != null && valueDelinquentComplaintsMultiRacialPercent !== '')
		vals['delinquentComplaintsMultiRacialPercent'] = valueDelinquentComplaintsMultiRacialPercent;

	var valueDelinquentComplaintsIndigenous = $formValues.find('.valueDelinquentComplaintsIndigenous').val();
	if(valueDelinquentComplaintsIndigenous != null && valueDelinquentComplaintsIndigenous !== '')
		vals['delinquentComplaintsIndigenous'] = valueDelinquentComplaintsIndigenous;

	var valueDelinquentComplaintsIndigenousPercent = $formValues.find('.valueDelinquentComplaintsIndigenousPercent').val();
	if(valueDelinquentComplaintsIndigenousPercent != null && valueDelinquentComplaintsIndigenousPercent !== '')
		vals['delinquentComplaintsIndigenousPercent'] = valueDelinquentComplaintsIndigenousPercent;

	var valueDelinquentComplaintsWhite = $formValues.find('.valueDelinquentComplaintsWhite').val();
	if(valueDelinquentComplaintsWhite != null && valueDelinquentComplaintsWhite !== '')
		vals['delinquentComplaintsWhite'] = valueDelinquentComplaintsWhite;

	var valueDelinquentComplaintsWhitePercent = $formValues.find('.valueDelinquentComplaintsWhitePercent').val();
	if(valueDelinquentComplaintsWhitePercent != null && valueDelinquentComplaintsWhitePercent !== '')
		vals['delinquentComplaintsWhitePercent'] = valueDelinquentComplaintsWhitePercent;

	var valueDelinquentComplaintsPacificIslander = $formValues.find('.valueDelinquentComplaintsPacificIslander').val();
	if(valueDelinquentComplaintsPacificIslander != null && valueDelinquentComplaintsPacificIslander !== '')
		vals['delinquentComplaintsPacificIslander'] = valueDelinquentComplaintsPacificIslander;

	var valueDelinquentComplaintsPacificIslanderPercent = $formValues.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
	if(valueDelinquentComplaintsPacificIslanderPercent != null && valueDelinquentComplaintsPacificIslanderPercent !== '')
		vals['delinquentComplaintsPacificIslanderPercent'] = valueDelinquentComplaintsPacificIslanderPercent;

	var valueShortTermSuspensionRate = $formValues.find('.valueShortTermSuspensionRate').val();
	if(valueShortTermSuspensionRate != null && valueShortTermSuspensionRate !== '')
		vals['shortTermSuspensionRate'] = valueShortTermSuspensionRate;

	var valueShortTermSuspensionsTotal = $formValues.find('.valueShortTermSuspensionsTotal').val();
	if(valueShortTermSuspensionsTotal != null && valueShortTermSuspensionsTotal !== '')
		vals['shortTermSuspensionsTotal'] = valueShortTermSuspensionsTotal;

	var valueLongTermSuspensionsTotal = $formValues.find('.valueLongTermSuspensionsTotal').val();
	if(valueLongTermSuspensionsTotal != null && valueLongTermSuspensionsTotal !== '')
		vals['longTermSuspensionsTotal'] = valueLongTermSuspensionsTotal;

	var valueExpulsionsTotal = $formValues.find('.valueExpulsionsTotal').val();
	if(valueExpulsionsTotal != null && valueExpulsionsTotal !== '')
		vals['expulsionsTotal'] = valueExpulsionsTotal;

	var valueShortTermSuspensionsAsianFemale = $formValues.find('.valueShortTermSuspensionsAsianFemale').val();
	if(valueShortTermSuspensionsAsianFemale != null && valueShortTermSuspensionsAsianFemale !== '')
		vals['shortTermSuspensionsAsianFemale'] = valueShortTermSuspensionsAsianFemale;

	var valueShortTermSuspensionsAsianMale = $formValues.find('.valueShortTermSuspensionsAsianMale').val();
	if(valueShortTermSuspensionsAsianMale != null && valueShortTermSuspensionsAsianMale !== '')
		vals['shortTermSuspensionsAsianMale'] = valueShortTermSuspensionsAsianMale;

	var valueShortTermSuspensionsAsianTotal = $formValues.find('.valueShortTermSuspensionsAsianTotal').val();
	if(valueShortTermSuspensionsAsianTotal != null && valueShortTermSuspensionsAsianTotal !== '')
		vals['shortTermSuspensionsAsianTotal'] = valueShortTermSuspensionsAsianTotal;

	var valueShortTermSuspensionsAsianPercent = $formValues.find('.valueShortTermSuspensionsAsianPercent').val();
	if(valueShortTermSuspensionsAsianPercent != null && valueShortTermSuspensionsAsianPercent !== '')
		vals['shortTermSuspensionsAsianPercent'] = valueShortTermSuspensionsAsianPercent;

	var valueShortTermSuspensionsAsianRate = $formValues.find('.valueShortTermSuspensionsAsianRate').val();
	if(valueShortTermSuspensionsAsianRate != null && valueShortTermSuspensionsAsianRate !== '')
		vals['shortTermSuspensionsAsianRate'] = valueShortTermSuspensionsAsianRate;

	var valueShortTermSuspensionsBlackFemale = $formValues.find('.valueShortTermSuspensionsBlackFemale').val();
	if(valueShortTermSuspensionsBlackFemale != null && valueShortTermSuspensionsBlackFemale !== '')
		vals['shortTermSuspensionsBlackFemale'] = valueShortTermSuspensionsBlackFemale;

	var valueShortTermSuspensionsBlackMale = $formValues.find('.valueShortTermSuspensionsBlackMale').val();
	if(valueShortTermSuspensionsBlackMale != null && valueShortTermSuspensionsBlackMale !== '')
		vals['shortTermSuspensionsBlackMale'] = valueShortTermSuspensionsBlackMale;

	var valueShortTermSuspensionsBlackTotal = $formValues.find('.valueShortTermSuspensionsBlackTotal').val();
	if(valueShortTermSuspensionsBlackTotal != null && valueShortTermSuspensionsBlackTotal !== '')
		vals['shortTermSuspensionsBlackTotal'] = valueShortTermSuspensionsBlackTotal;

	var valueShortTermSuspensionsBlackPercent = $formValues.find('.valueShortTermSuspensionsBlackPercent').val();
	if(valueShortTermSuspensionsBlackPercent != null && valueShortTermSuspensionsBlackPercent !== '')
		vals['shortTermSuspensionsBlackPercent'] = valueShortTermSuspensionsBlackPercent;

	var valueShortTermSuspensionsBlackRate = $formValues.find('.valueShortTermSuspensionsBlackRate').val();
	if(valueShortTermSuspensionsBlackRate != null && valueShortTermSuspensionsBlackRate !== '')
		vals['shortTermSuspensionsBlackRate'] = valueShortTermSuspensionsBlackRate;

	var valueShortTermSuspensionsLatinxFemale = $formValues.find('.valueShortTermSuspensionsLatinxFemale').val();
	if(valueShortTermSuspensionsLatinxFemale != null && valueShortTermSuspensionsLatinxFemale !== '')
		vals['shortTermSuspensionsLatinxFemale'] = valueShortTermSuspensionsLatinxFemale;

	var valueShortTermSuspensionsLatinxMale = $formValues.find('.valueShortTermSuspensionsLatinxMale').val();
	if(valueShortTermSuspensionsLatinxMale != null && valueShortTermSuspensionsLatinxMale !== '')
		vals['shortTermSuspensionsLatinxMale'] = valueShortTermSuspensionsLatinxMale;

	var valueShortTermSuspensionsLatinxTotal = $formValues.find('.valueShortTermSuspensionsLatinxTotal').val();
	if(valueShortTermSuspensionsLatinxTotal != null && valueShortTermSuspensionsLatinxTotal !== '')
		vals['shortTermSuspensionsLatinxTotal'] = valueShortTermSuspensionsLatinxTotal;

	var valueShortTermSuspensionsLatinxPercent = $formValues.find('.valueShortTermSuspensionsLatinxPercent').val();
	if(valueShortTermSuspensionsLatinxPercent != null && valueShortTermSuspensionsLatinxPercent !== '')
		vals['shortTermSuspensionsLatinxPercent'] = valueShortTermSuspensionsLatinxPercent;

	var valueShortTermSuspensionsLatinxRate = $formValues.find('.valueShortTermSuspensionsLatinxRate').val();
	if(valueShortTermSuspensionsLatinxRate != null && valueShortTermSuspensionsLatinxRate !== '')
		vals['shortTermSuspensionsLatinxRate'] = valueShortTermSuspensionsLatinxRate;

	var valueShortTermSuspensionsIndigenousFemale = $formValues.find('.valueShortTermSuspensionsIndigenousFemale').val();
	if(valueShortTermSuspensionsIndigenousFemale != null && valueShortTermSuspensionsIndigenousFemale !== '')
		vals['shortTermSuspensionsIndigenousFemale'] = valueShortTermSuspensionsIndigenousFemale;

	var valueShortTermSuspensionsIndigenousMale = $formValues.find('.valueShortTermSuspensionsIndigenousMale').val();
	if(valueShortTermSuspensionsIndigenousMale != null && valueShortTermSuspensionsIndigenousMale !== '')
		vals['shortTermSuspensionsIndigenousMale'] = valueShortTermSuspensionsIndigenousMale;

	var valueShortTermSuspensionsIndigenousTotal = $formValues.find('.valueShortTermSuspensionsIndigenousTotal').val();
	if(valueShortTermSuspensionsIndigenousTotal != null && valueShortTermSuspensionsIndigenousTotal !== '')
		vals['shortTermSuspensionsIndigenousTotal'] = valueShortTermSuspensionsIndigenousTotal;

	var valueShortTermSuspensionsIndigenousPercent = $formValues.find('.valueShortTermSuspensionsIndigenousPercent').val();
	if(valueShortTermSuspensionsIndigenousPercent != null && valueShortTermSuspensionsIndigenousPercent !== '')
		vals['shortTermSuspensionsIndigenousPercent'] = valueShortTermSuspensionsIndigenousPercent;

	var valueShortTermSuspensionsIndigenousRate = $formValues.find('.valueShortTermSuspensionsIndigenousRate').val();
	if(valueShortTermSuspensionsIndigenousRate != null && valueShortTermSuspensionsIndigenousRate !== '')
		vals['shortTermSuspensionsIndigenousRate'] = valueShortTermSuspensionsIndigenousRate;

	var valueShortTermSuspensionsMultiRacialFemale = $formValues.find('.valueShortTermSuspensionsMultiRacialFemale').val();
	if(valueShortTermSuspensionsMultiRacialFemale != null && valueShortTermSuspensionsMultiRacialFemale !== '')
		vals['shortTermSuspensionsMultiRacialFemale'] = valueShortTermSuspensionsMultiRacialFemale;

	var valueShortTermSuspensionsMultiRacialMale = $formValues.find('.valueShortTermSuspensionsMultiRacialMale').val();
	if(valueShortTermSuspensionsMultiRacialMale != null && valueShortTermSuspensionsMultiRacialMale !== '')
		vals['shortTermSuspensionsMultiRacialMale'] = valueShortTermSuspensionsMultiRacialMale;

	var valueShortTermSuspensionsMultiRacialTotal = $formValues.find('.valueShortTermSuspensionsMultiRacialTotal').val();
	if(valueShortTermSuspensionsMultiRacialTotal != null && valueShortTermSuspensionsMultiRacialTotal !== '')
		vals['shortTermSuspensionsMultiRacialTotal'] = valueShortTermSuspensionsMultiRacialTotal;

	var valueShortTermSuspensionsMultiRacialPercent = $formValues.find('.valueShortTermSuspensionsMultiRacialPercent').val();
	if(valueShortTermSuspensionsMultiRacialPercent != null && valueShortTermSuspensionsMultiRacialPercent !== '')
		vals['shortTermSuspensionsMultiRacialPercent'] = valueShortTermSuspensionsMultiRacialPercent;

	var valueShortTermSuspensionsMultiRacialRate = $formValues.find('.valueShortTermSuspensionsMultiRacialRate').val();
	if(valueShortTermSuspensionsMultiRacialRate != null && valueShortTermSuspensionsMultiRacialRate !== '')
		vals['shortTermSuspensionsMultiRacialRate'] = valueShortTermSuspensionsMultiRacialRate;

	var valueShortTermSuspensionsPacificIslanderFemale = $formValues.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
	if(valueShortTermSuspensionsPacificIslanderFemale != null && valueShortTermSuspensionsPacificIslanderFemale !== '')
		vals['shortTermSuspensionsPacificIslanderFemale'] = valueShortTermSuspensionsPacificIslanderFemale;

	var valueShortTermSuspensionsPacificIslanderMale = $formValues.find('.valueShortTermSuspensionsPacificIslanderMale').val();
	if(valueShortTermSuspensionsPacificIslanderMale != null && valueShortTermSuspensionsPacificIslanderMale !== '')
		vals['shortTermSuspensionsPacificIslanderMale'] = valueShortTermSuspensionsPacificIslanderMale;

	var valueShortTermSuspensionsPacificIslanderTotal = $formValues.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
	if(valueShortTermSuspensionsPacificIslanderTotal != null && valueShortTermSuspensionsPacificIslanderTotal !== '')
		vals['shortTermSuspensionsPacificIslanderTotal'] = valueShortTermSuspensionsPacificIslanderTotal;

	var valueShortTermSuspensionsPacificIslanderPercent = $formValues.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
	if(valueShortTermSuspensionsPacificIslanderPercent != null && valueShortTermSuspensionsPacificIslanderPercent !== '')
		vals['shortTermSuspensionsPacificIslanderPercent'] = valueShortTermSuspensionsPacificIslanderPercent;

	var valueShortTermSuspensionsPacificIslanderRate = $formValues.find('.valueShortTermSuspensionsPacificIslanderRate').val();
	if(valueShortTermSuspensionsPacificIslanderRate != null && valueShortTermSuspensionsPacificIslanderRate !== '')
		vals['shortTermSuspensionsPacificIslanderRate'] = valueShortTermSuspensionsPacificIslanderRate;

	var valueShortTermSuspensionsWhiteFemale = $formValues.find('.valueShortTermSuspensionsWhiteFemale').val();
	if(valueShortTermSuspensionsWhiteFemale != null && valueShortTermSuspensionsWhiteFemale !== '')
		vals['shortTermSuspensionsWhiteFemale'] = valueShortTermSuspensionsWhiteFemale;

	var valueShortTermSuspensionsWhiteMale = $formValues.find('.valueShortTermSuspensionsWhiteMale').val();
	if(valueShortTermSuspensionsWhiteMale != null && valueShortTermSuspensionsWhiteMale !== '')
		vals['shortTermSuspensionsWhiteMale'] = valueShortTermSuspensionsWhiteMale;

	var valueShortTermSuspensionsWhiteTotal = $formValues.find('.valueShortTermSuspensionsWhiteTotal').val();
	if(valueShortTermSuspensionsWhiteTotal != null && valueShortTermSuspensionsWhiteTotal !== '')
		vals['shortTermSuspensionsWhiteTotal'] = valueShortTermSuspensionsWhiteTotal;

	var valueShortTermSuspensionsWhitePercent = $formValues.find('.valueShortTermSuspensionsWhitePercent').val();
	if(valueShortTermSuspensionsWhitePercent != null && valueShortTermSuspensionsWhitePercent !== '')
		vals['shortTermSuspensionsWhitePercent'] = valueShortTermSuspensionsWhitePercent;

	var valueShortTermSuspensionsWhiteRate = $formValues.find('.valueShortTermSuspensionsWhiteRate').val();
	if(valueShortTermSuspensionsWhiteRate != null && valueShortTermSuspensionsWhiteRate !== '')
		vals['shortTermSuspensionsWhiteRate'] = valueShortTermSuspensionsWhiteRate;

	var valueShortTermSuspensionsAllRate = $formValues.find('.valueShortTermSuspensionsAllRate').val();
	if(valueShortTermSuspensionsAllRate != null && valueShortTermSuspensionsAllRate !== '')
		vals['shortTermSuspensionsAllRate'] = valueShortTermSuspensionsAllRate;

	var valueShortTermSuspensionsBlackVsWhite = $formValues.find('.valueShortTermSuspensionsBlackVsWhite').val();
	if(valueShortTermSuspensionsBlackVsWhite != null && valueShortTermSuspensionsBlackVsWhite !== '')
		vals['shortTermSuspensionsBlackVsWhite'] = valueShortTermSuspensionsBlackVsWhite;

	var valueExamsCollegeReadyGrades38OverallPercent = $formValues.find('.valueExamsCollegeReadyGrades38OverallPercent').val();
	if(valueExamsCollegeReadyGrades38OverallPercent != null && valueExamsCollegeReadyGrades38OverallPercent !== '')
		vals['examsCollegeReadyGrades38OverallPercent'] = valueExamsCollegeReadyGrades38OverallPercent;

	var valueExamsCollegeReadyGrades38IndigenousPercent = $formValues.find('.valueExamsCollegeReadyGrades38IndigenousPercent').val();
	if(valueExamsCollegeReadyGrades38IndigenousPercent != null && valueExamsCollegeReadyGrades38IndigenousPercent !== '')
		vals['examsCollegeReadyGrades38IndigenousPercent'] = valueExamsCollegeReadyGrades38IndigenousPercent;

	var valueExamsCollegeReadyGrades38AsianPercent = $formValues.find('.valueExamsCollegeReadyGrades38AsianPercent').val();
	if(valueExamsCollegeReadyGrades38AsianPercent != null && valueExamsCollegeReadyGrades38AsianPercent !== '')
		vals['examsCollegeReadyGrades38AsianPercent'] = valueExamsCollegeReadyGrades38AsianPercent;

	var valueExamsCollegeReadyGrades38BlackPercent = $formValues.find('.valueExamsCollegeReadyGrades38BlackPercent').val();
	if(valueExamsCollegeReadyGrades38BlackPercent != null && valueExamsCollegeReadyGrades38BlackPercent !== '')
		vals['examsCollegeReadyGrades38BlackPercent'] = valueExamsCollegeReadyGrades38BlackPercent;

	var valueExamsCollegeReadyGrades38LatinxPercent = $formValues.find('.valueExamsCollegeReadyGrades38LatinxPercent').val();
	if(valueExamsCollegeReadyGrades38LatinxPercent != null && valueExamsCollegeReadyGrades38LatinxPercent !== '')
		vals['examsCollegeReadyGrades38LatinxPercent'] = valueExamsCollegeReadyGrades38LatinxPercent;

	var valueExamsCollegeReadyGrades38MultiRacialPercent = $formValues.find('.valueExamsCollegeReadyGrades38MultiRacialPercent').val();
	if(valueExamsCollegeReadyGrades38MultiRacialPercent != null && valueExamsCollegeReadyGrades38MultiRacialPercent !== '')
		vals['examsCollegeReadyGrades38MultiRacialPercent'] = valueExamsCollegeReadyGrades38MultiRacialPercent;

	var valueExamsCollegeReadyGrades38PacificIslanderPercent = $formValues.find('.valueExamsCollegeReadyGrades38PacificIslanderPercent').val();
	if(valueExamsCollegeReadyGrades38PacificIslanderPercent != null && valueExamsCollegeReadyGrades38PacificIslanderPercent !== '')
		vals['examsCollegeReadyGrades38PacificIslanderPercent'] = valueExamsCollegeReadyGrades38PacificIslanderPercent;

	var valueExamsCollegeReadyGrades38WhitePercent = $formValues.find('.valueExamsCollegeReadyGrades38WhitePercent').val();
	if(valueExamsCollegeReadyGrades38WhitePercent != null && valueExamsCollegeReadyGrades38WhitePercent !== '')
		vals['examsCollegeReadyGrades38WhitePercent'] = valueExamsCollegeReadyGrades38WhitePercent;

	var valueExamsCollegeReadyGrades912OverallPercent = $formValues.find('.valueExamsCollegeReadyGrades912OverallPercent').val();
	if(valueExamsCollegeReadyGrades912OverallPercent != null && valueExamsCollegeReadyGrades912OverallPercent !== '')
		vals['examsCollegeReadyGrades912OverallPercent'] = valueExamsCollegeReadyGrades912OverallPercent;

	var valueExamsCollegeReadyGrades912IndigenousPercent = $formValues.find('.valueExamsCollegeReadyGrades912IndigenousPercent').val();
	if(valueExamsCollegeReadyGrades912IndigenousPercent != null && valueExamsCollegeReadyGrades912IndigenousPercent !== '')
		vals['examsCollegeReadyGrades912IndigenousPercent'] = valueExamsCollegeReadyGrades912IndigenousPercent;

	var valueExamsCollegeReadyGrades912AsianPercent = $formValues.find('.valueExamsCollegeReadyGrades912AsianPercent').val();
	if(valueExamsCollegeReadyGrades912AsianPercent != null && valueExamsCollegeReadyGrades912AsianPercent !== '')
		vals['examsCollegeReadyGrades912AsianPercent'] = valueExamsCollegeReadyGrades912AsianPercent;

	var valueExamsCollegeReadyGrades912BlackPercent = $formValues.find('.valueExamsCollegeReadyGrades912BlackPercent').val();
	if(valueExamsCollegeReadyGrades912BlackPercent != null && valueExamsCollegeReadyGrades912BlackPercent !== '')
		vals['examsCollegeReadyGrades912BlackPercent'] = valueExamsCollegeReadyGrades912BlackPercent;

	var valueExamsCollegeReadyGrades912LatinxPercent = $formValues.find('.valueExamsCollegeReadyGrades912LatinxPercent').val();
	if(valueExamsCollegeReadyGrades912LatinxPercent != null && valueExamsCollegeReadyGrades912LatinxPercent !== '')
		vals['examsCollegeReadyGrades912LatinxPercent'] = valueExamsCollegeReadyGrades912LatinxPercent;

	var valueExamsCollegeReadyGrades912MultiRacialPercent = $formValues.find('.valueExamsCollegeReadyGrades912MultiRacialPercent').val();
	if(valueExamsCollegeReadyGrades912MultiRacialPercent != null && valueExamsCollegeReadyGrades912MultiRacialPercent !== '')
		vals['examsCollegeReadyGrades912MultiRacialPercent'] = valueExamsCollegeReadyGrades912MultiRacialPercent;

	var valueExamsCollegeReadyGrades912PacificIslanderPercent = $formValues.find('.valueExamsCollegeReadyGrades912PacificIslanderPercent').val();
	if(valueExamsCollegeReadyGrades912PacificIslanderPercent != null && valueExamsCollegeReadyGrades912PacificIslanderPercent !== '')
		vals['examsCollegeReadyGrades912PacificIslanderPercent'] = valueExamsCollegeReadyGrades912PacificIslanderPercent;

	var valueExamsCollegeReadyGrades912WhitePercent = $formValues.find('.valueExamsCollegeReadyGrades912WhitePercent').val();
	if(valueExamsCollegeReadyGrades912WhitePercent != null && valueExamsCollegeReadyGrades912WhitePercent !== '')
		vals['examsCollegeReadyGrades912WhitePercent'] = valueExamsCollegeReadyGrades912WhitePercent;

	var valueGraduateWithin4YearsOverallPercent = $formValues.find('.valueGraduateWithin4YearsOverallPercent').val();
	if(valueGraduateWithin4YearsOverallPercent != null && valueGraduateWithin4YearsOverallPercent !== '')
		vals['graduateWithin4YearsOverallPercent'] = valueGraduateWithin4YearsOverallPercent;

	var valueGraduateWithin4YearsIndigenousPercent = $formValues.find('.valueGraduateWithin4YearsIndigenousPercent').val();
	if(valueGraduateWithin4YearsIndigenousPercent != null && valueGraduateWithin4YearsIndigenousPercent !== '')
		vals['graduateWithin4YearsIndigenousPercent'] = valueGraduateWithin4YearsIndigenousPercent;

	var valueGraduateWithin4YearsAsianPercent = $formValues.find('.valueGraduateWithin4YearsAsianPercent').val();
	if(valueGraduateWithin4YearsAsianPercent != null && valueGraduateWithin4YearsAsianPercent !== '')
		vals['graduateWithin4YearsAsianPercent'] = valueGraduateWithin4YearsAsianPercent;

	var valueGraduateWithin4YearsBlackPercent = $formValues.find('.valueGraduateWithin4YearsBlackPercent').val();
	if(valueGraduateWithin4YearsBlackPercent != null && valueGraduateWithin4YearsBlackPercent !== '')
		vals['graduateWithin4YearsBlackPercent'] = valueGraduateWithin4YearsBlackPercent;

	var valueGraduateWithin4YearsLatinxPercent = $formValues.find('.valueGraduateWithin4YearsLatinxPercent').val();
	if(valueGraduateWithin4YearsLatinxPercent != null && valueGraduateWithin4YearsLatinxPercent !== '')
		vals['graduateWithin4YearsLatinxPercent'] = valueGraduateWithin4YearsLatinxPercent;

	var valueGraduateWithin4YearsMultiRacialPercent = $formValues.find('.valueGraduateWithin4YearsMultiRacialPercent').val();
	if(valueGraduateWithin4YearsMultiRacialPercent != null && valueGraduateWithin4YearsMultiRacialPercent !== '')
		vals['graduateWithin4YearsMultiRacialPercent'] = valueGraduateWithin4YearsMultiRacialPercent;

	var valueGraduateWithin4YearsPacificIslanderPercent = $formValues.find('.valueGraduateWithin4YearsPacificIslanderPercent').val();
	if(valueGraduateWithin4YearsPacificIslanderPercent != null && valueGraduateWithin4YearsPacificIslanderPercent !== '')
		vals['graduateWithin4YearsPacificIslanderPercent'] = valueGraduateWithin4YearsPacificIslanderPercent;

	var valueGraduateWithin4YearsWhitePercent = $formValues.find('.valueGraduateWithin4YearsWhitePercent').val();
	if(valueGraduateWithin4YearsWhitePercent != null && valueGraduateWithin4YearsWhitePercent !== '')
		vals['graduateWithin4YearsWhitePercent'] = valueGraduateWithin4YearsWhitePercent;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

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
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueReportCardStartYear = $formValues.find('.valueReportCardStartYear').val();
	var removeReportCardStartYear = $formValues.find('.removeReportCardStartYear').val() === 'true';
	var setReportCardStartYear = removeReportCardStartYear ? null : $formValues.find('.setReportCardStartYear').val();
	var addReportCardStartYear = $formValues.find('.addReportCardStartYear').val();
	if(removeReportCardStartYear || setReportCardStartYear != null && setReportCardStartYear !== '')
		vals['setReportCardStartYear'] = setReportCardStartYear;
	if(addReportCardStartYear != null && addReportCardStartYear !== '')
		vals['addReportCardStartYear'] = addReportCardStartYear;
	var removeReportCardStartYear = $formValues.find('.removeReportCardStartYear').val();
	if(removeReportCardStartYear != null && removeReportCardStartYear !== '')
		vals['removeReportCardStartYear'] = removeReportCardStartYear;

	var valueReportCardEndYear = $formValues.find('.valueReportCardEndYear').val();
	var removeReportCardEndYear = $formValues.find('.removeReportCardEndYear').val() === 'true';
	var setReportCardEndYear = removeReportCardEndYear ? null : $formValues.find('.setReportCardEndYear').val();
	var addReportCardEndYear = $formValues.find('.addReportCardEndYear').val();
	if(removeReportCardEndYear || setReportCardEndYear != null && setReportCardEndYear !== '')
		vals['setReportCardEndYear'] = setReportCardEndYear;
	if(addReportCardEndYear != null && addReportCardEndYear !== '')
		vals['addReportCardEndYear'] = addReportCardEndYear;
	var removeReportCardEndYear = $formValues.find('.removeReportCardEndYear').val();
	if(removeReportCardEndYear != null && removeReportCardEndYear !== '')
		vals['removeReportCardEndYear'] = removeReportCardEndYear;

	var valueAgencyKey = $formValues.find('input.valueAgencyKey:checked').val();
	if(valueAgencyKey != null && valueAgencyKey !== '')
		vals['setAgencyKey'] = valueAgencyKey;

	var valuePupilsIndigenousMale = $formValues.find('.valuePupilsIndigenousMale').val();
	var removePupilsIndigenousMale = $formValues.find('.removePupilsIndigenousMale').val() === 'true';
	var setPupilsIndigenousMale = removePupilsIndigenousMale ? null : $formValues.find('.setPupilsIndigenousMale').val();
	var addPupilsIndigenousMale = $formValues.find('.addPupilsIndigenousMale').val();
	if(removePupilsIndigenousMale || setPupilsIndigenousMale != null && setPupilsIndigenousMale !== '')
		vals['setPupilsIndigenousMale'] = setPupilsIndigenousMale;
	if(addPupilsIndigenousMale != null && addPupilsIndigenousMale !== '')
		vals['addPupilsIndigenousMale'] = addPupilsIndigenousMale;
	var removePupilsIndigenousMale = $formValues.find('.removePupilsIndigenousMale').val();
	if(removePupilsIndigenousMale != null && removePupilsIndigenousMale !== '')
		vals['removePupilsIndigenousMale'] = removePupilsIndigenousMale;

	var valuePupilsIndigenousFemale = $formValues.find('.valuePupilsIndigenousFemale').val();
	var removePupilsIndigenousFemale = $formValues.find('.removePupilsIndigenousFemale').val() === 'true';
	var setPupilsIndigenousFemale = removePupilsIndigenousFemale ? null : $formValues.find('.setPupilsIndigenousFemale').val();
	var addPupilsIndigenousFemale = $formValues.find('.addPupilsIndigenousFemale').val();
	if(removePupilsIndigenousFemale || setPupilsIndigenousFemale != null && setPupilsIndigenousFemale !== '')
		vals['setPupilsIndigenousFemale'] = setPupilsIndigenousFemale;
	if(addPupilsIndigenousFemale != null && addPupilsIndigenousFemale !== '')
		vals['addPupilsIndigenousFemale'] = addPupilsIndigenousFemale;
	var removePupilsIndigenousFemale = $formValues.find('.removePupilsIndigenousFemale').val();
	if(removePupilsIndigenousFemale != null && removePupilsIndigenousFemale !== '')
		vals['removePupilsIndigenousFemale'] = removePupilsIndigenousFemale;

	var valuePupilsIndigenousTotal = $formValues.find('.valuePupilsIndigenousTotal').val();
	var removePupilsIndigenousTotal = $formValues.find('.removePupilsIndigenousTotal').val() === 'true';
	var setPupilsIndigenousTotal = removePupilsIndigenousTotal ? null : $formValues.find('.setPupilsIndigenousTotal').val();
	var addPupilsIndigenousTotal = $formValues.find('.addPupilsIndigenousTotal').val();
	if(removePupilsIndigenousTotal || setPupilsIndigenousTotal != null && setPupilsIndigenousTotal !== '')
		vals['setPupilsIndigenousTotal'] = setPupilsIndigenousTotal;
	if(addPupilsIndigenousTotal != null && addPupilsIndigenousTotal !== '')
		vals['addPupilsIndigenousTotal'] = addPupilsIndigenousTotal;
	var removePupilsIndigenousTotal = $formValues.find('.removePupilsIndigenousTotal').val();
	if(removePupilsIndigenousTotal != null && removePupilsIndigenousTotal !== '')
		vals['removePupilsIndigenousTotal'] = removePupilsIndigenousTotal;

	var valuePupilsIndigenousPercent = $formValues.find('.valuePupilsIndigenousPercent').val();
	var removePupilsIndigenousPercent = $formValues.find('.removePupilsIndigenousPercent').val() === 'true';
	var setPupilsIndigenousPercent = removePupilsIndigenousPercent ? null : $formValues.find('.setPupilsIndigenousPercent').val();
	var addPupilsIndigenousPercent = $formValues.find('.addPupilsIndigenousPercent').val();
	if(removePupilsIndigenousPercent || setPupilsIndigenousPercent != null && setPupilsIndigenousPercent !== '')
		vals['setPupilsIndigenousPercent'] = setPupilsIndigenousPercent;
	if(addPupilsIndigenousPercent != null && addPupilsIndigenousPercent !== '')
		vals['addPupilsIndigenousPercent'] = addPupilsIndigenousPercent;
	var removePupilsIndigenousPercent = $formValues.find('.removePupilsIndigenousPercent').val();
	if(removePupilsIndigenousPercent != null && removePupilsIndigenousPercent !== '')
		vals['removePupilsIndigenousPercent'] = removePupilsIndigenousPercent;

	var valuePupilsAsianMale = $formValues.find('.valuePupilsAsianMale').val();
	var removePupilsAsianMale = $formValues.find('.removePupilsAsianMale').val() === 'true';
	var setPupilsAsianMale = removePupilsAsianMale ? null : $formValues.find('.setPupilsAsianMale').val();
	var addPupilsAsianMale = $formValues.find('.addPupilsAsianMale').val();
	if(removePupilsAsianMale || setPupilsAsianMale != null && setPupilsAsianMale !== '')
		vals['setPupilsAsianMale'] = setPupilsAsianMale;
	if(addPupilsAsianMale != null && addPupilsAsianMale !== '')
		vals['addPupilsAsianMale'] = addPupilsAsianMale;
	var removePupilsAsianMale = $formValues.find('.removePupilsAsianMale').val();
	if(removePupilsAsianMale != null && removePupilsAsianMale !== '')
		vals['removePupilsAsianMale'] = removePupilsAsianMale;

	var valuePupilsAsianFemale = $formValues.find('.valuePupilsAsianFemale').val();
	var removePupilsAsianFemale = $formValues.find('.removePupilsAsianFemale').val() === 'true';
	var setPupilsAsianFemale = removePupilsAsianFemale ? null : $formValues.find('.setPupilsAsianFemale').val();
	var addPupilsAsianFemale = $formValues.find('.addPupilsAsianFemale').val();
	if(removePupilsAsianFemale || setPupilsAsianFemale != null && setPupilsAsianFemale !== '')
		vals['setPupilsAsianFemale'] = setPupilsAsianFemale;
	if(addPupilsAsianFemale != null && addPupilsAsianFemale !== '')
		vals['addPupilsAsianFemale'] = addPupilsAsianFemale;
	var removePupilsAsianFemale = $formValues.find('.removePupilsAsianFemale').val();
	if(removePupilsAsianFemale != null && removePupilsAsianFemale !== '')
		vals['removePupilsAsianFemale'] = removePupilsAsianFemale;

	var valuePupilsAsianTotal = $formValues.find('.valuePupilsAsianTotal').val();
	var removePupilsAsianTotal = $formValues.find('.removePupilsAsianTotal').val() === 'true';
	var setPupilsAsianTotal = removePupilsAsianTotal ? null : $formValues.find('.setPupilsAsianTotal').val();
	var addPupilsAsianTotal = $formValues.find('.addPupilsAsianTotal').val();
	if(removePupilsAsianTotal || setPupilsAsianTotal != null && setPupilsAsianTotal !== '')
		vals['setPupilsAsianTotal'] = setPupilsAsianTotal;
	if(addPupilsAsianTotal != null && addPupilsAsianTotal !== '')
		vals['addPupilsAsianTotal'] = addPupilsAsianTotal;
	var removePupilsAsianTotal = $formValues.find('.removePupilsAsianTotal').val();
	if(removePupilsAsianTotal != null && removePupilsAsianTotal !== '')
		vals['removePupilsAsianTotal'] = removePupilsAsianTotal;

	var valuePupilsAsianPercent = $formValues.find('.valuePupilsAsianPercent').val();
	var removePupilsAsianPercent = $formValues.find('.removePupilsAsianPercent').val() === 'true';
	var setPupilsAsianPercent = removePupilsAsianPercent ? null : $formValues.find('.setPupilsAsianPercent').val();
	var addPupilsAsianPercent = $formValues.find('.addPupilsAsianPercent').val();
	if(removePupilsAsianPercent || setPupilsAsianPercent != null && setPupilsAsianPercent !== '')
		vals['setPupilsAsianPercent'] = setPupilsAsianPercent;
	if(addPupilsAsianPercent != null && addPupilsAsianPercent !== '')
		vals['addPupilsAsianPercent'] = addPupilsAsianPercent;
	var removePupilsAsianPercent = $formValues.find('.removePupilsAsianPercent').val();
	if(removePupilsAsianPercent != null && removePupilsAsianPercent !== '')
		vals['removePupilsAsianPercent'] = removePupilsAsianPercent;

	var valuePupilsLatinxMale = $formValues.find('.valuePupilsLatinxMale').val();
	var removePupilsLatinxMale = $formValues.find('.removePupilsLatinxMale').val() === 'true';
	var setPupilsLatinxMale = removePupilsLatinxMale ? null : $formValues.find('.setPupilsLatinxMale').val();
	var addPupilsLatinxMale = $formValues.find('.addPupilsLatinxMale').val();
	if(removePupilsLatinxMale || setPupilsLatinxMale != null && setPupilsLatinxMale !== '')
		vals['setPupilsLatinxMale'] = setPupilsLatinxMale;
	if(addPupilsLatinxMale != null && addPupilsLatinxMale !== '')
		vals['addPupilsLatinxMale'] = addPupilsLatinxMale;
	var removePupilsLatinxMale = $formValues.find('.removePupilsLatinxMale').val();
	if(removePupilsLatinxMale != null && removePupilsLatinxMale !== '')
		vals['removePupilsLatinxMale'] = removePupilsLatinxMale;

	var valuePupilsLatinxFemale = $formValues.find('.valuePupilsLatinxFemale').val();
	var removePupilsLatinxFemale = $formValues.find('.removePupilsLatinxFemale').val() === 'true';
	var setPupilsLatinxFemale = removePupilsLatinxFemale ? null : $formValues.find('.setPupilsLatinxFemale').val();
	var addPupilsLatinxFemale = $formValues.find('.addPupilsLatinxFemale').val();
	if(removePupilsLatinxFemale || setPupilsLatinxFemale != null && setPupilsLatinxFemale !== '')
		vals['setPupilsLatinxFemale'] = setPupilsLatinxFemale;
	if(addPupilsLatinxFemale != null && addPupilsLatinxFemale !== '')
		vals['addPupilsLatinxFemale'] = addPupilsLatinxFemale;
	var removePupilsLatinxFemale = $formValues.find('.removePupilsLatinxFemale').val();
	if(removePupilsLatinxFemale != null && removePupilsLatinxFemale !== '')
		vals['removePupilsLatinxFemale'] = removePupilsLatinxFemale;

	var valuePupilsLatinxTotal = $formValues.find('.valuePupilsLatinxTotal').val();
	var removePupilsLatinxTotal = $formValues.find('.removePupilsLatinxTotal').val() === 'true';
	var setPupilsLatinxTotal = removePupilsLatinxTotal ? null : $formValues.find('.setPupilsLatinxTotal').val();
	var addPupilsLatinxTotal = $formValues.find('.addPupilsLatinxTotal').val();
	if(removePupilsLatinxTotal || setPupilsLatinxTotal != null && setPupilsLatinxTotal !== '')
		vals['setPupilsLatinxTotal'] = setPupilsLatinxTotal;
	if(addPupilsLatinxTotal != null && addPupilsLatinxTotal !== '')
		vals['addPupilsLatinxTotal'] = addPupilsLatinxTotal;
	var removePupilsLatinxTotal = $formValues.find('.removePupilsLatinxTotal').val();
	if(removePupilsLatinxTotal != null && removePupilsLatinxTotal !== '')
		vals['removePupilsLatinxTotal'] = removePupilsLatinxTotal;

	var valuePupilsLatinxPercent = $formValues.find('.valuePupilsLatinxPercent').val();
	var removePupilsLatinxPercent = $formValues.find('.removePupilsLatinxPercent').val() === 'true';
	var setPupilsLatinxPercent = removePupilsLatinxPercent ? null : $formValues.find('.setPupilsLatinxPercent').val();
	var addPupilsLatinxPercent = $formValues.find('.addPupilsLatinxPercent').val();
	if(removePupilsLatinxPercent || setPupilsLatinxPercent != null && setPupilsLatinxPercent !== '')
		vals['setPupilsLatinxPercent'] = setPupilsLatinxPercent;
	if(addPupilsLatinxPercent != null && addPupilsLatinxPercent !== '')
		vals['addPupilsLatinxPercent'] = addPupilsLatinxPercent;
	var removePupilsLatinxPercent = $formValues.find('.removePupilsLatinxPercent').val();
	if(removePupilsLatinxPercent != null && removePupilsLatinxPercent !== '')
		vals['removePupilsLatinxPercent'] = removePupilsLatinxPercent;

	var valuePupilsBlackMale = $formValues.find('.valuePupilsBlackMale').val();
	var removePupilsBlackMale = $formValues.find('.removePupilsBlackMale').val() === 'true';
	var setPupilsBlackMale = removePupilsBlackMale ? null : $formValues.find('.setPupilsBlackMale').val();
	var addPupilsBlackMale = $formValues.find('.addPupilsBlackMale').val();
	if(removePupilsBlackMale || setPupilsBlackMale != null && setPupilsBlackMale !== '')
		vals['setPupilsBlackMale'] = setPupilsBlackMale;
	if(addPupilsBlackMale != null && addPupilsBlackMale !== '')
		vals['addPupilsBlackMale'] = addPupilsBlackMale;
	var removePupilsBlackMale = $formValues.find('.removePupilsBlackMale').val();
	if(removePupilsBlackMale != null && removePupilsBlackMale !== '')
		vals['removePupilsBlackMale'] = removePupilsBlackMale;

	var valuePupilsBlackFemale = $formValues.find('.valuePupilsBlackFemale').val();
	var removePupilsBlackFemale = $formValues.find('.removePupilsBlackFemale').val() === 'true';
	var setPupilsBlackFemale = removePupilsBlackFemale ? null : $formValues.find('.setPupilsBlackFemale').val();
	var addPupilsBlackFemale = $formValues.find('.addPupilsBlackFemale').val();
	if(removePupilsBlackFemale || setPupilsBlackFemale != null && setPupilsBlackFemale !== '')
		vals['setPupilsBlackFemale'] = setPupilsBlackFemale;
	if(addPupilsBlackFemale != null && addPupilsBlackFemale !== '')
		vals['addPupilsBlackFemale'] = addPupilsBlackFemale;
	var removePupilsBlackFemale = $formValues.find('.removePupilsBlackFemale').val();
	if(removePupilsBlackFemale != null && removePupilsBlackFemale !== '')
		vals['removePupilsBlackFemale'] = removePupilsBlackFemale;

	var valuePupilsBlackTotal = $formValues.find('.valuePupilsBlackTotal').val();
	var removePupilsBlackTotal = $formValues.find('.removePupilsBlackTotal').val() === 'true';
	var setPupilsBlackTotal = removePupilsBlackTotal ? null : $formValues.find('.setPupilsBlackTotal').val();
	var addPupilsBlackTotal = $formValues.find('.addPupilsBlackTotal').val();
	if(removePupilsBlackTotal || setPupilsBlackTotal != null && setPupilsBlackTotal !== '')
		vals['setPupilsBlackTotal'] = setPupilsBlackTotal;
	if(addPupilsBlackTotal != null && addPupilsBlackTotal !== '')
		vals['addPupilsBlackTotal'] = addPupilsBlackTotal;
	var removePupilsBlackTotal = $formValues.find('.removePupilsBlackTotal').val();
	if(removePupilsBlackTotal != null && removePupilsBlackTotal !== '')
		vals['removePupilsBlackTotal'] = removePupilsBlackTotal;

	var valuePupilsBlackPercent = $formValues.find('.valuePupilsBlackPercent').val();
	var removePupilsBlackPercent = $formValues.find('.removePupilsBlackPercent').val() === 'true';
	var setPupilsBlackPercent = removePupilsBlackPercent ? null : $formValues.find('.setPupilsBlackPercent').val();
	var addPupilsBlackPercent = $formValues.find('.addPupilsBlackPercent').val();
	if(removePupilsBlackPercent || setPupilsBlackPercent != null && setPupilsBlackPercent !== '')
		vals['setPupilsBlackPercent'] = setPupilsBlackPercent;
	if(addPupilsBlackPercent != null && addPupilsBlackPercent !== '')
		vals['addPupilsBlackPercent'] = addPupilsBlackPercent;
	var removePupilsBlackPercent = $formValues.find('.removePupilsBlackPercent').val();
	if(removePupilsBlackPercent != null && removePupilsBlackPercent !== '')
		vals['removePupilsBlackPercent'] = removePupilsBlackPercent;

	var valuePupilsWhiteMale = $formValues.find('.valuePupilsWhiteMale').val();
	var removePupilsWhiteMale = $formValues.find('.removePupilsWhiteMale').val() === 'true';
	var setPupilsWhiteMale = removePupilsWhiteMale ? null : $formValues.find('.setPupilsWhiteMale').val();
	var addPupilsWhiteMale = $formValues.find('.addPupilsWhiteMale').val();
	if(removePupilsWhiteMale || setPupilsWhiteMale != null && setPupilsWhiteMale !== '')
		vals['setPupilsWhiteMale'] = setPupilsWhiteMale;
	if(addPupilsWhiteMale != null && addPupilsWhiteMale !== '')
		vals['addPupilsWhiteMale'] = addPupilsWhiteMale;
	var removePupilsWhiteMale = $formValues.find('.removePupilsWhiteMale').val();
	if(removePupilsWhiteMale != null && removePupilsWhiteMale !== '')
		vals['removePupilsWhiteMale'] = removePupilsWhiteMale;

	var valuePupilsWhiteFemale = $formValues.find('.valuePupilsWhiteFemale').val();
	var removePupilsWhiteFemale = $formValues.find('.removePupilsWhiteFemale').val() === 'true';
	var setPupilsWhiteFemale = removePupilsWhiteFemale ? null : $formValues.find('.setPupilsWhiteFemale').val();
	var addPupilsWhiteFemale = $formValues.find('.addPupilsWhiteFemale').val();
	if(removePupilsWhiteFemale || setPupilsWhiteFemale != null && setPupilsWhiteFemale !== '')
		vals['setPupilsWhiteFemale'] = setPupilsWhiteFemale;
	if(addPupilsWhiteFemale != null && addPupilsWhiteFemale !== '')
		vals['addPupilsWhiteFemale'] = addPupilsWhiteFemale;
	var removePupilsWhiteFemale = $formValues.find('.removePupilsWhiteFemale').val();
	if(removePupilsWhiteFemale != null && removePupilsWhiteFemale !== '')
		vals['removePupilsWhiteFemale'] = removePupilsWhiteFemale;

	var valuePupilsWhiteTotal = $formValues.find('.valuePupilsWhiteTotal').val();
	var removePupilsWhiteTotal = $formValues.find('.removePupilsWhiteTotal').val() === 'true';
	var setPupilsWhiteTotal = removePupilsWhiteTotal ? null : $formValues.find('.setPupilsWhiteTotal').val();
	var addPupilsWhiteTotal = $formValues.find('.addPupilsWhiteTotal').val();
	if(removePupilsWhiteTotal || setPupilsWhiteTotal != null && setPupilsWhiteTotal !== '')
		vals['setPupilsWhiteTotal'] = setPupilsWhiteTotal;
	if(addPupilsWhiteTotal != null && addPupilsWhiteTotal !== '')
		vals['addPupilsWhiteTotal'] = addPupilsWhiteTotal;
	var removePupilsWhiteTotal = $formValues.find('.removePupilsWhiteTotal').val();
	if(removePupilsWhiteTotal != null && removePupilsWhiteTotal !== '')
		vals['removePupilsWhiteTotal'] = removePupilsWhiteTotal;

	var valuePupilsWhitePercent = $formValues.find('.valuePupilsWhitePercent').val();
	var removePupilsWhitePercent = $formValues.find('.removePupilsWhitePercent').val() === 'true';
	var setPupilsWhitePercent = removePupilsWhitePercent ? null : $formValues.find('.setPupilsWhitePercent').val();
	var addPupilsWhitePercent = $formValues.find('.addPupilsWhitePercent').val();
	if(removePupilsWhitePercent || setPupilsWhitePercent != null && setPupilsWhitePercent !== '')
		vals['setPupilsWhitePercent'] = setPupilsWhitePercent;
	if(addPupilsWhitePercent != null && addPupilsWhitePercent !== '')
		vals['addPupilsWhitePercent'] = addPupilsWhitePercent;
	var removePupilsWhitePercent = $formValues.find('.removePupilsWhitePercent').val();
	if(removePupilsWhitePercent != null && removePupilsWhitePercent !== '')
		vals['removePupilsWhitePercent'] = removePupilsWhitePercent;

	var valuePupilsPacificIslanderMale = $formValues.find('.valuePupilsPacificIslanderMale').val();
	var removePupilsPacificIslanderMale = $formValues.find('.removePupilsPacificIslanderMale').val() === 'true';
	var setPupilsPacificIslanderMale = removePupilsPacificIslanderMale ? null : $formValues.find('.setPupilsPacificIslanderMale').val();
	var addPupilsPacificIslanderMale = $formValues.find('.addPupilsPacificIslanderMale').val();
	if(removePupilsPacificIslanderMale || setPupilsPacificIslanderMale != null && setPupilsPacificIslanderMale !== '')
		vals['setPupilsPacificIslanderMale'] = setPupilsPacificIslanderMale;
	if(addPupilsPacificIslanderMale != null && addPupilsPacificIslanderMale !== '')
		vals['addPupilsPacificIslanderMale'] = addPupilsPacificIslanderMale;
	var removePupilsPacificIslanderMale = $formValues.find('.removePupilsPacificIslanderMale').val();
	if(removePupilsPacificIslanderMale != null && removePupilsPacificIslanderMale !== '')
		vals['removePupilsPacificIslanderMale'] = removePupilsPacificIslanderMale;

	var valuePupilsPacificIslanderFemale = $formValues.find('.valuePupilsPacificIslanderFemale').val();
	var removePupilsPacificIslanderFemale = $formValues.find('.removePupilsPacificIslanderFemale').val() === 'true';
	var setPupilsPacificIslanderFemale = removePupilsPacificIslanderFemale ? null : $formValues.find('.setPupilsPacificIslanderFemale').val();
	var addPupilsPacificIslanderFemale = $formValues.find('.addPupilsPacificIslanderFemale').val();
	if(removePupilsPacificIslanderFemale || setPupilsPacificIslanderFemale != null && setPupilsPacificIslanderFemale !== '')
		vals['setPupilsPacificIslanderFemale'] = setPupilsPacificIslanderFemale;
	if(addPupilsPacificIslanderFemale != null && addPupilsPacificIslanderFemale !== '')
		vals['addPupilsPacificIslanderFemale'] = addPupilsPacificIslanderFemale;
	var removePupilsPacificIslanderFemale = $formValues.find('.removePupilsPacificIslanderFemale').val();
	if(removePupilsPacificIslanderFemale != null && removePupilsPacificIslanderFemale !== '')
		vals['removePupilsPacificIslanderFemale'] = removePupilsPacificIslanderFemale;

	var valuePupilsPacificIslanderTotal = $formValues.find('.valuePupilsPacificIslanderTotal').val();
	var removePupilsPacificIslanderTotal = $formValues.find('.removePupilsPacificIslanderTotal').val() === 'true';
	var setPupilsPacificIslanderTotal = removePupilsPacificIslanderTotal ? null : $formValues.find('.setPupilsPacificIslanderTotal').val();
	var addPupilsPacificIslanderTotal = $formValues.find('.addPupilsPacificIslanderTotal').val();
	if(removePupilsPacificIslanderTotal || setPupilsPacificIslanderTotal != null && setPupilsPacificIslanderTotal !== '')
		vals['setPupilsPacificIslanderTotal'] = setPupilsPacificIslanderTotal;
	if(addPupilsPacificIslanderTotal != null && addPupilsPacificIslanderTotal !== '')
		vals['addPupilsPacificIslanderTotal'] = addPupilsPacificIslanderTotal;
	var removePupilsPacificIslanderTotal = $formValues.find('.removePupilsPacificIslanderTotal').val();
	if(removePupilsPacificIslanderTotal != null && removePupilsPacificIslanderTotal !== '')
		vals['removePupilsPacificIslanderTotal'] = removePupilsPacificIslanderTotal;

	var valuePupilsPacificIslanderPercent = $formValues.find('.valuePupilsPacificIslanderPercent').val();
	var removePupilsPacificIslanderPercent = $formValues.find('.removePupilsPacificIslanderPercent').val() === 'true';
	var setPupilsPacificIslanderPercent = removePupilsPacificIslanderPercent ? null : $formValues.find('.setPupilsPacificIslanderPercent').val();
	var addPupilsPacificIslanderPercent = $formValues.find('.addPupilsPacificIslanderPercent').val();
	if(removePupilsPacificIslanderPercent || setPupilsPacificIslanderPercent != null && setPupilsPacificIslanderPercent !== '')
		vals['setPupilsPacificIslanderPercent'] = setPupilsPacificIslanderPercent;
	if(addPupilsPacificIslanderPercent != null && addPupilsPacificIslanderPercent !== '')
		vals['addPupilsPacificIslanderPercent'] = addPupilsPacificIslanderPercent;
	var removePupilsPacificIslanderPercent = $formValues.find('.removePupilsPacificIslanderPercent').val();
	if(removePupilsPacificIslanderPercent != null && removePupilsPacificIslanderPercent !== '')
		vals['removePupilsPacificIslanderPercent'] = removePupilsPacificIslanderPercent;

	var valuePupilsMultiRacialMale = $formValues.find('.valuePupilsMultiRacialMale').val();
	var removePupilsMultiRacialMale = $formValues.find('.removePupilsMultiRacialMale').val() === 'true';
	var setPupilsMultiRacialMale = removePupilsMultiRacialMale ? null : $formValues.find('.setPupilsMultiRacialMale').val();
	var addPupilsMultiRacialMale = $formValues.find('.addPupilsMultiRacialMale').val();
	if(removePupilsMultiRacialMale || setPupilsMultiRacialMale != null && setPupilsMultiRacialMale !== '')
		vals['setPupilsMultiRacialMale'] = setPupilsMultiRacialMale;
	if(addPupilsMultiRacialMale != null && addPupilsMultiRacialMale !== '')
		vals['addPupilsMultiRacialMale'] = addPupilsMultiRacialMale;
	var removePupilsMultiRacialMale = $formValues.find('.removePupilsMultiRacialMale').val();
	if(removePupilsMultiRacialMale != null && removePupilsMultiRacialMale !== '')
		vals['removePupilsMultiRacialMale'] = removePupilsMultiRacialMale;

	var valuePupilsMultiRacialFemale = $formValues.find('.valuePupilsMultiRacialFemale').val();
	var removePupilsMultiRacialFemale = $formValues.find('.removePupilsMultiRacialFemale').val() === 'true';
	var setPupilsMultiRacialFemale = removePupilsMultiRacialFemale ? null : $formValues.find('.setPupilsMultiRacialFemale').val();
	var addPupilsMultiRacialFemale = $formValues.find('.addPupilsMultiRacialFemale').val();
	if(removePupilsMultiRacialFemale || setPupilsMultiRacialFemale != null && setPupilsMultiRacialFemale !== '')
		vals['setPupilsMultiRacialFemale'] = setPupilsMultiRacialFemale;
	if(addPupilsMultiRacialFemale != null && addPupilsMultiRacialFemale !== '')
		vals['addPupilsMultiRacialFemale'] = addPupilsMultiRacialFemale;
	var removePupilsMultiRacialFemale = $formValues.find('.removePupilsMultiRacialFemale').val();
	if(removePupilsMultiRacialFemale != null && removePupilsMultiRacialFemale !== '')
		vals['removePupilsMultiRacialFemale'] = removePupilsMultiRacialFemale;

	var valuePupilsMultiRacialTotal = $formValues.find('.valuePupilsMultiRacialTotal').val();
	var removePupilsMultiRacialTotal = $formValues.find('.removePupilsMultiRacialTotal').val() === 'true';
	var setPupilsMultiRacialTotal = removePupilsMultiRacialTotal ? null : $formValues.find('.setPupilsMultiRacialTotal').val();
	var addPupilsMultiRacialTotal = $formValues.find('.addPupilsMultiRacialTotal').val();
	if(removePupilsMultiRacialTotal || setPupilsMultiRacialTotal != null && setPupilsMultiRacialTotal !== '')
		vals['setPupilsMultiRacialTotal'] = setPupilsMultiRacialTotal;
	if(addPupilsMultiRacialTotal != null && addPupilsMultiRacialTotal !== '')
		vals['addPupilsMultiRacialTotal'] = addPupilsMultiRacialTotal;
	var removePupilsMultiRacialTotal = $formValues.find('.removePupilsMultiRacialTotal').val();
	if(removePupilsMultiRacialTotal != null && removePupilsMultiRacialTotal !== '')
		vals['removePupilsMultiRacialTotal'] = removePupilsMultiRacialTotal;

	var valuePupilsMultiRacialPercent = $formValues.find('.valuePupilsMultiRacialPercent').val();
	var removePupilsMultiRacialPercent = $formValues.find('.removePupilsMultiRacialPercent').val() === 'true';
	var setPupilsMultiRacialPercent = removePupilsMultiRacialPercent ? null : $formValues.find('.setPupilsMultiRacialPercent').val();
	var addPupilsMultiRacialPercent = $formValues.find('.addPupilsMultiRacialPercent').val();
	if(removePupilsMultiRacialPercent || setPupilsMultiRacialPercent != null && setPupilsMultiRacialPercent !== '')
		vals['setPupilsMultiRacialPercent'] = setPupilsMultiRacialPercent;
	if(addPupilsMultiRacialPercent != null && addPupilsMultiRacialPercent !== '')
		vals['addPupilsMultiRacialPercent'] = addPupilsMultiRacialPercent;
	var removePupilsMultiRacialPercent = $formValues.find('.removePupilsMultiRacialPercent').val();
	if(removePupilsMultiRacialPercent != null && removePupilsMultiRacialPercent !== '')
		vals['removePupilsMultiRacialPercent'] = removePupilsMultiRacialPercent;

	var valuePupilsTotal = $formValues.find('.valuePupilsTotal').val();
	var removePupilsTotal = $formValues.find('.removePupilsTotal').val() === 'true';
	var setPupilsTotal = removePupilsTotal ? null : $formValues.find('.setPupilsTotal').val();
	var addPupilsTotal = $formValues.find('.addPupilsTotal').val();
	if(removePupilsTotal || setPupilsTotal != null && setPupilsTotal !== '')
		vals['setPupilsTotal'] = setPupilsTotal;
	if(addPupilsTotal != null && addPupilsTotal !== '')
		vals['addPupilsTotal'] = addPupilsTotal;
	var removePupilsTotal = $formValues.find('.removePupilsTotal').val();
	if(removePupilsTotal != null && removePupilsTotal !== '')
		vals['removePupilsTotal'] = removePupilsTotal;

	var valueTeachersMale = $formValues.find('.valueTeachersMale').val();
	var removeTeachersMale = $formValues.find('.removeTeachersMale').val() === 'true';
	var setTeachersMale = removeTeachersMale ? null : $formValues.find('.setTeachersMale').val();
	var addTeachersMale = $formValues.find('.addTeachersMale').val();
	if(removeTeachersMale || setTeachersMale != null && setTeachersMale !== '')
		vals['setTeachersMale'] = setTeachersMale;
	if(addTeachersMale != null && addTeachersMale !== '')
		vals['addTeachersMale'] = addTeachersMale;
	var removeTeachersMale = $formValues.find('.removeTeachersMale').val();
	if(removeTeachersMale != null && removeTeachersMale !== '')
		vals['removeTeachersMale'] = removeTeachersMale;

	var valueTeachersFemale = $formValues.find('.valueTeachersFemale').val();
	var removeTeachersFemale = $formValues.find('.removeTeachersFemale').val() === 'true';
	var setTeachersFemale = removeTeachersFemale ? null : $formValues.find('.setTeachersFemale').val();
	var addTeachersFemale = $formValues.find('.addTeachersFemale').val();
	if(removeTeachersFemale || setTeachersFemale != null && setTeachersFemale !== '')
		vals['setTeachersFemale'] = setTeachersFemale;
	if(addTeachersFemale != null && addTeachersFemale !== '')
		vals['addTeachersFemale'] = addTeachersFemale;
	var removeTeachersFemale = $formValues.find('.removeTeachersFemale').val();
	if(removeTeachersFemale != null && removeTeachersFemale !== '')
		vals['removeTeachersFemale'] = removeTeachersFemale;

	var valueTeachersTotal = $formValues.find('.valueTeachersTotal').val();
	var removeTeachersTotal = $formValues.find('.removeTeachersTotal').val() === 'true';
	var setTeachersTotal = removeTeachersTotal ? null : $formValues.find('.setTeachersTotal').val();
	var addTeachersTotal = $formValues.find('.addTeachersTotal').val();
	if(removeTeachersTotal || setTeachersTotal != null && setTeachersTotal !== '')
		vals['setTeachersTotal'] = setTeachersTotal;
	if(addTeachersTotal != null && addTeachersTotal !== '')
		vals['addTeachersTotal'] = addTeachersTotal;
	var removeTeachersTotal = $formValues.find('.removeTeachersTotal').val();
	if(removeTeachersTotal != null && removeTeachersTotal !== '')
		vals['removeTeachersTotal'] = removeTeachersTotal;

	var valueTeachersWhiteTotal = $formValues.find('.valueTeachersWhiteTotal').val();
	var removeTeachersWhiteTotal = $formValues.find('.removeTeachersWhiteTotal').val() === 'true';
	var setTeachersWhiteTotal = removeTeachersWhiteTotal ? null : $formValues.find('.setTeachersWhiteTotal').val();
	var addTeachersWhiteTotal = $formValues.find('.addTeachersWhiteTotal').val();
	if(removeTeachersWhiteTotal || setTeachersWhiteTotal != null && setTeachersWhiteTotal !== '')
		vals['setTeachersWhiteTotal'] = setTeachersWhiteTotal;
	if(addTeachersWhiteTotal != null && addTeachersWhiteTotal !== '')
		vals['addTeachersWhiteTotal'] = addTeachersWhiteTotal;
	var removeTeachersWhiteTotal = $formValues.find('.removeTeachersWhiteTotal').val();
	if(removeTeachersWhiteTotal != null && removeTeachersWhiteTotal !== '')
		vals['removeTeachersWhiteTotal'] = removeTeachersWhiteTotal;

	var valueTeachersWhitePercent = $formValues.find('.valueTeachersWhitePercent').val();
	var removeTeachersWhitePercent = $formValues.find('.removeTeachersWhitePercent').val() === 'true';
	var setTeachersWhitePercent = removeTeachersWhitePercent ? null : $formValues.find('.setTeachersWhitePercent').val();
	var addTeachersWhitePercent = $formValues.find('.addTeachersWhitePercent').val();
	if(removeTeachersWhitePercent || setTeachersWhitePercent != null && setTeachersWhitePercent !== '')
		vals['setTeachersWhitePercent'] = setTeachersWhitePercent;
	if(addTeachersWhitePercent != null && addTeachersWhitePercent !== '')
		vals['addTeachersWhitePercent'] = addTeachersWhitePercent;
	var removeTeachersWhitePercent = $formValues.find('.removeTeachersWhitePercent').val();
	if(removeTeachersWhitePercent != null && removeTeachersWhitePercent !== '')
		vals['removeTeachersWhitePercent'] = removeTeachersWhitePercent;

	var valueTeachersBlackTotal = $formValues.find('.valueTeachersBlackTotal').val();
	var removeTeachersBlackTotal = $formValues.find('.removeTeachersBlackTotal').val() === 'true';
	var setTeachersBlackTotal = removeTeachersBlackTotal ? null : $formValues.find('.setTeachersBlackTotal').val();
	var addTeachersBlackTotal = $formValues.find('.addTeachersBlackTotal').val();
	if(removeTeachersBlackTotal || setTeachersBlackTotal != null && setTeachersBlackTotal !== '')
		vals['setTeachersBlackTotal'] = setTeachersBlackTotal;
	if(addTeachersBlackTotal != null && addTeachersBlackTotal !== '')
		vals['addTeachersBlackTotal'] = addTeachersBlackTotal;
	var removeTeachersBlackTotal = $formValues.find('.removeTeachersBlackTotal').val();
	if(removeTeachersBlackTotal != null && removeTeachersBlackTotal !== '')
		vals['removeTeachersBlackTotal'] = removeTeachersBlackTotal;

	var valueTeachersBlackPercent = $formValues.find('.valueTeachersBlackPercent').val();
	var removeTeachersBlackPercent = $formValues.find('.removeTeachersBlackPercent').val() === 'true';
	var setTeachersBlackPercent = removeTeachersBlackPercent ? null : $formValues.find('.setTeachersBlackPercent').val();
	var addTeachersBlackPercent = $formValues.find('.addTeachersBlackPercent').val();
	if(removeTeachersBlackPercent || setTeachersBlackPercent != null && setTeachersBlackPercent !== '')
		vals['setTeachersBlackPercent'] = setTeachersBlackPercent;
	if(addTeachersBlackPercent != null && addTeachersBlackPercent !== '')
		vals['addTeachersBlackPercent'] = addTeachersBlackPercent;
	var removeTeachersBlackPercent = $formValues.find('.removeTeachersBlackPercent').val();
	if(removeTeachersBlackPercent != null && removeTeachersBlackPercent !== '')
		vals['removeTeachersBlackPercent'] = removeTeachersBlackPercent;

	var valueTeachersOtherTotal = $formValues.find('.valueTeachersOtherTotal').val();
	var removeTeachersOtherTotal = $formValues.find('.removeTeachersOtherTotal').val() === 'true';
	var setTeachersOtherTotal = removeTeachersOtherTotal ? null : $formValues.find('.setTeachersOtherTotal').val();
	var addTeachersOtherTotal = $formValues.find('.addTeachersOtherTotal').val();
	if(removeTeachersOtherTotal || setTeachersOtherTotal != null && setTeachersOtherTotal !== '')
		vals['setTeachersOtherTotal'] = setTeachersOtherTotal;
	if(addTeachersOtherTotal != null && addTeachersOtherTotal !== '')
		vals['addTeachersOtherTotal'] = addTeachersOtherTotal;
	var removeTeachersOtherTotal = $formValues.find('.removeTeachersOtherTotal').val();
	if(removeTeachersOtherTotal != null && removeTeachersOtherTotal !== '')
		vals['removeTeachersOtherTotal'] = removeTeachersOtherTotal;

	var valueTeachersOtherPercent = $formValues.find('.valueTeachersOtherPercent').val();
	var removeTeachersOtherPercent = $formValues.find('.removeTeachersOtherPercent').val() === 'true';
	var setTeachersOtherPercent = removeTeachersOtherPercent ? null : $formValues.find('.setTeachersOtherPercent').val();
	var addTeachersOtherPercent = $formValues.find('.addTeachersOtherPercent').val();
	if(removeTeachersOtherPercent || setTeachersOtherPercent != null && setTeachersOtherPercent !== '')
		vals['setTeachersOtherPercent'] = setTeachersOtherPercent;
	if(addTeachersOtherPercent != null && addTeachersOtherPercent !== '')
		vals['addTeachersOtherPercent'] = addTeachersOtherPercent;
	var removeTeachersOtherPercent = $formValues.find('.removeTeachersOtherPercent').val();
	if(removeTeachersOtherPercent != null && removeTeachersOtherPercent !== '')
		vals['removeTeachersOtherPercent'] = removeTeachersOtherPercent;

	var valueDelinquentComplaintsTotal = $formValues.find('.valueDelinquentComplaintsTotal').val();
	var removeDelinquentComplaintsTotal = $formValues.find('.removeDelinquentComplaintsTotal').val() === 'true';
	var setDelinquentComplaintsTotal = removeDelinquentComplaintsTotal ? null : $formValues.find('.setDelinquentComplaintsTotal').val();
	var addDelinquentComplaintsTotal = $formValues.find('.addDelinquentComplaintsTotal').val();
	if(removeDelinquentComplaintsTotal || setDelinquentComplaintsTotal != null && setDelinquentComplaintsTotal !== '')
		vals['setDelinquentComplaintsTotal'] = setDelinquentComplaintsTotal;
	if(addDelinquentComplaintsTotal != null && addDelinquentComplaintsTotal !== '')
		vals['addDelinquentComplaintsTotal'] = addDelinquentComplaintsTotal;
	var removeDelinquentComplaintsTotal = $formValues.find('.removeDelinquentComplaintsTotal').val();
	if(removeDelinquentComplaintsTotal != null && removeDelinquentComplaintsTotal !== '')
		vals['removeDelinquentComplaintsTotal'] = removeDelinquentComplaintsTotal;

	var valueDelinquentComplaintsAtSchool = $formValues.find('.valueDelinquentComplaintsAtSchool').val();
	var removeDelinquentComplaintsAtSchool = $formValues.find('.removeDelinquentComplaintsAtSchool').val() === 'true';
	var setDelinquentComplaintsAtSchool = removeDelinquentComplaintsAtSchool ? null : $formValues.find('.setDelinquentComplaintsAtSchool').val();
	var addDelinquentComplaintsAtSchool = $formValues.find('.addDelinquentComplaintsAtSchool').val();
	if(removeDelinquentComplaintsAtSchool || setDelinquentComplaintsAtSchool != null && setDelinquentComplaintsAtSchool !== '')
		vals['setDelinquentComplaintsAtSchool'] = setDelinquentComplaintsAtSchool;
	if(addDelinquentComplaintsAtSchool != null && addDelinquentComplaintsAtSchool !== '')
		vals['addDelinquentComplaintsAtSchool'] = addDelinquentComplaintsAtSchool;
	var removeDelinquentComplaintsAtSchool = $formValues.find('.removeDelinquentComplaintsAtSchool').val();
	if(removeDelinquentComplaintsAtSchool != null && removeDelinquentComplaintsAtSchool !== '')
		vals['removeDelinquentComplaintsAtSchool'] = removeDelinquentComplaintsAtSchool;

	var valueDelinquentComplaintsAtSchoolPercent = $formValues.find('.valueDelinquentComplaintsAtSchoolPercent').val();
	var removeDelinquentComplaintsAtSchoolPercent = $formValues.find('.removeDelinquentComplaintsAtSchoolPercent').val() === 'true';
	var setDelinquentComplaintsAtSchoolPercent = removeDelinquentComplaintsAtSchoolPercent ? null : $formValues.find('.setDelinquentComplaintsAtSchoolPercent').val();
	var addDelinquentComplaintsAtSchoolPercent = $formValues.find('.addDelinquentComplaintsAtSchoolPercent').val();
	if(removeDelinquentComplaintsAtSchoolPercent || setDelinquentComplaintsAtSchoolPercent != null && setDelinquentComplaintsAtSchoolPercent !== '')
		vals['setDelinquentComplaintsAtSchoolPercent'] = setDelinquentComplaintsAtSchoolPercent;
	if(addDelinquentComplaintsAtSchoolPercent != null && addDelinquentComplaintsAtSchoolPercent !== '')
		vals['addDelinquentComplaintsAtSchoolPercent'] = addDelinquentComplaintsAtSchoolPercent;
	var removeDelinquentComplaintsAtSchoolPercent = $formValues.find('.removeDelinquentComplaintsAtSchoolPercent').val();
	if(removeDelinquentComplaintsAtSchoolPercent != null && removeDelinquentComplaintsAtSchoolPercent !== '')
		vals['removeDelinquentComplaintsAtSchoolPercent'] = removeDelinquentComplaintsAtSchoolPercent;

	var valueDelinquentComplaintsAsian = $formValues.find('.valueDelinquentComplaintsAsian').val();
	var removeDelinquentComplaintsAsian = $formValues.find('.removeDelinquentComplaintsAsian').val() === 'true';
	var setDelinquentComplaintsAsian = removeDelinquentComplaintsAsian ? null : $formValues.find('.setDelinquentComplaintsAsian').val();
	var addDelinquentComplaintsAsian = $formValues.find('.addDelinquentComplaintsAsian').val();
	if(removeDelinquentComplaintsAsian || setDelinquentComplaintsAsian != null && setDelinquentComplaintsAsian !== '')
		vals['setDelinquentComplaintsAsian'] = setDelinquentComplaintsAsian;
	if(addDelinquentComplaintsAsian != null && addDelinquentComplaintsAsian !== '')
		vals['addDelinquentComplaintsAsian'] = addDelinquentComplaintsAsian;
	var removeDelinquentComplaintsAsian = $formValues.find('.removeDelinquentComplaintsAsian').val();
	if(removeDelinquentComplaintsAsian != null && removeDelinquentComplaintsAsian !== '')
		vals['removeDelinquentComplaintsAsian'] = removeDelinquentComplaintsAsian;

	var valueDelinquentComplaintsAsianPercent = $formValues.find('.valueDelinquentComplaintsAsianPercent').val();
	var removeDelinquentComplaintsAsianPercent = $formValues.find('.removeDelinquentComplaintsAsianPercent').val() === 'true';
	var setDelinquentComplaintsAsianPercent = removeDelinquentComplaintsAsianPercent ? null : $formValues.find('.setDelinquentComplaintsAsianPercent').val();
	var addDelinquentComplaintsAsianPercent = $formValues.find('.addDelinquentComplaintsAsianPercent').val();
	if(removeDelinquentComplaintsAsianPercent || setDelinquentComplaintsAsianPercent != null && setDelinquentComplaintsAsianPercent !== '')
		vals['setDelinquentComplaintsAsianPercent'] = setDelinquentComplaintsAsianPercent;
	if(addDelinquentComplaintsAsianPercent != null && addDelinquentComplaintsAsianPercent !== '')
		vals['addDelinquentComplaintsAsianPercent'] = addDelinquentComplaintsAsianPercent;
	var removeDelinquentComplaintsAsianPercent = $formValues.find('.removeDelinquentComplaintsAsianPercent').val();
	if(removeDelinquentComplaintsAsianPercent != null && removeDelinquentComplaintsAsianPercent !== '')
		vals['removeDelinquentComplaintsAsianPercent'] = removeDelinquentComplaintsAsianPercent;

	var valueDelinquentComplaintsBlack = $formValues.find('.valueDelinquentComplaintsBlack').val();
	var removeDelinquentComplaintsBlack = $formValues.find('.removeDelinquentComplaintsBlack').val() === 'true';
	var setDelinquentComplaintsBlack = removeDelinquentComplaintsBlack ? null : $formValues.find('.setDelinquentComplaintsBlack').val();
	var addDelinquentComplaintsBlack = $formValues.find('.addDelinquentComplaintsBlack').val();
	if(removeDelinquentComplaintsBlack || setDelinquentComplaintsBlack != null && setDelinquentComplaintsBlack !== '')
		vals['setDelinquentComplaintsBlack'] = setDelinquentComplaintsBlack;
	if(addDelinquentComplaintsBlack != null && addDelinquentComplaintsBlack !== '')
		vals['addDelinquentComplaintsBlack'] = addDelinquentComplaintsBlack;
	var removeDelinquentComplaintsBlack = $formValues.find('.removeDelinquentComplaintsBlack').val();
	if(removeDelinquentComplaintsBlack != null && removeDelinquentComplaintsBlack !== '')
		vals['removeDelinquentComplaintsBlack'] = removeDelinquentComplaintsBlack;

	var valueDelinquentComplaintsBlackPercent = $formValues.find('.valueDelinquentComplaintsBlackPercent').val();
	var removeDelinquentComplaintsBlackPercent = $formValues.find('.removeDelinquentComplaintsBlackPercent').val() === 'true';
	var setDelinquentComplaintsBlackPercent = removeDelinquentComplaintsBlackPercent ? null : $formValues.find('.setDelinquentComplaintsBlackPercent').val();
	var addDelinquentComplaintsBlackPercent = $formValues.find('.addDelinquentComplaintsBlackPercent').val();
	if(removeDelinquentComplaintsBlackPercent || setDelinquentComplaintsBlackPercent != null && setDelinquentComplaintsBlackPercent !== '')
		vals['setDelinquentComplaintsBlackPercent'] = setDelinquentComplaintsBlackPercent;
	if(addDelinquentComplaintsBlackPercent != null && addDelinquentComplaintsBlackPercent !== '')
		vals['addDelinquentComplaintsBlackPercent'] = addDelinquentComplaintsBlackPercent;
	var removeDelinquentComplaintsBlackPercent = $formValues.find('.removeDelinquentComplaintsBlackPercent').val();
	if(removeDelinquentComplaintsBlackPercent != null && removeDelinquentComplaintsBlackPercent !== '')
		vals['removeDelinquentComplaintsBlackPercent'] = removeDelinquentComplaintsBlackPercent;

	var valueDelinquentComplaintsLatinx = $formValues.find('.valueDelinquentComplaintsLatinx').val();
	var removeDelinquentComplaintsLatinx = $formValues.find('.removeDelinquentComplaintsLatinx').val() === 'true';
	var setDelinquentComplaintsLatinx = removeDelinquentComplaintsLatinx ? null : $formValues.find('.setDelinquentComplaintsLatinx').val();
	var addDelinquentComplaintsLatinx = $formValues.find('.addDelinquentComplaintsLatinx').val();
	if(removeDelinquentComplaintsLatinx || setDelinquentComplaintsLatinx != null && setDelinquentComplaintsLatinx !== '')
		vals['setDelinquentComplaintsLatinx'] = setDelinquentComplaintsLatinx;
	if(addDelinquentComplaintsLatinx != null && addDelinquentComplaintsLatinx !== '')
		vals['addDelinquentComplaintsLatinx'] = addDelinquentComplaintsLatinx;
	var removeDelinquentComplaintsLatinx = $formValues.find('.removeDelinquentComplaintsLatinx').val();
	if(removeDelinquentComplaintsLatinx != null && removeDelinquentComplaintsLatinx !== '')
		vals['removeDelinquentComplaintsLatinx'] = removeDelinquentComplaintsLatinx;

	var valueDelinquentComplaintsLatinxPercent = $formValues.find('.valueDelinquentComplaintsLatinxPercent').val();
	var removeDelinquentComplaintsLatinxPercent = $formValues.find('.removeDelinquentComplaintsLatinxPercent').val() === 'true';
	var setDelinquentComplaintsLatinxPercent = removeDelinquentComplaintsLatinxPercent ? null : $formValues.find('.setDelinquentComplaintsLatinxPercent').val();
	var addDelinquentComplaintsLatinxPercent = $formValues.find('.addDelinquentComplaintsLatinxPercent').val();
	if(removeDelinquentComplaintsLatinxPercent || setDelinquentComplaintsLatinxPercent != null && setDelinquentComplaintsLatinxPercent !== '')
		vals['setDelinquentComplaintsLatinxPercent'] = setDelinquentComplaintsLatinxPercent;
	if(addDelinquentComplaintsLatinxPercent != null && addDelinquentComplaintsLatinxPercent !== '')
		vals['addDelinquentComplaintsLatinxPercent'] = addDelinquentComplaintsLatinxPercent;
	var removeDelinquentComplaintsLatinxPercent = $formValues.find('.removeDelinquentComplaintsLatinxPercent').val();
	if(removeDelinquentComplaintsLatinxPercent != null && removeDelinquentComplaintsLatinxPercent !== '')
		vals['removeDelinquentComplaintsLatinxPercent'] = removeDelinquentComplaintsLatinxPercent;

	var valueDelinquentComplaintsMultiRacial = $formValues.find('.valueDelinquentComplaintsMultiRacial').val();
	var removeDelinquentComplaintsMultiRacial = $formValues.find('.removeDelinquentComplaintsMultiRacial').val() === 'true';
	var setDelinquentComplaintsMultiRacial = removeDelinquentComplaintsMultiRacial ? null : $formValues.find('.setDelinquentComplaintsMultiRacial').val();
	var addDelinquentComplaintsMultiRacial = $formValues.find('.addDelinquentComplaintsMultiRacial').val();
	if(removeDelinquentComplaintsMultiRacial || setDelinquentComplaintsMultiRacial != null && setDelinquentComplaintsMultiRacial !== '')
		vals['setDelinquentComplaintsMultiRacial'] = setDelinquentComplaintsMultiRacial;
	if(addDelinquentComplaintsMultiRacial != null && addDelinquentComplaintsMultiRacial !== '')
		vals['addDelinquentComplaintsMultiRacial'] = addDelinquentComplaintsMultiRacial;
	var removeDelinquentComplaintsMultiRacial = $formValues.find('.removeDelinquentComplaintsMultiRacial').val();
	if(removeDelinquentComplaintsMultiRacial != null && removeDelinquentComplaintsMultiRacial !== '')
		vals['removeDelinquentComplaintsMultiRacial'] = removeDelinquentComplaintsMultiRacial;

	var valueDelinquentComplaintsMultiRacialPercent = $formValues.find('.valueDelinquentComplaintsMultiRacialPercent').val();
	var removeDelinquentComplaintsMultiRacialPercent = $formValues.find('.removeDelinquentComplaintsMultiRacialPercent').val() === 'true';
	var setDelinquentComplaintsMultiRacialPercent = removeDelinquentComplaintsMultiRacialPercent ? null : $formValues.find('.setDelinquentComplaintsMultiRacialPercent').val();
	var addDelinquentComplaintsMultiRacialPercent = $formValues.find('.addDelinquentComplaintsMultiRacialPercent').val();
	if(removeDelinquentComplaintsMultiRacialPercent || setDelinquentComplaintsMultiRacialPercent != null && setDelinquentComplaintsMultiRacialPercent !== '')
		vals['setDelinquentComplaintsMultiRacialPercent'] = setDelinquentComplaintsMultiRacialPercent;
	if(addDelinquentComplaintsMultiRacialPercent != null && addDelinquentComplaintsMultiRacialPercent !== '')
		vals['addDelinquentComplaintsMultiRacialPercent'] = addDelinquentComplaintsMultiRacialPercent;
	var removeDelinquentComplaintsMultiRacialPercent = $formValues.find('.removeDelinquentComplaintsMultiRacialPercent').val();
	if(removeDelinquentComplaintsMultiRacialPercent != null && removeDelinquentComplaintsMultiRacialPercent !== '')
		vals['removeDelinquentComplaintsMultiRacialPercent'] = removeDelinquentComplaintsMultiRacialPercent;

	var valueDelinquentComplaintsIndigenous = $formValues.find('.valueDelinquentComplaintsIndigenous').val();
	var removeDelinquentComplaintsIndigenous = $formValues.find('.removeDelinquentComplaintsIndigenous').val() === 'true';
	var setDelinquentComplaintsIndigenous = removeDelinquentComplaintsIndigenous ? null : $formValues.find('.setDelinquentComplaintsIndigenous').val();
	var addDelinquentComplaintsIndigenous = $formValues.find('.addDelinquentComplaintsIndigenous').val();
	if(removeDelinquentComplaintsIndigenous || setDelinquentComplaintsIndigenous != null && setDelinquentComplaintsIndigenous !== '')
		vals['setDelinquentComplaintsIndigenous'] = setDelinquentComplaintsIndigenous;
	if(addDelinquentComplaintsIndigenous != null && addDelinquentComplaintsIndigenous !== '')
		vals['addDelinquentComplaintsIndigenous'] = addDelinquentComplaintsIndigenous;
	var removeDelinquentComplaintsIndigenous = $formValues.find('.removeDelinquentComplaintsIndigenous').val();
	if(removeDelinquentComplaintsIndigenous != null && removeDelinquentComplaintsIndigenous !== '')
		vals['removeDelinquentComplaintsIndigenous'] = removeDelinquentComplaintsIndigenous;

	var valueDelinquentComplaintsIndigenousPercent = $formValues.find('.valueDelinquentComplaintsIndigenousPercent').val();
	var removeDelinquentComplaintsIndigenousPercent = $formValues.find('.removeDelinquentComplaintsIndigenousPercent').val() === 'true';
	var setDelinquentComplaintsIndigenousPercent = removeDelinquentComplaintsIndigenousPercent ? null : $formValues.find('.setDelinquentComplaintsIndigenousPercent').val();
	var addDelinquentComplaintsIndigenousPercent = $formValues.find('.addDelinquentComplaintsIndigenousPercent').val();
	if(removeDelinquentComplaintsIndigenousPercent || setDelinquentComplaintsIndigenousPercent != null && setDelinquentComplaintsIndigenousPercent !== '')
		vals['setDelinquentComplaintsIndigenousPercent'] = setDelinquentComplaintsIndigenousPercent;
	if(addDelinquentComplaintsIndigenousPercent != null && addDelinquentComplaintsIndigenousPercent !== '')
		vals['addDelinquentComplaintsIndigenousPercent'] = addDelinquentComplaintsIndigenousPercent;
	var removeDelinquentComplaintsIndigenousPercent = $formValues.find('.removeDelinquentComplaintsIndigenousPercent').val();
	if(removeDelinquentComplaintsIndigenousPercent != null && removeDelinquentComplaintsIndigenousPercent !== '')
		vals['removeDelinquentComplaintsIndigenousPercent'] = removeDelinquentComplaintsIndigenousPercent;

	var valueDelinquentComplaintsWhite = $formValues.find('.valueDelinquentComplaintsWhite').val();
	var removeDelinquentComplaintsWhite = $formValues.find('.removeDelinquentComplaintsWhite').val() === 'true';
	var setDelinquentComplaintsWhite = removeDelinquentComplaintsWhite ? null : $formValues.find('.setDelinquentComplaintsWhite').val();
	var addDelinquentComplaintsWhite = $formValues.find('.addDelinquentComplaintsWhite').val();
	if(removeDelinquentComplaintsWhite || setDelinquentComplaintsWhite != null && setDelinquentComplaintsWhite !== '')
		vals['setDelinquentComplaintsWhite'] = setDelinquentComplaintsWhite;
	if(addDelinquentComplaintsWhite != null && addDelinquentComplaintsWhite !== '')
		vals['addDelinquentComplaintsWhite'] = addDelinquentComplaintsWhite;
	var removeDelinquentComplaintsWhite = $formValues.find('.removeDelinquentComplaintsWhite').val();
	if(removeDelinquentComplaintsWhite != null && removeDelinquentComplaintsWhite !== '')
		vals['removeDelinquentComplaintsWhite'] = removeDelinquentComplaintsWhite;

	var valueDelinquentComplaintsWhitePercent = $formValues.find('.valueDelinquentComplaintsWhitePercent').val();
	var removeDelinquentComplaintsWhitePercent = $formValues.find('.removeDelinquentComplaintsWhitePercent').val() === 'true';
	var setDelinquentComplaintsWhitePercent = removeDelinquentComplaintsWhitePercent ? null : $formValues.find('.setDelinquentComplaintsWhitePercent').val();
	var addDelinquentComplaintsWhitePercent = $formValues.find('.addDelinquentComplaintsWhitePercent').val();
	if(removeDelinquentComplaintsWhitePercent || setDelinquentComplaintsWhitePercent != null && setDelinquentComplaintsWhitePercent !== '')
		vals['setDelinquentComplaintsWhitePercent'] = setDelinquentComplaintsWhitePercent;
	if(addDelinquentComplaintsWhitePercent != null && addDelinquentComplaintsWhitePercent !== '')
		vals['addDelinquentComplaintsWhitePercent'] = addDelinquentComplaintsWhitePercent;
	var removeDelinquentComplaintsWhitePercent = $formValues.find('.removeDelinquentComplaintsWhitePercent').val();
	if(removeDelinquentComplaintsWhitePercent != null && removeDelinquentComplaintsWhitePercent !== '')
		vals['removeDelinquentComplaintsWhitePercent'] = removeDelinquentComplaintsWhitePercent;

	var valueDelinquentComplaintsPacificIslander = $formValues.find('.valueDelinquentComplaintsPacificIslander').val();
	var removeDelinquentComplaintsPacificIslander = $formValues.find('.removeDelinquentComplaintsPacificIslander').val() === 'true';
	var setDelinquentComplaintsPacificIslander = removeDelinquentComplaintsPacificIslander ? null : $formValues.find('.setDelinquentComplaintsPacificIslander').val();
	var addDelinquentComplaintsPacificIslander = $formValues.find('.addDelinquentComplaintsPacificIslander').val();
	if(removeDelinquentComplaintsPacificIslander || setDelinquentComplaintsPacificIslander != null && setDelinquentComplaintsPacificIslander !== '')
		vals['setDelinquentComplaintsPacificIslander'] = setDelinquentComplaintsPacificIslander;
	if(addDelinquentComplaintsPacificIslander != null && addDelinquentComplaintsPacificIslander !== '')
		vals['addDelinquentComplaintsPacificIslander'] = addDelinquentComplaintsPacificIslander;
	var removeDelinquentComplaintsPacificIslander = $formValues.find('.removeDelinquentComplaintsPacificIslander').val();
	if(removeDelinquentComplaintsPacificIslander != null && removeDelinquentComplaintsPacificIslander !== '')
		vals['removeDelinquentComplaintsPacificIslander'] = removeDelinquentComplaintsPacificIslander;

	var valueDelinquentComplaintsPacificIslanderPercent = $formValues.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
	var removeDelinquentComplaintsPacificIslanderPercent = $formValues.find('.removeDelinquentComplaintsPacificIslanderPercent').val() === 'true';
	var setDelinquentComplaintsPacificIslanderPercent = removeDelinquentComplaintsPacificIslanderPercent ? null : $formValues.find('.setDelinquentComplaintsPacificIslanderPercent').val();
	var addDelinquentComplaintsPacificIslanderPercent = $formValues.find('.addDelinquentComplaintsPacificIslanderPercent').val();
	if(removeDelinquentComplaintsPacificIslanderPercent || setDelinquentComplaintsPacificIslanderPercent != null && setDelinquentComplaintsPacificIslanderPercent !== '')
		vals['setDelinquentComplaintsPacificIslanderPercent'] = setDelinquentComplaintsPacificIslanderPercent;
	if(addDelinquentComplaintsPacificIslanderPercent != null && addDelinquentComplaintsPacificIslanderPercent !== '')
		vals['addDelinquentComplaintsPacificIslanderPercent'] = addDelinquentComplaintsPacificIslanderPercent;
	var removeDelinquentComplaintsPacificIslanderPercent = $formValues.find('.removeDelinquentComplaintsPacificIslanderPercent').val();
	if(removeDelinquentComplaintsPacificIslanderPercent != null && removeDelinquentComplaintsPacificIslanderPercent !== '')
		vals['removeDelinquentComplaintsPacificIslanderPercent'] = removeDelinquentComplaintsPacificIslanderPercent;

	var valueShortTermSuspensionRate = $formValues.find('.valueShortTermSuspensionRate').val();
	var removeShortTermSuspensionRate = $formValues.find('.removeShortTermSuspensionRate').val() === 'true';
	var setShortTermSuspensionRate = removeShortTermSuspensionRate ? null : $formValues.find('.setShortTermSuspensionRate').val();
	var addShortTermSuspensionRate = $formValues.find('.addShortTermSuspensionRate').val();
	if(removeShortTermSuspensionRate || setShortTermSuspensionRate != null && setShortTermSuspensionRate !== '')
		vals['setShortTermSuspensionRate'] = setShortTermSuspensionRate;
	if(addShortTermSuspensionRate != null && addShortTermSuspensionRate !== '')
		vals['addShortTermSuspensionRate'] = addShortTermSuspensionRate;
	var removeShortTermSuspensionRate = $formValues.find('.removeShortTermSuspensionRate').val();
	if(removeShortTermSuspensionRate != null && removeShortTermSuspensionRate !== '')
		vals['removeShortTermSuspensionRate'] = removeShortTermSuspensionRate;

	var valueShortTermSuspensionsTotal = $formValues.find('.valueShortTermSuspensionsTotal').val();
	var removeShortTermSuspensionsTotal = $formValues.find('.removeShortTermSuspensionsTotal').val() === 'true';
	var setShortTermSuspensionsTotal = removeShortTermSuspensionsTotal ? null : $formValues.find('.setShortTermSuspensionsTotal').val();
	var addShortTermSuspensionsTotal = $formValues.find('.addShortTermSuspensionsTotal').val();
	if(removeShortTermSuspensionsTotal || setShortTermSuspensionsTotal != null && setShortTermSuspensionsTotal !== '')
		vals['setShortTermSuspensionsTotal'] = setShortTermSuspensionsTotal;
	if(addShortTermSuspensionsTotal != null && addShortTermSuspensionsTotal !== '')
		vals['addShortTermSuspensionsTotal'] = addShortTermSuspensionsTotal;
	var removeShortTermSuspensionsTotal = $formValues.find('.removeShortTermSuspensionsTotal').val();
	if(removeShortTermSuspensionsTotal != null && removeShortTermSuspensionsTotal !== '')
		vals['removeShortTermSuspensionsTotal'] = removeShortTermSuspensionsTotal;

	var valueLongTermSuspensionsTotal = $formValues.find('.valueLongTermSuspensionsTotal').val();
	var removeLongTermSuspensionsTotal = $formValues.find('.removeLongTermSuspensionsTotal').val() === 'true';
	var setLongTermSuspensionsTotal = removeLongTermSuspensionsTotal ? null : $formValues.find('.setLongTermSuspensionsTotal').val();
	var addLongTermSuspensionsTotal = $formValues.find('.addLongTermSuspensionsTotal').val();
	if(removeLongTermSuspensionsTotal || setLongTermSuspensionsTotal != null && setLongTermSuspensionsTotal !== '')
		vals['setLongTermSuspensionsTotal'] = setLongTermSuspensionsTotal;
	if(addLongTermSuspensionsTotal != null && addLongTermSuspensionsTotal !== '')
		vals['addLongTermSuspensionsTotal'] = addLongTermSuspensionsTotal;
	var removeLongTermSuspensionsTotal = $formValues.find('.removeLongTermSuspensionsTotal').val();
	if(removeLongTermSuspensionsTotal != null && removeLongTermSuspensionsTotal !== '')
		vals['removeLongTermSuspensionsTotal'] = removeLongTermSuspensionsTotal;

	var valueExpulsionsTotal = $formValues.find('.valueExpulsionsTotal').val();
	var removeExpulsionsTotal = $formValues.find('.removeExpulsionsTotal').val() === 'true';
	var setExpulsionsTotal = removeExpulsionsTotal ? null : $formValues.find('.setExpulsionsTotal').val();
	var addExpulsionsTotal = $formValues.find('.addExpulsionsTotal').val();
	if(removeExpulsionsTotal || setExpulsionsTotal != null && setExpulsionsTotal !== '')
		vals['setExpulsionsTotal'] = setExpulsionsTotal;
	if(addExpulsionsTotal != null && addExpulsionsTotal !== '')
		vals['addExpulsionsTotal'] = addExpulsionsTotal;
	var removeExpulsionsTotal = $formValues.find('.removeExpulsionsTotal').val();
	if(removeExpulsionsTotal != null && removeExpulsionsTotal !== '')
		vals['removeExpulsionsTotal'] = removeExpulsionsTotal;

	var valueShortTermSuspensionsAsianFemale = $formValues.find('.valueShortTermSuspensionsAsianFemale').val();
	var removeShortTermSuspensionsAsianFemale = $formValues.find('.removeShortTermSuspensionsAsianFemale').val() === 'true';
	var setShortTermSuspensionsAsianFemale = removeShortTermSuspensionsAsianFemale ? null : $formValues.find('.setShortTermSuspensionsAsianFemale').val();
	var addShortTermSuspensionsAsianFemale = $formValues.find('.addShortTermSuspensionsAsianFemale').val();
	if(removeShortTermSuspensionsAsianFemale || setShortTermSuspensionsAsianFemale != null && setShortTermSuspensionsAsianFemale !== '')
		vals['setShortTermSuspensionsAsianFemale'] = setShortTermSuspensionsAsianFemale;
	if(addShortTermSuspensionsAsianFemale != null && addShortTermSuspensionsAsianFemale !== '')
		vals['addShortTermSuspensionsAsianFemale'] = addShortTermSuspensionsAsianFemale;
	var removeShortTermSuspensionsAsianFemale = $formValues.find('.removeShortTermSuspensionsAsianFemale').val();
	if(removeShortTermSuspensionsAsianFemale != null && removeShortTermSuspensionsAsianFemale !== '')
		vals['removeShortTermSuspensionsAsianFemale'] = removeShortTermSuspensionsAsianFemale;

	var valueShortTermSuspensionsAsianMale = $formValues.find('.valueShortTermSuspensionsAsianMale').val();
	var removeShortTermSuspensionsAsianMale = $formValues.find('.removeShortTermSuspensionsAsianMale').val() === 'true';
	var setShortTermSuspensionsAsianMale = removeShortTermSuspensionsAsianMale ? null : $formValues.find('.setShortTermSuspensionsAsianMale').val();
	var addShortTermSuspensionsAsianMale = $formValues.find('.addShortTermSuspensionsAsianMale').val();
	if(removeShortTermSuspensionsAsianMale || setShortTermSuspensionsAsianMale != null && setShortTermSuspensionsAsianMale !== '')
		vals['setShortTermSuspensionsAsianMale'] = setShortTermSuspensionsAsianMale;
	if(addShortTermSuspensionsAsianMale != null && addShortTermSuspensionsAsianMale !== '')
		vals['addShortTermSuspensionsAsianMale'] = addShortTermSuspensionsAsianMale;
	var removeShortTermSuspensionsAsianMale = $formValues.find('.removeShortTermSuspensionsAsianMale').val();
	if(removeShortTermSuspensionsAsianMale != null && removeShortTermSuspensionsAsianMale !== '')
		vals['removeShortTermSuspensionsAsianMale'] = removeShortTermSuspensionsAsianMale;

	var valueShortTermSuspensionsAsianTotal = $formValues.find('.valueShortTermSuspensionsAsianTotal').val();
	var removeShortTermSuspensionsAsianTotal = $formValues.find('.removeShortTermSuspensionsAsianTotal').val() === 'true';
	var setShortTermSuspensionsAsianTotal = removeShortTermSuspensionsAsianTotal ? null : $formValues.find('.setShortTermSuspensionsAsianTotal').val();
	var addShortTermSuspensionsAsianTotal = $formValues.find('.addShortTermSuspensionsAsianTotal').val();
	if(removeShortTermSuspensionsAsianTotal || setShortTermSuspensionsAsianTotal != null && setShortTermSuspensionsAsianTotal !== '')
		vals['setShortTermSuspensionsAsianTotal'] = setShortTermSuspensionsAsianTotal;
	if(addShortTermSuspensionsAsianTotal != null && addShortTermSuspensionsAsianTotal !== '')
		vals['addShortTermSuspensionsAsianTotal'] = addShortTermSuspensionsAsianTotal;
	var removeShortTermSuspensionsAsianTotal = $formValues.find('.removeShortTermSuspensionsAsianTotal').val();
	if(removeShortTermSuspensionsAsianTotal != null && removeShortTermSuspensionsAsianTotal !== '')
		vals['removeShortTermSuspensionsAsianTotal'] = removeShortTermSuspensionsAsianTotal;

	var valueShortTermSuspensionsAsianPercent = $formValues.find('.valueShortTermSuspensionsAsianPercent').val();
	var removeShortTermSuspensionsAsianPercent = $formValues.find('.removeShortTermSuspensionsAsianPercent').val() === 'true';
	var setShortTermSuspensionsAsianPercent = removeShortTermSuspensionsAsianPercent ? null : $formValues.find('.setShortTermSuspensionsAsianPercent').val();
	var addShortTermSuspensionsAsianPercent = $formValues.find('.addShortTermSuspensionsAsianPercent').val();
	if(removeShortTermSuspensionsAsianPercent || setShortTermSuspensionsAsianPercent != null && setShortTermSuspensionsAsianPercent !== '')
		vals['setShortTermSuspensionsAsianPercent'] = setShortTermSuspensionsAsianPercent;
	if(addShortTermSuspensionsAsianPercent != null && addShortTermSuspensionsAsianPercent !== '')
		vals['addShortTermSuspensionsAsianPercent'] = addShortTermSuspensionsAsianPercent;
	var removeShortTermSuspensionsAsianPercent = $formValues.find('.removeShortTermSuspensionsAsianPercent').val();
	if(removeShortTermSuspensionsAsianPercent != null && removeShortTermSuspensionsAsianPercent !== '')
		vals['removeShortTermSuspensionsAsianPercent'] = removeShortTermSuspensionsAsianPercent;

	var valueShortTermSuspensionsAsianRate = $formValues.find('.valueShortTermSuspensionsAsianRate').val();
	var removeShortTermSuspensionsAsianRate = $formValues.find('.removeShortTermSuspensionsAsianRate').val() === 'true';
	var setShortTermSuspensionsAsianRate = removeShortTermSuspensionsAsianRate ? null : $formValues.find('.setShortTermSuspensionsAsianRate').val();
	var addShortTermSuspensionsAsianRate = $formValues.find('.addShortTermSuspensionsAsianRate').val();
	if(removeShortTermSuspensionsAsianRate || setShortTermSuspensionsAsianRate != null && setShortTermSuspensionsAsianRate !== '')
		vals['setShortTermSuspensionsAsianRate'] = setShortTermSuspensionsAsianRate;
	if(addShortTermSuspensionsAsianRate != null && addShortTermSuspensionsAsianRate !== '')
		vals['addShortTermSuspensionsAsianRate'] = addShortTermSuspensionsAsianRate;
	var removeShortTermSuspensionsAsianRate = $formValues.find('.removeShortTermSuspensionsAsianRate').val();
	if(removeShortTermSuspensionsAsianRate != null && removeShortTermSuspensionsAsianRate !== '')
		vals['removeShortTermSuspensionsAsianRate'] = removeShortTermSuspensionsAsianRate;

	var valueShortTermSuspensionsBlackFemale = $formValues.find('.valueShortTermSuspensionsBlackFemale').val();
	var removeShortTermSuspensionsBlackFemale = $formValues.find('.removeShortTermSuspensionsBlackFemale').val() === 'true';
	var setShortTermSuspensionsBlackFemale = removeShortTermSuspensionsBlackFemale ? null : $formValues.find('.setShortTermSuspensionsBlackFemale').val();
	var addShortTermSuspensionsBlackFemale = $formValues.find('.addShortTermSuspensionsBlackFemale').val();
	if(removeShortTermSuspensionsBlackFemale || setShortTermSuspensionsBlackFemale != null && setShortTermSuspensionsBlackFemale !== '')
		vals['setShortTermSuspensionsBlackFemale'] = setShortTermSuspensionsBlackFemale;
	if(addShortTermSuspensionsBlackFemale != null && addShortTermSuspensionsBlackFemale !== '')
		vals['addShortTermSuspensionsBlackFemale'] = addShortTermSuspensionsBlackFemale;
	var removeShortTermSuspensionsBlackFemale = $formValues.find('.removeShortTermSuspensionsBlackFemale').val();
	if(removeShortTermSuspensionsBlackFemale != null && removeShortTermSuspensionsBlackFemale !== '')
		vals['removeShortTermSuspensionsBlackFemale'] = removeShortTermSuspensionsBlackFemale;

	var valueShortTermSuspensionsBlackMale = $formValues.find('.valueShortTermSuspensionsBlackMale').val();
	var removeShortTermSuspensionsBlackMale = $formValues.find('.removeShortTermSuspensionsBlackMale').val() === 'true';
	var setShortTermSuspensionsBlackMale = removeShortTermSuspensionsBlackMale ? null : $formValues.find('.setShortTermSuspensionsBlackMale').val();
	var addShortTermSuspensionsBlackMale = $formValues.find('.addShortTermSuspensionsBlackMale').val();
	if(removeShortTermSuspensionsBlackMale || setShortTermSuspensionsBlackMale != null && setShortTermSuspensionsBlackMale !== '')
		vals['setShortTermSuspensionsBlackMale'] = setShortTermSuspensionsBlackMale;
	if(addShortTermSuspensionsBlackMale != null && addShortTermSuspensionsBlackMale !== '')
		vals['addShortTermSuspensionsBlackMale'] = addShortTermSuspensionsBlackMale;
	var removeShortTermSuspensionsBlackMale = $formValues.find('.removeShortTermSuspensionsBlackMale').val();
	if(removeShortTermSuspensionsBlackMale != null && removeShortTermSuspensionsBlackMale !== '')
		vals['removeShortTermSuspensionsBlackMale'] = removeShortTermSuspensionsBlackMale;

	var valueShortTermSuspensionsBlackTotal = $formValues.find('.valueShortTermSuspensionsBlackTotal').val();
	var removeShortTermSuspensionsBlackTotal = $formValues.find('.removeShortTermSuspensionsBlackTotal').val() === 'true';
	var setShortTermSuspensionsBlackTotal = removeShortTermSuspensionsBlackTotal ? null : $formValues.find('.setShortTermSuspensionsBlackTotal').val();
	var addShortTermSuspensionsBlackTotal = $formValues.find('.addShortTermSuspensionsBlackTotal').val();
	if(removeShortTermSuspensionsBlackTotal || setShortTermSuspensionsBlackTotal != null && setShortTermSuspensionsBlackTotal !== '')
		vals['setShortTermSuspensionsBlackTotal'] = setShortTermSuspensionsBlackTotal;
	if(addShortTermSuspensionsBlackTotal != null && addShortTermSuspensionsBlackTotal !== '')
		vals['addShortTermSuspensionsBlackTotal'] = addShortTermSuspensionsBlackTotal;
	var removeShortTermSuspensionsBlackTotal = $formValues.find('.removeShortTermSuspensionsBlackTotal').val();
	if(removeShortTermSuspensionsBlackTotal != null && removeShortTermSuspensionsBlackTotal !== '')
		vals['removeShortTermSuspensionsBlackTotal'] = removeShortTermSuspensionsBlackTotal;

	var valueShortTermSuspensionsBlackPercent = $formValues.find('.valueShortTermSuspensionsBlackPercent').val();
	var removeShortTermSuspensionsBlackPercent = $formValues.find('.removeShortTermSuspensionsBlackPercent').val() === 'true';
	var setShortTermSuspensionsBlackPercent = removeShortTermSuspensionsBlackPercent ? null : $formValues.find('.setShortTermSuspensionsBlackPercent').val();
	var addShortTermSuspensionsBlackPercent = $formValues.find('.addShortTermSuspensionsBlackPercent').val();
	if(removeShortTermSuspensionsBlackPercent || setShortTermSuspensionsBlackPercent != null && setShortTermSuspensionsBlackPercent !== '')
		vals['setShortTermSuspensionsBlackPercent'] = setShortTermSuspensionsBlackPercent;
	if(addShortTermSuspensionsBlackPercent != null && addShortTermSuspensionsBlackPercent !== '')
		vals['addShortTermSuspensionsBlackPercent'] = addShortTermSuspensionsBlackPercent;
	var removeShortTermSuspensionsBlackPercent = $formValues.find('.removeShortTermSuspensionsBlackPercent').val();
	if(removeShortTermSuspensionsBlackPercent != null && removeShortTermSuspensionsBlackPercent !== '')
		vals['removeShortTermSuspensionsBlackPercent'] = removeShortTermSuspensionsBlackPercent;

	var valueShortTermSuspensionsBlackRate = $formValues.find('.valueShortTermSuspensionsBlackRate').val();
	var removeShortTermSuspensionsBlackRate = $formValues.find('.removeShortTermSuspensionsBlackRate').val() === 'true';
	var setShortTermSuspensionsBlackRate = removeShortTermSuspensionsBlackRate ? null : $formValues.find('.setShortTermSuspensionsBlackRate').val();
	var addShortTermSuspensionsBlackRate = $formValues.find('.addShortTermSuspensionsBlackRate').val();
	if(removeShortTermSuspensionsBlackRate || setShortTermSuspensionsBlackRate != null && setShortTermSuspensionsBlackRate !== '')
		vals['setShortTermSuspensionsBlackRate'] = setShortTermSuspensionsBlackRate;
	if(addShortTermSuspensionsBlackRate != null && addShortTermSuspensionsBlackRate !== '')
		vals['addShortTermSuspensionsBlackRate'] = addShortTermSuspensionsBlackRate;
	var removeShortTermSuspensionsBlackRate = $formValues.find('.removeShortTermSuspensionsBlackRate').val();
	if(removeShortTermSuspensionsBlackRate != null && removeShortTermSuspensionsBlackRate !== '')
		vals['removeShortTermSuspensionsBlackRate'] = removeShortTermSuspensionsBlackRate;

	var valueShortTermSuspensionsLatinxFemale = $formValues.find('.valueShortTermSuspensionsLatinxFemale').val();
	var removeShortTermSuspensionsLatinxFemale = $formValues.find('.removeShortTermSuspensionsLatinxFemale').val() === 'true';
	var setShortTermSuspensionsLatinxFemale = removeShortTermSuspensionsLatinxFemale ? null : $formValues.find('.setShortTermSuspensionsLatinxFemale').val();
	var addShortTermSuspensionsLatinxFemale = $formValues.find('.addShortTermSuspensionsLatinxFemale').val();
	if(removeShortTermSuspensionsLatinxFemale || setShortTermSuspensionsLatinxFemale != null && setShortTermSuspensionsLatinxFemale !== '')
		vals['setShortTermSuspensionsLatinxFemale'] = setShortTermSuspensionsLatinxFemale;
	if(addShortTermSuspensionsLatinxFemale != null && addShortTermSuspensionsLatinxFemale !== '')
		vals['addShortTermSuspensionsLatinxFemale'] = addShortTermSuspensionsLatinxFemale;
	var removeShortTermSuspensionsLatinxFemale = $formValues.find('.removeShortTermSuspensionsLatinxFemale').val();
	if(removeShortTermSuspensionsLatinxFemale != null && removeShortTermSuspensionsLatinxFemale !== '')
		vals['removeShortTermSuspensionsLatinxFemale'] = removeShortTermSuspensionsLatinxFemale;

	var valueShortTermSuspensionsLatinxMale = $formValues.find('.valueShortTermSuspensionsLatinxMale').val();
	var removeShortTermSuspensionsLatinxMale = $formValues.find('.removeShortTermSuspensionsLatinxMale').val() === 'true';
	var setShortTermSuspensionsLatinxMale = removeShortTermSuspensionsLatinxMale ? null : $formValues.find('.setShortTermSuspensionsLatinxMale').val();
	var addShortTermSuspensionsLatinxMale = $formValues.find('.addShortTermSuspensionsLatinxMale').val();
	if(removeShortTermSuspensionsLatinxMale || setShortTermSuspensionsLatinxMale != null && setShortTermSuspensionsLatinxMale !== '')
		vals['setShortTermSuspensionsLatinxMale'] = setShortTermSuspensionsLatinxMale;
	if(addShortTermSuspensionsLatinxMale != null && addShortTermSuspensionsLatinxMale !== '')
		vals['addShortTermSuspensionsLatinxMale'] = addShortTermSuspensionsLatinxMale;
	var removeShortTermSuspensionsLatinxMale = $formValues.find('.removeShortTermSuspensionsLatinxMale').val();
	if(removeShortTermSuspensionsLatinxMale != null && removeShortTermSuspensionsLatinxMale !== '')
		vals['removeShortTermSuspensionsLatinxMale'] = removeShortTermSuspensionsLatinxMale;

	var valueShortTermSuspensionsLatinxTotal = $formValues.find('.valueShortTermSuspensionsLatinxTotal').val();
	var removeShortTermSuspensionsLatinxTotal = $formValues.find('.removeShortTermSuspensionsLatinxTotal').val() === 'true';
	var setShortTermSuspensionsLatinxTotal = removeShortTermSuspensionsLatinxTotal ? null : $formValues.find('.setShortTermSuspensionsLatinxTotal').val();
	var addShortTermSuspensionsLatinxTotal = $formValues.find('.addShortTermSuspensionsLatinxTotal').val();
	if(removeShortTermSuspensionsLatinxTotal || setShortTermSuspensionsLatinxTotal != null && setShortTermSuspensionsLatinxTotal !== '')
		vals['setShortTermSuspensionsLatinxTotal'] = setShortTermSuspensionsLatinxTotal;
	if(addShortTermSuspensionsLatinxTotal != null && addShortTermSuspensionsLatinxTotal !== '')
		vals['addShortTermSuspensionsLatinxTotal'] = addShortTermSuspensionsLatinxTotal;
	var removeShortTermSuspensionsLatinxTotal = $formValues.find('.removeShortTermSuspensionsLatinxTotal').val();
	if(removeShortTermSuspensionsLatinxTotal != null && removeShortTermSuspensionsLatinxTotal !== '')
		vals['removeShortTermSuspensionsLatinxTotal'] = removeShortTermSuspensionsLatinxTotal;

	var valueShortTermSuspensionsLatinxPercent = $formValues.find('.valueShortTermSuspensionsLatinxPercent').val();
	var removeShortTermSuspensionsLatinxPercent = $formValues.find('.removeShortTermSuspensionsLatinxPercent').val() === 'true';
	var setShortTermSuspensionsLatinxPercent = removeShortTermSuspensionsLatinxPercent ? null : $formValues.find('.setShortTermSuspensionsLatinxPercent').val();
	var addShortTermSuspensionsLatinxPercent = $formValues.find('.addShortTermSuspensionsLatinxPercent').val();
	if(removeShortTermSuspensionsLatinxPercent || setShortTermSuspensionsLatinxPercent != null && setShortTermSuspensionsLatinxPercent !== '')
		vals['setShortTermSuspensionsLatinxPercent'] = setShortTermSuspensionsLatinxPercent;
	if(addShortTermSuspensionsLatinxPercent != null && addShortTermSuspensionsLatinxPercent !== '')
		vals['addShortTermSuspensionsLatinxPercent'] = addShortTermSuspensionsLatinxPercent;
	var removeShortTermSuspensionsLatinxPercent = $formValues.find('.removeShortTermSuspensionsLatinxPercent').val();
	if(removeShortTermSuspensionsLatinxPercent != null && removeShortTermSuspensionsLatinxPercent !== '')
		vals['removeShortTermSuspensionsLatinxPercent'] = removeShortTermSuspensionsLatinxPercent;

	var valueShortTermSuspensionsLatinxRate = $formValues.find('.valueShortTermSuspensionsLatinxRate').val();
	var removeShortTermSuspensionsLatinxRate = $formValues.find('.removeShortTermSuspensionsLatinxRate').val() === 'true';
	var setShortTermSuspensionsLatinxRate = removeShortTermSuspensionsLatinxRate ? null : $formValues.find('.setShortTermSuspensionsLatinxRate').val();
	var addShortTermSuspensionsLatinxRate = $formValues.find('.addShortTermSuspensionsLatinxRate').val();
	if(removeShortTermSuspensionsLatinxRate || setShortTermSuspensionsLatinxRate != null && setShortTermSuspensionsLatinxRate !== '')
		vals['setShortTermSuspensionsLatinxRate'] = setShortTermSuspensionsLatinxRate;
	if(addShortTermSuspensionsLatinxRate != null && addShortTermSuspensionsLatinxRate !== '')
		vals['addShortTermSuspensionsLatinxRate'] = addShortTermSuspensionsLatinxRate;
	var removeShortTermSuspensionsLatinxRate = $formValues.find('.removeShortTermSuspensionsLatinxRate').val();
	if(removeShortTermSuspensionsLatinxRate != null && removeShortTermSuspensionsLatinxRate !== '')
		vals['removeShortTermSuspensionsLatinxRate'] = removeShortTermSuspensionsLatinxRate;

	var valueShortTermSuspensionsIndigenousFemale = $formValues.find('.valueShortTermSuspensionsIndigenousFemale').val();
	var removeShortTermSuspensionsIndigenousFemale = $formValues.find('.removeShortTermSuspensionsIndigenousFemale').val() === 'true';
	var setShortTermSuspensionsIndigenousFemale = removeShortTermSuspensionsIndigenousFemale ? null : $formValues.find('.setShortTermSuspensionsIndigenousFemale').val();
	var addShortTermSuspensionsIndigenousFemale = $formValues.find('.addShortTermSuspensionsIndigenousFemale').val();
	if(removeShortTermSuspensionsIndigenousFemale || setShortTermSuspensionsIndigenousFemale != null && setShortTermSuspensionsIndigenousFemale !== '')
		vals['setShortTermSuspensionsIndigenousFemale'] = setShortTermSuspensionsIndigenousFemale;
	if(addShortTermSuspensionsIndigenousFemale != null && addShortTermSuspensionsIndigenousFemale !== '')
		vals['addShortTermSuspensionsIndigenousFemale'] = addShortTermSuspensionsIndigenousFemale;
	var removeShortTermSuspensionsIndigenousFemale = $formValues.find('.removeShortTermSuspensionsIndigenousFemale').val();
	if(removeShortTermSuspensionsIndigenousFemale != null && removeShortTermSuspensionsIndigenousFemale !== '')
		vals['removeShortTermSuspensionsIndigenousFemale'] = removeShortTermSuspensionsIndigenousFemale;

	var valueShortTermSuspensionsIndigenousMale = $formValues.find('.valueShortTermSuspensionsIndigenousMale').val();
	var removeShortTermSuspensionsIndigenousMale = $formValues.find('.removeShortTermSuspensionsIndigenousMale').val() === 'true';
	var setShortTermSuspensionsIndigenousMale = removeShortTermSuspensionsIndigenousMale ? null : $formValues.find('.setShortTermSuspensionsIndigenousMale').val();
	var addShortTermSuspensionsIndigenousMale = $formValues.find('.addShortTermSuspensionsIndigenousMale').val();
	if(removeShortTermSuspensionsIndigenousMale || setShortTermSuspensionsIndigenousMale != null && setShortTermSuspensionsIndigenousMale !== '')
		vals['setShortTermSuspensionsIndigenousMale'] = setShortTermSuspensionsIndigenousMale;
	if(addShortTermSuspensionsIndigenousMale != null && addShortTermSuspensionsIndigenousMale !== '')
		vals['addShortTermSuspensionsIndigenousMale'] = addShortTermSuspensionsIndigenousMale;
	var removeShortTermSuspensionsIndigenousMale = $formValues.find('.removeShortTermSuspensionsIndigenousMale').val();
	if(removeShortTermSuspensionsIndigenousMale != null && removeShortTermSuspensionsIndigenousMale !== '')
		vals['removeShortTermSuspensionsIndigenousMale'] = removeShortTermSuspensionsIndigenousMale;

	var valueShortTermSuspensionsIndigenousTotal = $formValues.find('.valueShortTermSuspensionsIndigenousTotal').val();
	var removeShortTermSuspensionsIndigenousTotal = $formValues.find('.removeShortTermSuspensionsIndigenousTotal').val() === 'true';
	var setShortTermSuspensionsIndigenousTotal = removeShortTermSuspensionsIndigenousTotal ? null : $formValues.find('.setShortTermSuspensionsIndigenousTotal').val();
	var addShortTermSuspensionsIndigenousTotal = $formValues.find('.addShortTermSuspensionsIndigenousTotal').val();
	if(removeShortTermSuspensionsIndigenousTotal || setShortTermSuspensionsIndigenousTotal != null && setShortTermSuspensionsIndigenousTotal !== '')
		vals['setShortTermSuspensionsIndigenousTotal'] = setShortTermSuspensionsIndigenousTotal;
	if(addShortTermSuspensionsIndigenousTotal != null && addShortTermSuspensionsIndigenousTotal !== '')
		vals['addShortTermSuspensionsIndigenousTotal'] = addShortTermSuspensionsIndigenousTotal;
	var removeShortTermSuspensionsIndigenousTotal = $formValues.find('.removeShortTermSuspensionsIndigenousTotal').val();
	if(removeShortTermSuspensionsIndigenousTotal != null && removeShortTermSuspensionsIndigenousTotal !== '')
		vals['removeShortTermSuspensionsIndigenousTotal'] = removeShortTermSuspensionsIndigenousTotal;

	var valueShortTermSuspensionsIndigenousPercent = $formValues.find('.valueShortTermSuspensionsIndigenousPercent').val();
	var removeShortTermSuspensionsIndigenousPercent = $formValues.find('.removeShortTermSuspensionsIndigenousPercent').val() === 'true';
	var setShortTermSuspensionsIndigenousPercent = removeShortTermSuspensionsIndigenousPercent ? null : $formValues.find('.setShortTermSuspensionsIndigenousPercent').val();
	var addShortTermSuspensionsIndigenousPercent = $formValues.find('.addShortTermSuspensionsIndigenousPercent').val();
	if(removeShortTermSuspensionsIndigenousPercent || setShortTermSuspensionsIndigenousPercent != null && setShortTermSuspensionsIndigenousPercent !== '')
		vals['setShortTermSuspensionsIndigenousPercent'] = setShortTermSuspensionsIndigenousPercent;
	if(addShortTermSuspensionsIndigenousPercent != null && addShortTermSuspensionsIndigenousPercent !== '')
		vals['addShortTermSuspensionsIndigenousPercent'] = addShortTermSuspensionsIndigenousPercent;
	var removeShortTermSuspensionsIndigenousPercent = $formValues.find('.removeShortTermSuspensionsIndigenousPercent').val();
	if(removeShortTermSuspensionsIndigenousPercent != null && removeShortTermSuspensionsIndigenousPercent !== '')
		vals['removeShortTermSuspensionsIndigenousPercent'] = removeShortTermSuspensionsIndigenousPercent;

	var valueShortTermSuspensionsIndigenousRate = $formValues.find('.valueShortTermSuspensionsIndigenousRate').val();
	var removeShortTermSuspensionsIndigenousRate = $formValues.find('.removeShortTermSuspensionsIndigenousRate').val() === 'true';
	var setShortTermSuspensionsIndigenousRate = removeShortTermSuspensionsIndigenousRate ? null : $formValues.find('.setShortTermSuspensionsIndigenousRate').val();
	var addShortTermSuspensionsIndigenousRate = $formValues.find('.addShortTermSuspensionsIndigenousRate').val();
	if(removeShortTermSuspensionsIndigenousRate || setShortTermSuspensionsIndigenousRate != null && setShortTermSuspensionsIndigenousRate !== '')
		vals['setShortTermSuspensionsIndigenousRate'] = setShortTermSuspensionsIndigenousRate;
	if(addShortTermSuspensionsIndigenousRate != null && addShortTermSuspensionsIndigenousRate !== '')
		vals['addShortTermSuspensionsIndigenousRate'] = addShortTermSuspensionsIndigenousRate;
	var removeShortTermSuspensionsIndigenousRate = $formValues.find('.removeShortTermSuspensionsIndigenousRate').val();
	if(removeShortTermSuspensionsIndigenousRate != null && removeShortTermSuspensionsIndigenousRate !== '')
		vals['removeShortTermSuspensionsIndigenousRate'] = removeShortTermSuspensionsIndigenousRate;

	var valueShortTermSuspensionsMultiRacialFemale = $formValues.find('.valueShortTermSuspensionsMultiRacialFemale').val();
	var removeShortTermSuspensionsMultiRacialFemale = $formValues.find('.removeShortTermSuspensionsMultiRacialFemale').val() === 'true';
	var setShortTermSuspensionsMultiRacialFemale = removeShortTermSuspensionsMultiRacialFemale ? null : $formValues.find('.setShortTermSuspensionsMultiRacialFemale').val();
	var addShortTermSuspensionsMultiRacialFemale = $formValues.find('.addShortTermSuspensionsMultiRacialFemale').val();
	if(removeShortTermSuspensionsMultiRacialFemale || setShortTermSuspensionsMultiRacialFemale != null && setShortTermSuspensionsMultiRacialFemale !== '')
		vals['setShortTermSuspensionsMultiRacialFemale'] = setShortTermSuspensionsMultiRacialFemale;
	if(addShortTermSuspensionsMultiRacialFemale != null && addShortTermSuspensionsMultiRacialFemale !== '')
		vals['addShortTermSuspensionsMultiRacialFemale'] = addShortTermSuspensionsMultiRacialFemale;
	var removeShortTermSuspensionsMultiRacialFemale = $formValues.find('.removeShortTermSuspensionsMultiRacialFemale').val();
	if(removeShortTermSuspensionsMultiRacialFemale != null && removeShortTermSuspensionsMultiRacialFemale !== '')
		vals['removeShortTermSuspensionsMultiRacialFemale'] = removeShortTermSuspensionsMultiRacialFemale;

	var valueShortTermSuspensionsMultiRacialMale = $formValues.find('.valueShortTermSuspensionsMultiRacialMale').val();
	var removeShortTermSuspensionsMultiRacialMale = $formValues.find('.removeShortTermSuspensionsMultiRacialMale').val() === 'true';
	var setShortTermSuspensionsMultiRacialMale = removeShortTermSuspensionsMultiRacialMale ? null : $formValues.find('.setShortTermSuspensionsMultiRacialMale').val();
	var addShortTermSuspensionsMultiRacialMale = $formValues.find('.addShortTermSuspensionsMultiRacialMale').val();
	if(removeShortTermSuspensionsMultiRacialMale || setShortTermSuspensionsMultiRacialMale != null && setShortTermSuspensionsMultiRacialMale !== '')
		vals['setShortTermSuspensionsMultiRacialMale'] = setShortTermSuspensionsMultiRacialMale;
	if(addShortTermSuspensionsMultiRacialMale != null && addShortTermSuspensionsMultiRacialMale !== '')
		vals['addShortTermSuspensionsMultiRacialMale'] = addShortTermSuspensionsMultiRacialMale;
	var removeShortTermSuspensionsMultiRacialMale = $formValues.find('.removeShortTermSuspensionsMultiRacialMale').val();
	if(removeShortTermSuspensionsMultiRacialMale != null && removeShortTermSuspensionsMultiRacialMale !== '')
		vals['removeShortTermSuspensionsMultiRacialMale'] = removeShortTermSuspensionsMultiRacialMale;

	var valueShortTermSuspensionsMultiRacialTotal = $formValues.find('.valueShortTermSuspensionsMultiRacialTotal').val();
	var removeShortTermSuspensionsMultiRacialTotal = $formValues.find('.removeShortTermSuspensionsMultiRacialTotal').val() === 'true';
	var setShortTermSuspensionsMultiRacialTotal = removeShortTermSuspensionsMultiRacialTotal ? null : $formValues.find('.setShortTermSuspensionsMultiRacialTotal').val();
	var addShortTermSuspensionsMultiRacialTotal = $formValues.find('.addShortTermSuspensionsMultiRacialTotal').val();
	if(removeShortTermSuspensionsMultiRacialTotal || setShortTermSuspensionsMultiRacialTotal != null && setShortTermSuspensionsMultiRacialTotal !== '')
		vals['setShortTermSuspensionsMultiRacialTotal'] = setShortTermSuspensionsMultiRacialTotal;
	if(addShortTermSuspensionsMultiRacialTotal != null && addShortTermSuspensionsMultiRacialTotal !== '')
		vals['addShortTermSuspensionsMultiRacialTotal'] = addShortTermSuspensionsMultiRacialTotal;
	var removeShortTermSuspensionsMultiRacialTotal = $formValues.find('.removeShortTermSuspensionsMultiRacialTotal').val();
	if(removeShortTermSuspensionsMultiRacialTotal != null && removeShortTermSuspensionsMultiRacialTotal !== '')
		vals['removeShortTermSuspensionsMultiRacialTotal'] = removeShortTermSuspensionsMultiRacialTotal;

	var valueShortTermSuspensionsMultiRacialPercent = $formValues.find('.valueShortTermSuspensionsMultiRacialPercent').val();
	var removeShortTermSuspensionsMultiRacialPercent = $formValues.find('.removeShortTermSuspensionsMultiRacialPercent').val() === 'true';
	var setShortTermSuspensionsMultiRacialPercent = removeShortTermSuspensionsMultiRacialPercent ? null : $formValues.find('.setShortTermSuspensionsMultiRacialPercent').val();
	var addShortTermSuspensionsMultiRacialPercent = $formValues.find('.addShortTermSuspensionsMultiRacialPercent').val();
	if(removeShortTermSuspensionsMultiRacialPercent || setShortTermSuspensionsMultiRacialPercent != null && setShortTermSuspensionsMultiRacialPercent !== '')
		vals['setShortTermSuspensionsMultiRacialPercent'] = setShortTermSuspensionsMultiRacialPercent;
	if(addShortTermSuspensionsMultiRacialPercent != null && addShortTermSuspensionsMultiRacialPercent !== '')
		vals['addShortTermSuspensionsMultiRacialPercent'] = addShortTermSuspensionsMultiRacialPercent;
	var removeShortTermSuspensionsMultiRacialPercent = $formValues.find('.removeShortTermSuspensionsMultiRacialPercent').val();
	if(removeShortTermSuspensionsMultiRacialPercent != null && removeShortTermSuspensionsMultiRacialPercent !== '')
		vals['removeShortTermSuspensionsMultiRacialPercent'] = removeShortTermSuspensionsMultiRacialPercent;

	var valueShortTermSuspensionsMultiRacialRate = $formValues.find('.valueShortTermSuspensionsMultiRacialRate').val();
	var removeShortTermSuspensionsMultiRacialRate = $formValues.find('.removeShortTermSuspensionsMultiRacialRate').val() === 'true';
	var setShortTermSuspensionsMultiRacialRate = removeShortTermSuspensionsMultiRacialRate ? null : $formValues.find('.setShortTermSuspensionsMultiRacialRate').val();
	var addShortTermSuspensionsMultiRacialRate = $formValues.find('.addShortTermSuspensionsMultiRacialRate').val();
	if(removeShortTermSuspensionsMultiRacialRate || setShortTermSuspensionsMultiRacialRate != null && setShortTermSuspensionsMultiRacialRate !== '')
		vals['setShortTermSuspensionsMultiRacialRate'] = setShortTermSuspensionsMultiRacialRate;
	if(addShortTermSuspensionsMultiRacialRate != null && addShortTermSuspensionsMultiRacialRate !== '')
		vals['addShortTermSuspensionsMultiRacialRate'] = addShortTermSuspensionsMultiRacialRate;
	var removeShortTermSuspensionsMultiRacialRate = $formValues.find('.removeShortTermSuspensionsMultiRacialRate').val();
	if(removeShortTermSuspensionsMultiRacialRate != null && removeShortTermSuspensionsMultiRacialRate !== '')
		vals['removeShortTermSuspensionsMultiRacialRate'] = removeShortTermSuspensionsMultiRacialRate;

	var valueShortTermSuspensionsPacificIslanderFemale = $formValues.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
	var removeShortTermSuspensionsPacificIslanderFemale = $formValues.find('.removeShortTermSuspensionsPacificIslanderFemale').val() === 'true';
	var setShortTermSuspensionsPacificIslanderFemale = removeShortTermSuspensionsPacificIslanderFemale ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderFemale').val();
	var addShortTermSuspensionsPacificIslanderFemale = $formValues.find('.addShortTermSuspensionsPacificIslanderFemale').val();
	if(removeShortTermSuspensionsPacificIslanderFemale || setShortTermSuspensionsPacificIslanderFemale != null && setShortTermSuspensionsPacificIslanderFemale !== '')
		vals['setShortTermSuspensionsPacificIslanderFemale'] = setShortTermSuspensionsPacificIslanderFemale;
	if(addShortTermSuspensionsPacificIslanderFemale != null && addShortTermSuspensionsPacificIslanderFemale !== '')
		vals['addShortTermSuspensionsPacificIslanderFemale'] = addShortTermSuspensionsPacificIslanderFemale;
	var removeShortTermSuspensionsPacificIslanderFemale = $formValues.find('.removeShortTermSuspensionsPacificIslanderFemale').val();
	if(removeShortTermSuspensionsPacificIslanderFemale != null && removeShortTermSuspensionsPacificIslanderFemale !== '')
		vals['removeShortTermSuspensionsPacificIslanderFemale'] = removeShortTermSuspensionsPacificIslanderFemale;

	var valueShortTermSuspensionsPacificIslanderMale = $formValues.find('.valueShortTermSuspensionsPacificIslanderMale').val();
	var removeShortTermSuspensionsPacificIslanderMale = $formValues.find('.removeShortTermSuspensionsPacificIslanderMale').val() === 'true';
	var setShortTermSuspensionsPacificIslanderMale = removeShortTermSuspensionsPacificIslanderMale ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderMale').val();
	var addShortTermSuspensionsPacificIslanderMale = $formValues.find('.addShortTermSuspensionsPacificIslanderMale').val();
	if(removeShortTermSuspensionsPacificIslanderMale || setShortTermSuspensionsPacificIslanderMale != null && setShortTermSuspensionsPacificIslanderMale !== '')
		vals['setShortTermSuspensionsPacificIslanderMale'] = setShortTermSuspensionsPacificIslanderMale;
	if(addShortTermSuspensionsPacificIslanderMale != null && addShortTermSuspensionsPacificIslanderMale !== '')
		vals['addShortTermSuspensionsPacificIslanderMale'] = addShortTermSuspensionsPacificIslanderMale;
	var removeShortTermSuspensionsPacificIslanderMale = $formValues.find('.removeShortTermSuspensionsPacificIslanderMale').val();
	if(removeShortTermSuspensionsPacificIslanderMale != null && removeShortTermSuspensionsPacificIslanderMale !== '')
		vals['removeShortTermSuspensionsPacificIslanderMale'] = removeShortTermSuspensionsPacificIslanderMale;

	var valueShortTermSuspensionsPacificIslanderTotal = $formValues.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
	var removeShortTermSuspensionsPacificIslanderTotal = $formValues.find('.removeShortTermSuspensionsPacificIslanderTotal').val() === 'true';
	var setShortTermSuspensionsPacificIslanderTotal = removeShortTermSuspensionsPacificIslanderTotal ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderTotal').val();
	var addShortTermSuspensionsPacificIslanderTotal = $formValues.find('.addShortTermSuspensionsPacificIslanderTotal').val();
	if(removeShortTermSuspensionsPacificIslanderTotal || setShortTermSuspensionsPacificIslanderTotal != null && setShortTermSuspensionsPacificIslanderTotal !== '')
		vals['setShortTermSuspensionsPacificIslanderTotal'] = setShortTermSuspensionsPacificIslanderTotal;
	if(addShortTermSuspensionsPacificIslanderTotal != null && addShortTermSuspensionsPacificIslanderTotal !== '')
		vals['addShortTermSuspensionsPacificIslanderTotal'] = addShortTermSuspensionsPacificIslanderTotal;
	var removeShortTermSuspensionsPacificIslanderTotal = $formValues.find('.removeShortTermSuspensionsPacificIslanderTotal').val();
	if(removeShortTermSuspensionsPacificIslanderTotal != null && removeShortTermSuspensionsPacificIslanderTotal !== '')
		vals['removeShortTermSuspensionsPacificIslanderTotal'] = removeShortTermSuspensionsPacificIslanderTotal;

	var valueShortTermSuspensionsPacificIslanderPercent = $formValues.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
	var removeShortTermSuspensionsPacificIslanderPercent = $formValues.find('.removeShortTermSuspensionsPacificIslanderPercent').val() === 'true';
	var setShortTermSuspensionsPacificIslanderPercent = removeShortTermSuspensionsPacificIslanderPercent ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderPercent').val();
	var addShortTermSuspensionsPacificIslanderPercent = $formValues.find('.addShortTermSuspensionsPacificIslanderPercent').val();
	if(removeShortTermSuspensionsPacificIslanderPercent || setShortTermSuspensionsPacificIslanderPercent != null && setShortTermSuspensionsPacificIslanderPercent !== '')
		vals['setShortTermSuspensionsPacificIslanderPercent'] = setShortTermSuspensionsPacificIslanderPercent;
	if(addShortTermSuspensionsPacificIslanderPercent != null && addShortTermSuspensionsPacificIslanderPercent !== '')
		vals['addShortTermSuspensionsPacificIslanderPercent'] = addShortTermSuspensionsPacificIslanderPercent;
	var removeShortTermSuspensionsPacificIslanderPercent = $formValues.find('.removeShortTermSuspensionsPacificIslanderPercent').val();
	if(removeShortTermSuspensionsPacificIslanderPercent != null && removeShortTermSuspensionsPacificIslanderPercent !== '')
		vals['removeShortTermSuspensionsPacificIslanderPercent'] = removeShortTermSuspensionsPacificIslanderPercent;

	var valueShortTermSuspensionsPacificIslanderRate = $formValues.find('.valueShortTermSuspensionsPacificIslanderRate').val();
	var removeShortTermSuspensionsPacificIslanderRate = $formValues.find('.removeShortTermSuspensionsPacificIslanderRate').val() === 'true';
	var setShortTermSuspensionsPacificIslanderRate = removeShortTermSuspensionsPacificIslanderRate ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderRate').val();
	var addShortTermSuspensionsPacificIslanderRate = $formValues.find('.addShortTermSuspensionsPacificIslanderRate').val();
	if(removeShortTermSuspensionsPacificIslanderRate || setShortTermSuspensionsPacificIslanderRate != null && setShortTermSuspensionsPacificIslanderRate !== '')
		vals['setShortTermSuspensionsPacificIslanderRate'] = setShortTermSuspensionsPacificIslanderRate;
	if(addShortTermSuspensionsPacificIslanderRate != null && addShortTermSuspensionsPacificIslanderRate !== '')
		vals['addShortTermSuspensionsPacificIslanderRate'] = addShortTermSuspensionsPacificIslanderRate;
	var removeShortTermSuspensionsPacificIslanderRate = $formValues.find('.removeShortTermSuspensionsPacificIslanderRate').val();
	if(removeShortTermSuspensionsPacificIslanderRate != null && removeShortTermSuspensionsPacificIslanderRate !== '')
		vals['removeShortTermSuspensionsPacificIslanderRate'] = removeShortTermSuspensionsPacificIslanderRate;

	var valueShortTermSuspensionsWhiteFemale = $formValues.find('.valueShortTermSuspensionsWhiteFemale').val();
	var removeShortTermSuspensionsWhiteFemale = $formValues.find('.removeShortTermSuspensionsWhiteFemale').val() === 'true';
	var setShortTermSuspensionsWhiteFemale = removeShortTermSuspensionsWhiteFemale ? null : $formValues.find('.setShortTermSuspensionsWhiteFemale').val();
	var addShortTermSuspensionsWhiteFemale = $formValues.find('.addShortTermSuspensionsWhiteFemale').val();
	if(removeShortTermSuspensionsWhiteFemale || setShortTermSuspensionsWhiteFemale != null && setShortTermSuspensionsWhiteFemale !== '')
		vals['setShortTermSuspensionsWhiteFemale'] = setShortTermSuspensionsWhiteFemale;
	if(addShortTermSuspensionsWhiteFemale != null && addShortTermSuspensionsWhiteFemale !== '')
		vals['addShortTermSuspensionsWhiteFemale'] = addShortTermSuspensionsWhiteFemale;
	var removeShortTermSuspensionsWhiteFemale = $formValues.find('.removeShortTermSuspensionsWhiteFemale').val();
	if(removeShortTermSuspensionsWhiteFemale != null && removeShortTermSuspensionsWhiteFemale !== '')
		vals['removeShortTermSuspensionsWhiteFemale'] = removeShortTermSuspensionsWhiteFemale;

	var valueShortTermSuspensionsWhiteMale = $formValues.find('.valueShortTermSuspensionsWhiteMale').val();
	var removeShortTermSuspensionsWhiteMale = $formValues.find('.removeShortTermSuspensionsWhiteMale').val() === 'true';
	var setShortTermSuspensionsWhiteMale = removeShortTermSuspensionsWhiteMale ? null : $formValues.find('.setShortTermSuspensionsWhiteMale').val();
	var addShortTermSuspensionsWhiteMale = $formValues.find('.addShortTermSuspensionsWhiteMale').val();
	if(removeShortTermSuspensionsWhiteMale || setShortTermSuspensionsWhiteMale != null && setShortTermSuspensionsWhiteMale !== '')
		vals['setShortTermSuspensionsWhiteMale'] = setShortTermSuspensionsWhiteMale;
	if(addShortTermSuspensionsWhiteMale != null && addShortTermSuspensionsWhiteMale !== '')
		vals['addShortTermSuspensionsWhiteMale'] = addShortTermSuspensionsWhiteMale;
	var removeShortTermSuspensionsWhiteMale = $formValues.find('.removeShortTermSuspensionsWhiteMale').val();
	if(removeShortTermSuspensionsWhiteMale != null && removeShortTermSuspensionsWhiteMale !== '')
		vals['removeShortTermSuspensionsWhiteMale'] = removeShortTermSuspensionsWhiteMale;

	var valueShortTermSuspensionsWhiteTotal = $formValues.find('.valueShortTermSuspensionsWhiteTotal').val();
	var removeShortTermSuspensionsWhiteTotal = $formValues.find('.removeShortTermSuspensionsWhiteTotal').val() === 'true';
	var setShortTermSuspensionsWhiteTotal = removeShortTermSuspensionsWhiteTotal ? null : $formValues.find('.setShortTermSuspensionsWhiteTotal').val();
	var addShortTermSuspensionsWhiteTotal = $formValues.find('.addShortTermSuspensionsWhiteTotal').val();
	if(removeShortTermSuspensionsWhiteTotal || setShortTermSuspensionsWhiteTotal != null && setShortTermSuspensionsWhiteTotal !== '')
		vals['setShortTermSuspensionsWhiteTotal'] = setShortTermSuspensionsWhiteTotal;
	if(addShortTermSuspensionsWhiteTotal != null && addShortTermSuspensionsWhiteTotal !== '')
		vals['addShortTermSuspensionsWhiteTotal'] = addShortTermSuspensionsWhiteTotal;
	var removeShortTermSuspensionsWhiteTotal = $formValues.find('.removeShortTermSuspensionsWhiteTotal').val();
	if(removeShortTermSuspensionsWhiteTotal != null && removeShortTermSuspensionsWhiteTotal !== '')
		vals['removeShortTermSuspensionsWhiteTotal'] = removeShortTermSuspensionsWhiteTotal;

	var valueShortTermSuspensionsWhitePercent = $formValues.find('.valueShortTermSuspensionsWhitePercent').val();
	var removeShortTermSuspensionsWhitePercent = $formValues.find('.removeShortTermSuspensionsWhitePercent').val() === 'true';
	var setShortTermSuspensionsWhitePercent = removeShortTermSuspensionsWhitePercent ? null : $formValues.find('.setShortTermSuspensionsWhitePercent').val();
	var addShortTermSuspensionsWhitePercent = $formValues.find('.addShortTermSuspensionsWhitePercent').val();
	if(removeShortTermSuspensionsWhitePercent || setShortTermSuspensionsWhitePercent != null && setShortTermSuspensionsWhitePercent !== '')
		vals['setShortTermSuspensionsWhitePercent'] = setShortTermSuspensionsWhitePercent;
	if(addShortTermSuspensionsWhitePercent != null && addShortTermSuspensionsWhitePercent !== '')
		vals['addShortTermSuspensionsWhitePercent'] = addShortTermSuspensionsWhitePercent;
	var removeShortTermSuspensionsWhitePercent = $formValues.find('.removeShortTermSuspensionsWhitePercent').val();
	if(removeShortTermSuspensionsWhitePercent != null && removeShortTermSuspensionsWhitePercent !== '')
		vals['removeShortTermSuspensionsWhitePercent'] = removeShortTermSuspensionsWhitePercent;

	var valueShortTermSuspensionsWhiteRate = $formValues.find('.valueShortTermSuspensionsWhiteRate').val();
	var removeShortTermSuspensionsWhiteRate = $formValues.find('.removeShortTermSuspensionsWhiteRate').val() === 'true';
	var setShortTermSuspensionsWhiteRate = removeShortTermSuspensionsWhiteRate ? null : $formValues.find('.setShortTermSuspensionsWhiteRate').val();
	var addShortTermSuspensionsWhiteRate = $formValues.find('.addShortTermSuspensionsWhiteRate').val();
	if(removeShortTermSuspensionsWhiteRate || setShortTermSuspensionsWhiteRate != null && setShortTermSuspensionsWhiteRate !== '')
		vals['setShortTermSuspensionsWhiteRate'] = setShortTermSuspensionsWhiteRate;
	if(addShortTermSuspensionsWhiteRate != null && addShortTermSuspensionsWhiteRate !== '')
		vals['addShortTermSuspensionsWhiteRate'] = addShortTermSuspensionsWhiteRate;
	var removeShortTermSuspensionsWhiteRate = $formValues.find('.removeShortTermSuspensionsWhiteRate').val();
	if(removeShortTermSuspensionsWhiteRate != null && removeShortTermSuspensionsWhiteRate !== '')
		vals['removeShortTermSuspensionsWhiteRate'] = removeShortTermSuspensionsWhiteRate;

	var valueShortTermSuspensionsAllRate = $formValues.find('.valueShortTermSuspensionsAllRate').val();
	var removeShortTermSuspensionsAllRate = $formValues.find('.removeShortTermSuspensionsAllRate').val() === 'true';
	var setShortTermSuspensionsAllRate = removeShortTermSuspensionsAllRate ? null : $formValues.find('.setShortTermSuspensionsAllRate').val();
	var addShortTermSuspensionsAllRate = $formValues.find('.addShortTermSuspensionsAllRate').val();
	if(removeShortTermSuspensionsAllRate || setShortTermSuspensionsAllRate != null && setShortTermSuspensionsAllRate !== '')
		vals['setShortTermSuspensionsAllRate'] = setShortTermSuspensionsAllRate;
	if(addShortTermSuspensionsAllRate != null && addShortTermSuspensionsAllRate !== '')
		vals['addShortTermSuspensionsAllRate'] = addShortTermSuspensionsAllRate;
	var removeShortTermSuspensionsAllRate = $formValues.find('.removeShortTermSuspensionsAllRate').val();
	if(removeShortTermSuspensionsAllRate != null && removeShortTermSuspensionsAllRate !== '')
		vals['removeShortTermSuspensionsAllRate'] = removeShortTermSuspensionsAllRate;

	var valueShortTermSuspensionsBlackVsWhite = $formValues.find('.valueShortTermSuspensionsBlackVsWhite').val();
	var removeShortTermSuspensionsBlackVsWhite = $formValues.find('.removeShortTermSuspensionsBlackVsWhite').val() === 'true';
	var setShortTermSuspensionsBlackVsWhite = removeShortTermSuspensionsBlackVsWhite ? null : $formValues.find('.setShortTermSuspensionsBlackVsWhite').val();
	var addShortTermSuspensionsBlackVsWhite = $formValues.find('.addShortTermSuspensionsBlackVsWhite').val();
	if(removeShortTermSuspensionsBlackVsWhite || setShortTermSuspensionsBlackVsWhite != null && setShortTermSuspensionsBlackVsWhite !== '')
		vals['setShortTermSuspensionsBlackVsWhite'] = setShortTermSuspensionsBlackVsWhite;
	if(addShortTermSuspensionsBlackVsWhite != null && addShortTermSuspensionsBlackVsWhite !== '')
		vals['addShortTermSuspensionsBlackVsWhite'] = addShortTermSuspensionsBlackVsWhite;
	var removeShortTermSuspensionsBlackVsWhite = $formValues.find('.removeShortTermSuspensionsBlackVsWhite').val();
	if(removeShortTermSuspensionsBlackVsWhite != null && removeShortTermSuspensionsBlackVsWhite !== '')
		vals['removeShortTermSuspensionsBlackVsWhite'] = removeShortTermSuspensionsBlackVsWhite;

	var valueExamsCollegeReadyGrades38OverallPercent = $formValues.find('.valueExamsCollegeReadyGrades38OverallPercent').val();
	var removeExamsCollegeReadyGrades38OverallPercent = $formValues.find('.removeExamsCollegeReadyGrades38OverallPercent').val() === 'true';
	var setExamsCollegeReadyGrades38OverallPercent = removeExamsCollegeReadyGrades38OverallPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38OverallPercent').val();
	var addExamsCollegeReadyGrades38OverallPercent = $formValues.find('.addExamsCollegeReadyGrades38OverallPercent').val();
	if(removeExamsCollegeReadyGrades38OverallPercent || setExamsCollegeReadyGrades38OverallPercent != null && setExamsCollegeReadyGrades38OverallPercent !== '')
		vals['setExamsCollegeReadyGrades38OverallPercent'] = setExamsCollegeReadyGrades38OverallPercent;
	if(addExamsCollegeReadyGrades38OverallPercent != null && addExamsCollegeReadyGrades38OverallPercent !== '')
		vals['addExamsCollegeReadyGrades38OverallPercent'] = addExamsCollegeReadyGrades38OverallPercent;
	var removeExamsCollegeReadyGrades38OverallPercent = $formValues.find('.removeExamsCollegeReadyGrades38OverallPercent').val();
	if(removeExamsCollegeReadyGrades38OverallPercent != null && removeExamsCollegeReadyGrades38OverallPercent !== '')
		vals['removeExamsCollegeReadyGrades38OverallPercent'] = removeExamsCollegeReadyGrades38OverallPercent;

	var valueExamsCollegeReadyGrades38IndigenousPercent = $formValues.find('.valueExamsCollegeReadyGrades38IndigenousPercent').val();
	var removeExamsCollegeReadyGrades38IndigenousPercent = $formValues.find('.removeExamsCollegeReadyGrades38IndigenousPercent').val() === 'true';
	var setExamsCollegeReadyGrades38IndigenousPercent = removeExamsCollegeReadyGrades38IndigenousPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38IndigenousPercent').val();
	var addExamsCollegeReadyGrades38IndigenousPercent = $formValues.find('.addExamsCollegeReadyGrades38IndigenousPercent').val();
	if(removeExamsCollegeReadyGrades38IndigenousPercent || setExamsCollegeReadyGrades38IndigenousPercent != null && setExamsCollegeReadyGrades38IndigenousPercent !== '')
		vals['setExamsCollegeReadyGrades38IndigenousPercent'] = setExamsCollegeReadyGrades38IndigenousPercent;
	if(addExamsCollegeReadyGrades38IndigenousPercent != null && addExamsCollegeReadyGrades38IndigenousPercent !== '')
		vals['addExamsCollegeReadyGrades38IndigenousPercent'] = addExamsCollegeReadyGrades38IndigenousPercent;
	var removeExamsCollegeReadyGrades38IndigenousPercent = $formValues.find('.removeExamsCollegeReadyGrades38IndigenousPercent').val();
	if(removeExamsCollegeReadyGrades38IndigenousPercent != null && removeExamsCollegeReadyGrades38IndigenousPercent !== '')
		vals['removeExamsCollegeReadyGrades38IndigenousPercent'] = removeExamsCollegeReadyGrades38IndigenousPercent;

	var valueExamsCollegeReadyGrades38AsianPercent = $formValues.find('.valueExamsCollegeReadyGrades38AsianPercent').val();
	var removeExamsCollegeReadyGrades38AsianPercent = $formValues.find('.removeExamsCollegeReadyGrades38AsianPercent').val() === 'true';
	var setExamsCollegeReadyGrades38AsianPercent = removeExamsCollegeReadyGrades38AsianPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38AsianPercent').val();
	var addExamsCollegeReadyGrades38AsianPercent = $formValues.find('.addExamsCollegeReadyGrades38AsianPercent').val();
	if(removeExamsCollegeReadyGrades38AsianPercent || setExamsCollegeReadyGrades38AsianPercent != null && setExamsCollegeReadyGrades38AsianPercent !== '')
		vals['setExamsCollegeReadyGrades38AsianPercent'] = setExamsCollegeReadyGrades38AsianPercent;
	if(addExamsCollegeReadyGrades38AsianPercent != null && addExamsCollegeReadyGrades38AsianPercent !== '')
		vals['addExamsCollegeReadyGrades38AsianPercent'] = addExamsCollegeReadyGrades38AsianPercent;
	var removeExamsCollegeReadyGrades38AsianPercent = $formValues.find('.removeExamsCollegeReadyGrades38AsianPercent').val();
	if(removeExamsCollegeReadyGrades38AsianPercent != null && removeExamsCollegeReadyGrades38AsianPercent !== '')
		vals['removeExamsCollegeReadyGrades38AsianPercent'] = removeExamsCollegeReadyGrades38AsianPercent;

	var valueExamsCollegeReadyGrades38BlackPercent = $formValues.find('.valueExamsCollegeReadyGrades38BlackPercent').val();
	var removeExamsCollegeReadyGrades38BlackPercent = $formValues.find('.removeExamsCollegeReadyGrades38BlackPercent').val() === 'true';
	var setExamsCollegeReadyGrades38BlackPercent = removeExamsCollegeReadyGrades38BlackPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38BlackPercent').val();
	var addExamsCollegeReadyGrades38BlackPercent = $formValues.find('.addExamsCollegeReadyGrades38BlackPercent').val();
	if(removeExamsCollegeReadyGrades38BlackPercent || setExamsCollegeReadyGrades38BlackPercent != null && setExamsCollegeReadyGrades38BlackPercent !== '')
		vals['setExamsCollegeReadyGrades38BlackPercent'] = setExamsCollegeReadyGrades38BlackPercent;
	if(addExamsCollegeReadyGrades38BlackPercent != null && addExamsCollegeReadyGrades38BlackPercent !== '')
		vals['addExamsCollegeReadyGrades38BlackPercent'] = addExamsCollegeReadyGrades38BlackPercent;
	var removeExamsCollegeReadyGrades38BlackPercent = $formValues.find('.removeExamsCollegeReadyGrades38BlackPercent').val();
	if(removeExamsCollegeReadyGrades38BlackPercent != null && removeExamsCollegeReadyGrades38BlackPercent !== '')
		vals['removeExamsCollegeReadyGrades38BlackPercent'] = removeExamsCollegeReadyGrades38BlackPercent;

	var valueExamsCollegeReadyGrades38LatinxPercent = $formValues.find('.valueExamsCollegeReadyGrades38LatinxPercent').val();
	var removeExamsCollegeReadyGrades38LatinxPercent = $formValues.find('.removeExamsCollegeReadyGrades38LatinxPercent').val() === 'true';
	var setExamsCollegeReadyGrades38LatinxPercent = removeExamsCollegeReadyGrades38LatinxPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38LatinxPercent').val();
	var addExamsCollegeReadyGrades38LatinxPercent = $formValues.find('.addExamsCollegeReadyGrades38LatinxPercent').val();
	if(removeExamsCollegeReadyGrades38LatinxPercent || setExamsCollegeReadyGrades38LatinxPercent != null && setExamsCollegeReadyGrades38LatinxPercent !== '')
		vals['setExamsCollegeReadyGrades38LatinxPercent'] = setExamsCollegeReadyGrades38LatinxPercent;
	if(addExamsCollegeReadyGrades38LatinxPercent != null && addExamsCollegeReadyGrades38LatinxPercent !== '')
		vals['addExamsCollegeReadyGrades38LatinxPercent'] = addExamsCollegeReadyGrades38LatinxPercent;
	var removeExamsCollegeReadyGrades38LatinxPercent = $formValues.find('.removeExamsCollegeReadyGrades38LatinxPercent').val();
	if(removeExamsCollegeReadyGrades38LatinxPercent != null && removeExamsCollegeReadyGrades38LatinxPercent !== '')
		vals['removeExamsCollegeReadyGrades38LatinxPercent'] = removeExamsCollegeReadyGrades38LatinxPercent;

	var valueExamsCollegeReadyGrades38MultiRacialPercent = $formValues.find('.valueExamsCollegeReadyGrades38MultiRacialPercent').val();
	var removeExamsCollegeReadyGrades38MultiRacialPercent = $formValues.find('.removeExamsCollegeReadyGrades38MultiRacialPercent').val() === 'true';
	var setExamsCollegeReadyGrades38MultiRacialPercent = removeExamsCollegeReadyGrades38MultiRacialPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38MultiRacialPercent').val();
	var addExamsCollegeReadyGrades38MultiRacialPercent = $formValues.find('.addExamsCollegeReadyGrades38MultiRacialPercent').val();
	if(removeExamsCollegeReadyGrades38MultiRacialPercent || setExamsCollegeReadyGrades38MultiRacialPercent != null && setExamsCollegeReadyGrades38MultiRacialPercent !== '')
		vals['setExamsCollegeReadyGrades38MultiRacialPercent'] = setExamsCollegeReadyGrades38MultiRacialPercent;
	if(addExamsCollegeReadyGrades38MultiRacialPercent != null && addExamsCollegeReadyGrades38MultiRacialPercent !== '')
		vals['addExamsCollegeReadyGrades38MultiRacialPercent'] = addExamsCollegeReadyGrades38MultiRacialPercent;
	var removeExamsCollegeReadyGrades38MultiRacialPercent = $formValues.find('.removeExamsCollegeReadyGrades38MultiRacialPercent').val();
	if(removeExamsCollegeReadyGrades38MultiRacialPercent != null && removeExamsCollegeReadyGrades38MultiRacialPercent !== '')
		vals['removeExamsCollegeReadyGrades38MultiRacialPercent'] = removeExamsCollegeReadyGrades38MultiRacialPercent;

	var valueExamsCollegeReadyGrades38PacificIslanderPercent = $formValues.find('.valueExamsCollegeReadyGrades38PacificIslanderPercent').val();
	var removeExamsCollegeReadyGrades38PacificIslanderPercent = $formValues.find('.removeExamsCollegeReadyGrades38PacificIslanderPercent').val() === 'true';
	var setExamsCollegeReadyGrades38PacificIslanderPercent = removeExamsCollegeReadyGrades38PacificIslanderPercent ? null : $formValues.find('.setExamsCollegeReadyGrades38PacificIslanderPercent').val();
	var addExamsCollegeReadyGrades38PacificIslanderPercent = $formValues.find('.addExamsCollegeReadyGrades38PacificIslanderPercent').val();
	if(removeExamsCollegeReadyGrades38PacificIslanderPercent || setExamsCollegeReadyGrades38PacificIslanderPercent != null && setExamsCollegeReadyGrades38PacificIslanderPercent !== '')
		vals['setExamsCollegeReadyGrades38PacificIslanderPercent'] = setExamsCollegeReadyGrades38PacificIslanderPercent;
	if(addExamsCollegeReadyGrades38PacificIslanderPercent != null && addExamsCollegeReadyGrades38PacificIslanderPercent !== '')
		vals['addExamsCollegeReadyGrades38PacificIslanderPercent'] = addExamsCollegeReadyGrades38PacificIslanderPercent;
	var removeExamsCollegeReadyGrades38PacificIslanderPercent = $formValues.find('.removeExamsCollegeReadyGrades38PacificIslanderPercent').val();
	if(removeExamsCollegeReadyGrades38PacificIslanderPercent != null && removeExamsCollegeReadyGrades38PacificIslanderPercent !== '')
		vals['removeExamsCollegeReadyGrades38PacificIslanderPercent'] = removeExamsCollegeReadyGrades38PacificIslanderPercent;

	var valueExamsCollegeReadyGrades38WhitePercent = $formValues.find('.valueExamsCollegeReadyGrades38WhitePercent').val();
	var removeExamsCollegeReadyGrades38WhitePercent = $formValues.find('.removeExamsCollegeReadyGrades38WhitePercent').val() === 'true';
	var setExamsCollegeReadyGrades38WhitePercent = removeExamsCollegeReadyGrades38WhitePercent ? null : $formValues.find('.setExamsCollegeReadyGrades38WhitePercent').val();
	var addExamsCollegeReadyGrades38WhitePercent = $formValues.find('.addExamsCollegeReadyGrades38WhitePercent').val();
	if(removeExamsCollegeReadyGrades38WhitePercent || setExamsCollegeReadyGrades38WhitePercent != null && setExamsCollegeReadyGrades38WhitePercent !== '')
		vals['setExamsCollegeReadyGrades38WhitePercent'] = setExamsCollegeReadyGrades38WhitePercent;
	if(addExamsCollegeReadyGrades38WhitePercent != null && addExamsCollegeReadyGrades38WhitePercent !== '')
		vals['addExamsCollegeReadyGrades38WhitePercent'] = addExamsCollegeReadyGrades38WhitePercent;
	var removeExamsCollegeReadyGrades38WhitePercent = $formValues.find('.removeExamsCollegeReadyGrades38WhitePercent').val();
	if(removeExamsCollegeReadyGrades38WhitePercent != null && removeExamsCollegeReadyGrades38WhitePercent !== '')
		vals['removeExamsCollegeReadyGrades38WhitePercent'] = removeExamsCollegeReadyGrades38WhitePercent;

	var valueExamsCollegeReadyGrades912OverallPercent = $formValues.find('.valueExamsCollegeReadyGrades912OverallPercent').val();
	var removeExamsCollegeReadyGrades912OverallPercent = $formValues.find('.removeExamsCollegeReadyGrades912OverallPercent').val() === 'true';
	var setExamsCollegeReadyGrades912OverallPercent = removeExamsCollegeReadyGrades912OverallPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912OverallPercent').val();
	var addExamsCollegeReadyGrades912OverallPercent = $formValues.find('.addExamsCollegeReadyGrades912OverallPercent').val();
	if(removeExamsCollegeReadyGrades912OverallPercent || setExamsCollegeReadyGrades912OverallPercent != null && setExamsCollegeReadyGrades912OverallPercent !== '')
		vals['setExamsCollegeReadyGrades912OverallPercent'] = setExamsCollegeReadyGrades912OverallPercent;
	if(addExamsCollegeReadyGrades912OverallPercent != null && addExamsCollegeReadyGrades912OverallPercent !== '')
		vals['addExamsCollegeReadyGrades912OverallPercent'] = addExamsCollegeReadyGrades912OverallPercent;
	var removeExamsCollegeReadyGrades912OverallPercent = $formValues.find('.removeExamsCollegeReadyGrades912OverallPercent').val();
	if(removeExamsCollegeReadyGrades912OverallPercent != null && removeExamsCollegeReadyGrades912OverallPercent !== '')
		vals['removeExamsCollegeReadyGrades912OverallPercent'] = removeExamsCollegeReadyGrades912OverallPercent;

	var valueExamsCollegeReadyGrades912IndigenousPercent = $formValues.find('.valueExamsCollegeReadyGrades912IndigenousPercent').val();
	var removeExamsCollegeReadyGrades912IndigenousPercent = $formValues.find('.removeExamsCollegeReadyGrades912IndigenousPercent').val() === 'true';
	var setExamsCollegeReadyGrades912IndigenousPercent = removeExamsCollegeReadyGrades912IndigenousPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912IndigenousPercent').val();
	var addExamsCollegeReadyGrades912IndigenousPercent = $formValues.find('.addExamsCollegeReadyGrades912IndigenousPercent').val();
	if(removeExamsCollegeReadyGrades912IndigenousPercent || setExamsCollegeReadyGrades912IndigenousPercent != null && setExamsCollegeReadyGrades912IndigenousPercent !== '')
		vals['setExamsCollegeReadyGrades912IndigenousPercent'] = setExamsCollegeReadyGrades912IndigenousPercent;
	if(addExamsCollegeReadyGrades912IndigenousPercent != null && addExamsCollegeReadyGrades912IndigenousPercent !== '')
		vals['addExamsCollegeReadyGrades912IndigenousPercent'] = addExamsCollegeReadyGrades912IndigenousPercent;
	var removeExamsCollegeReadyGrades912IndigenousPercent = $formValues.find('.removeExamsCollegeReadyGrades912IndigenousPercent').val();
	if(removeExamsCollegeReadyGrades912IndigenousPercent != null && removeExamsCollegeReadyGrades912IndigenousPercent !== '')
		vals['removeExamsCollegeReadyGrades912IndigenousPercent'] = removeExamsCollegeReadyGrades912IndigenousPercent;

	var valueExamsCollegeReadyGrades912AsianPercent = $formValues.find('.valueExamsCollegeReadyGrades912AsianPercent').val();
	var removeExamsCollegeReadyGrades912AsianPercent = $formValues.find('.removeExamsCollegeReadyGrades912AsianPercent').val() === 'true';
	var setExamsCollegeReadyGrades912AsianPercent = removeExamsCollegeReadyGrades912AsianPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912AsianPercent').val();
	var addExamsCollegeReadyGrades912AsianPercent = $formValues.find('.addExamsCollegeReadyGrades912AsianPercent').val();
	if(removeExamsCollegeReadyGrades912AsianPercent || setExamsCollegeReadyGrades912AsianPercent != null && setExamsCollegeReadyGrades912AsianPercent !== '')
		vals['setExamsCollegeReadyGrades912AsianPercent'] = setExamsCollegeReadyGrades912AsianPercent;
	if(addExamsCollegeReadyGrades912AsianPercent != null && addExamsCollegeReadyGrades912AsianPercent !== '')
		vals['addExamsCollegeReadyGrades912AsianPercent'] = addExamsCollegeReadyGrades912AsianPercent;
	var removeExamsCollegeReadyGrades912AsianPercent = $formValues.find('.removeExamsCollegeReadyGrades912AsianPercent').val();
	if(removeExamsCollegeReadyGrades912AsianPercent != null && removeExamsCollegeReadyGrades912AsianPercent !== '')
		vals['removeExamsCollegeReadyGrades912AsianPercent'] = removeExamsCollegeReadyGrades912AsianPercent;

	var valueExamsCollegeReadyGrades912BlackPercent = $formValues.find('.valueExamsCollegeReadyGrades912BlackPercent').val();
	var removeExamsCollegeReadyGrades912BlackPercent = $formValues.find('.removeExamsCollegeReadyGrades912BlackPercent').val() === 'true';
	var setExamsCollegeReadyGrades912BlackPercent = removeExamsCollegeReadyGrades912BlackPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912BlackPercent').val();
	var addExamsCollegeReadyGrades912BlackPercent = $formValues.find('.addExamsCollegeReadyGrades912BlackPercent').val();
	if(removeExamsCollegeReadyGrades912BlackPercent || setExamsCollegeReadyGrades912BlackPercent != null && setExamsCollegeReadyGrades912BlackPercent !== '')
		vals['setExamsCollegeReadyGrades912BlackPercent'] = setExamsCollegeReadyGrades912BlackPercent;
	if(addExamsCollegeReadyGrades912BlackPercent != null && addExamsCollegeReadyGrades912BlackPercent !== '')
		vals['addExamsCollegeReadyGrades912BlackPercent'] = addExamsCollegeReadyGrades912BlackPercent;
	var removeExamsCollegeReadyGrades912BlackPercent = $formValues.find('.removeExamsCollegeReadyGrades912BlackPercent').val();
	if(removeExamsCollegeReadyGrades912BlackPercent != null && removeExamsCollegeReadyGrades912BlackPercent !== '')
		vals['removeExamsCollegeReadyGrades912BlackPercent'] = removeExamsCollegeReadyGrades912BlackPercent;

	var valueExamsCollegeReadyGrades912LatinxPercent = $formValues.find('.valueExamsCollegeReadyGrades912LatinxPercent').val();
	var removeExamsCollegeReadyGrades912LatinxPercent = $formValues.find('.removeExamsCollegeReadyGrades912LatinxPercent').val() === 'true';
	var setExamsCollegeReadyGrades912LatinxPercent = removeExamsCollegeReadyGrades912LatinxPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912LatinxPercent').val();
	var addExamsCollegeReadyGrades912LatinxPercent = $formValues.find('.addExamsCollegeReadyGrades912LatinxPercent').val();
	if(removeExamsCollegeReadyGrades912LatinxPercent || setExamsCollegeReadyGrades912LatinxPercent != null && setExamsCollegeReadyGrades912LatinxPercent !== '')
		vals['setExamsCollegeReadyGrades912LatinxPercent'] = setExamsCollegeReadyGrades912LatinxPercent;
	if(addExamsCollegeReadyGrades912LatinxPercent != null && addExamsCollegeReadyGrades912LatinxPercent !== '')
		vals['addExamsCollegeReadyGrades912LatinxPercent'] = addExamsCollegeReadyGrades912LatinxPercent;
	var removeExamsCollegeReadyGrades912LatinxPercent = $formValues.find('.removeExamsCollegeReadyGrades912LatinxPercent').val();
	if(removeExamsCollegeReadyGrades912LatinxPercent != null && removeExamsCollegeReadyGrades912LatinxPercent !== '')
		vals['removeExamsCollegeReadyGrades912LatinxPercent'] = removeExamsCollegeReadyGrades912LatinxPercent;

	var valueExamsCollegeReadyGrades912MultiRacialPercent = $formValues.find('.valueExamsCollegeReadyGrades912MultiRacialPercent').val();
	var removeExamsCollegeReadyGrades912MultiRacialPercent = $formValues.find('.removeExamsCollegeReadyGrades912MultiRacialPercent').val() === 'true';
	var setExamsCollegeReadyGrades912MultiRacialPercent = removeExamsCollegeReadyGrades912MultiRacialPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912MultiRacialPercent').val();
	var addExamsCollegeReadyGrades912MultiRacialPercent = $formValues.find('.addExamsCollegeReadyGrades912MultiRacialPercent').val();
	if(removeExamsCollegeReadyGrades912MultiRacialPercent || setExamsCollegeReadyGrades912MultiRacialPercent != null && setExamsCollegeReadyGrades912MultiRacialPercent !== '')
		vals['setExamsCollegeReadyGrades912MultiRacialPercent'] = setExamsCollegeReadyGrades912MultiRacialPercent;
	if(addExamsCollegeReadyGrades912MultiRacialPercent != null && addExamsCollegeReadyGrades912MultiRacialPercent !== '')
		vals['addExamsCollegeReadyGrades912MultiRacialPercent'] = addExamsCollegeReadyGrades912MultiRacialPercent;
	var removeExamsCollegeReadyGrades912MultiRacialPercent = $formValues.find('.removeExamsCollegeReadyGrades912MultiRacialPercent').val();
	if(removeExamsCollegeReadyGrades912MultiRacialPercent != null && removeExamsCollegeReadyGrades912MultiRacialPercent !== '')
		vals['removeExamsCollegeReadyGrades912MultiRacialPercent'] = removeExamsCollegeReadyGrades912MultiRacialPercent;

	var valueExamsCollegeReadyGrades912PacificIslanderPercent = $formValues.find('.valueExamsCollegeReadyGrades912PacificIslanderPercent').val();
	var removeExamsCollegeReadyGrades912PacificIslanderPercent = $formValues.find('.removeExamsCollegeReadyGrades912PacificIslanderPercent').val() === 'true';
	var setExamsCollegeReadyGrades912PacificIslanderPercent = removeExamsCollegeReadyGrades912PacificIslanderPercent ? null : $formValues.find('.setExamsCollegeReadyGrades912PacificIslanderPercent').val();
	var addExamsCollegeReadyGrades912PacificIslanderPercent = $formValues.find('.addExamsCollegeReadyGrades912PacificIslanderPercent').val();
	if(removeExamsCollegeReadyGrades912PacificIslanderPercent || setExamsCollegeReadyGrades912PacificIslanderPercent != null && setExamsCollegeReadyGrades912PacificIslanderPercent !== '')
		vals['setExamsCollegeReadyGrades912PacificIslanderPercent'] = setExamsCollegeReadyGrades912PacificIslanderPercent;
	if(addExamsCollegeReadyGrades912PacificIslanderPercent != null && addExamsCollegeReadyGrades912PacificIslanderPercent !== '')
		vals['addExamsCollegeReadyGrades912PacificIslanderPercent'] = addExamsCollegeReadyGrades912PacificIslanderPercent;
	var removeExamsCollegeReadyGrades912PacificIslanderPercent = $formValues.find('.removeExamsCollegeReadyGrades912PacificIslanderPercent').val();
	if(removeExamsCollegeReadyGrades912PacificIslanderPercent != null && removeExamsCollegeReadyGrades912PacificIslanderPercent !== '')
		vals['removeExamsCollegeReadyGrades912PacificIslanderPercent'] = removeExamsCollegeReadyGrades912PacificIslanderPercent;

	var valueExamsCollegeReadyGrades912WhitePercent = $formValues.find('.valueExamsCollegeReadyGrades912WhitePercent').val();
	var removeExamsCollegeReadyGrades912WhitePercent = $formValues.find('.removeExamsCollegeReadyGrades912WhitePercent').val() === 'true';
	var setExamsCollegeReadyGrades912WhitePercent = removeExamsCollegeReadyGrades912WhitePercent ? null : $formValues.find('.setExamsCollegeReadyGrades912WhitePercent').val();
	var addExamsCollegeReadyGrades912WhitePercent = $formValues.find('.addExamsCollegeReadyGrades912WhitePercent').val();
	if(removeExamsCollegeReadyGrades912WhitePercent || setExamsCollegeReadyGrades912WhitePercent != null && setExamsCollegeReadyGrades912WhitePercent !== '')
		vals['setExamsCollegeReadyGrades912WhitePercent'] = setExamsCollegeReadyGrades912WhitePercent;
	if(addExamsCollegeReadyGrades912WhitePercent != null && addExamsCollegeReadyGrades912WhitePercent !== '')
		vals['addExamsCollegeReadyGrades912WhitePercent'] = addExamsCollegeReadyGrades912WhitePercent;
	var removeExamsCollegeReadyGrades912WhitePercent = $formValues.find('.removeExamsCollegeReadyGrades912WhitePercent').val();
	if(removeExamsCollegeReadyGrades912WhitePercent != null && removeExamsCollegeReadyGrades912WhitePercent !== '')
		vals['removeExamsCollegeReadyGrades912WhitePercent'] = removeExamsCollegeReadyGrades912WhitePercent;

	var valueGraduateWithin4YearsOverallPercent = $formValues.find('.valueGraduateWithin4YearsOverallPercent').val();
	var removeGraduateWithin4YearsOverallPercent = $formValues.find('.removeGraduateWithin4YearsOverallPercent').val() === 'true';
	var setGraduateWithin4YearsOverallPercent = removeGraduateWithin4YearsOverallPercent ? null : $formValues.find('.setGraduateWithin4YearsOverallPercent').val();
	var addGraduateWithin4YearsOverallPercent = $formValues.find('.addGraduateWithin4YearsOverallPercent').val();
	if(removeGraduateWithin4YearsOverallPercent || setGraduateWithin4YearsOverallPercent != null && setGraduateWithin4YearsOverallPercent !== '')
		vals['setGraduateWithin4YearsOverallPercent'] = setGraduateWithin4YearsOverallPercent;
	if(addGraduateWithin4YearsOverallPercent != null && addGraduateWithin4YearsOverallPercent !== '')
		vals['addGraduateWithin4YearsOverallPercent'] = addGraduateWithin4YearsOverallPercent;
	var removeGraduateWithin4YearsOverallPercent = $formValues.find('.removeGraduateWithin4YearsOverallPercent').val();
	if(removeGraduateWithin4YearsOverallPercent != null && removeGraduateWithin4YearsOverallPercent !== '')
		vals['removeGraduateWithin4YearsOverallPercent'] = removeGraduateWithin4YearsOverallPercent;

	var valueGraduateWithin4YearsIndigenousPercent = $formValues.find('.valueGraduateWithin4YearsIndigenousPercent').val();
	var removeGraduateWithin4YearsIndigenousPercent = $formValues.find('.removeGraduateWithin4YearsIndigenousPercent').val() === 'true';
	var setGraduateWithin4YearsIndigenousPercent = removeGraduateWithin4YearsIndigenousPercent ? null : $formValues.find('.setGraduateWithin4YearsIndigenousPercent').val();
	var addGraduateWithin4YearsIndigenousPercent = $formValues.find('.addGraduateWithin4YearsIndigenousPercent').val();
	if(removeGraduateWithin4YearsIndigenousPercent || setGraduateWithin4YearsIndigenousPercent != null && setGraduateWithin4YearsIndigenousPercent !== '')
		vals['setGraduateWithin4YearsIndigenousPercent'] = setGraduateWithin4YearsIndigenousPercent;
	if(addGraduateWithin4YearsIndigenousPercent != null && addGraduateWithin4YearsIndigenousPercent !== '')
		vals['addGraduateWithin4YearsIndigenousPercent'] = addGraduateWithin4YearsIndigenousPercent;
	var removeGraduateWithin4YearsIndigenousPercent = $formValues.find('.removeGraduateWithin4YearsIndigenousPercent').val();
	if(removeGraduateWithin4YearsIndigenousPercent != null && removeGraduateWithin4YearsIndigenousPercent !== '')
		vals['removeGraduateWithin4YearsIndigenousPercent'] = removeGraduateWithin4YearsIndigenousPercent;

	var valueGraduateWithin4YearsAsianPercent = $formValues.find('.valueGraduateWithin4YearsAsianPercent').val();
	var removeGraduateWithin4YearsAsianPercent = $formValues.find('.removeGraduateWithin4YearsAsianPercent').val() === 'true';
	var setGraduateWithin4YearsAsianPercent = removeGraduateWithin4YearsAsianPercent ? null : $formValues.find('.setGraduateWithin4YearsAsianPercent').val();
	var addGraduateWithin4YearsAsianPercent = $formValues.find('.addGraduateWithin4YearsAsianPercent').val();
	if(removeGraduateWithin4YearsAsianPercent || setGraduateWithin4YearsAsianPercent != null && setGraduateWithin4YearsAsianPercent !== '')
		vals['setGraduateWithin4YearsAsianPercent'] = setGraduateWithin4YearsAsianPercent;
	if(addGraduateWithin4YearsAsianPercent != null && addGraduateWithin4YearsAsianPercent !== '')
		vals['addGraduateWithin4YearsAsianPercent'] = addGraduateWithin4YearsAsianPercent;
	var removeGraduateWithin4YearsAsianPercent = $formValues.find('.removeGraduateWithin4YearsAsianPercent').val();
	if(removeGraduateWithin4YearsAsianPercent != null && removeGraduateWithin4YearsAsianPercent !== '')
		vals['removeGraduateWithin4YearsAsianPercent'] = removeGraduateWithin4YearsAsianPercent;

	var valueGraduateWithin4YearsBlackPercent = $formValues.find('.valueGraduateWithin4YearsBlackPercent').val();
	var removeGraduateWithin4YearsBlackPercent = $formValues.find('.removeGraduateWithin4YearsBlackPercent').val() === 'true';
	var setGraduateWithin4YearsBlackPercent = removeGraduateWithin4YearsBlackPercent ? null : $formValues.find('.setGraduateWithin4YearsBlackPercent').val();
	var addGraduateWithin4YearsBlackPercent = $formValues.find('.addGraduateWithin4YearsBlackPercent').val();
	if(removeGraduateWithin4YearsBlackPercent || setGraduateWithin4YearsBlackPercent != null && setGraduateWithin4YearsBlackPercent !== '')
		vals['setGraduateWithin4YearsBlackPercent'] = setGraduateWithin4YearsBlackPercent;
	if(addGraduateWithin4YearsBlackPercent != null && addGraduateWithin4YearsBlackPercent !== '')
		vals['addGraduateWithin4YearsBlackPercent'] = addGraduateWithin4YearsBlackPercent;
	var removeGraduateWithin4YearsBlackPercent = $formValues.find('.removeGraduateWithin4YearsBlackPercent').val();
	if(removeGraduateWithin4YearsBlackPercent != null && removeGraduateWithin4YearsBlackPercent !== '')
		vals['removeGraduateWithin4YearsBlackPercent'] = removeGraduateWithin4YearsBlackPercent;

	var valueGraduateWithin4YearsLatinxPercent = $formValues.find('.valueGraduateWithin4YearsLatinxPercent').val();
	var removeGraduateWithin4YearsLatinxPercent = $formValues.find('.removeGraduateWithin4YearsLatinxPercent').val() === 'true';
	var setGraduateWithin4YearsLatinxPercent = removeGraduateWithin4YearsLatinxPercent ? null : $formValues.find('.setGraduateWithin4YearsLatinxPercent').val();
	var addGraduateWithin4YearsLatinxPercent = $formValues.find('.addGraduateWithin4YearsLatinxPercent').val();
	if(removeGraduateWithin4YearsLatinxPercent || setGraduateWithin4YearsLatinxPercent != null && setGraduateWithin4YearsLatinxPercent !== '')
		vals['setGraduateWithin4YearsLatinxPercent'] = setGraduateWithin4YearsLatinxPercent;
	if(addGraduateWithin4YearsLatinxPercent != null && addGraduateWithin4YearsLatinxPercent !== '')
		vals['addGraduateWithin4YearsLatinxPercent'] = addGraduateWithin4YearsLatinxPercent;
	var removeGraduateWithin4YearsLatinxPercent = $formValues.find('.removeGraduateWithin4YearsLatinxPercent').val();
	if(removeGraduateWithin4YearsLatinxPercent != null && removeGraduateWithin4YearsLatinxPercent !== '')
		vals['removeGraduateWithin4YearsLatinxPercent'] = removeGraduateWithin4YearsLatinxPercent;

	var valueGraduateWithin4YearsMultiRacialPercent = $formValues.find('.valueGraduateWithin4YearsMultiRacialPercent').val();
	var removeGraduateWithin4YearsMultiRacialPercent = $formValues.find('.removeGraduateWithin4YearsMultiRacialPercent').val() === 'true';
	var setGraduateWithin4YearsMultiRacialPercent = removeGraduateWithin4YearsMultiRacialPercent ? null : $formValues.find('.setGraduateWithin4YearsMultiRacialPercent').val();
	var addGraduateWithin4YearsMultiRacialPercent = $formValues.find('.addGraduateWithin4YearsMultiRacialPercent').val();
	if(removeGraduateWithin4YearsMultiRacialPercent || setGraduateWithin4YearsMultiRacialPercent != null && setGraduateWithin4YearsMultiRacialPercent !== '')
		vals['setGraduateWithin4YearsMultiRacialPercent'] = setGraduateWithin4YearsMultiRacialPercent;
	if(addGraduateWithin4YearsMultiRacialPercent != null && addGraduateWithin4YearsMultiRacialPercent !== '')
		vals['addGraduateWithin4YearsMultiRacialPercent'] = addGraduateWithin4YearsMultiRacialPercent;
	var removeGraduateWithin4YearsMultiRacialPercent = $formValues.find('.removeGraduateWithin4YearsMultiRacialPercent').val();
	if(removeGraduateWithin4YearsMultiRacialPercent != null && removeGraduateWithin4YearsMultiRacialPercent !== '')
		vals['removeGraduateWithin4YearsMultiRacialPercent'] = removeGraduateWithin4YearsMultiRacialPercent;

	var valueGraduateWithin4YearsPacificIslanderPercent = $formValues.find('.valueGraduateWithin4YearsPacificIslanderPercent').val();
	var removeGraduateWithin4YearsPacificIslanderPercent = $formValues.find('.removeGraduateWithin4YearsPacificIslanderPercent').val() === 'true';
	var setGraduateWithin4YearsPacificIslanderPercent = removeGraduateWithin4YearsPacificIslanderPercent ? null : $formValues.find('.setGraduateWithin4YearsPacificIslanderPercent').val();
	var addGraduateWithin4YearsPacificIslanderPercent = $formValues.find('.addGraduateWithin4YearsPacificIslanderPercent').val();
	if(removeGraduateWithin4YearsPacificIslanderPercent || setGraduateWithin4YearsPacificIslanderPercent != null && setGraduateWithin4YearsPacificIslanderPercent !== '')
		vals['setGraduateWithin4YearsPacificIslanderPercent'] = setGraduateWithin4YearsPacificIslanderPercent;
	if(addGraduateWithin4YearsPacificIslanderPercent != null && addGraduateWithin4YearsPacificIslanderPercent !== '')
		vals['addGraduateWithin4YearsPacificIslanderPercent'] = addGraduateWithin4YearsPacificIslanderPercent;
	var removeGraduateWithin4YearsPacificIslanderPercent = $formValues.find('.removeGraduateWithin4YearsPacificIslanderPercent').val();
	if(removeGraduateWithin4YearsPacificIslanderPercent != null && removeGraduateWithin4YearsPacificIslanderPercent !== '')
		vals['removeGraduateWithin4YearsPacificIslanderPercent'] = removeGraduateWithin4YearsPacificIslanderPercent;

	var valueGraduateWithin4YearsWhitePercent = $formValues.find('.valueGraduateWithin4YearsWhitePercent').val();
	var removeGraduateWithin4YearsWhitePercent = $formValues.find('.removeGraduateWithin4YearsWhitePercent').val() === 'true';
	var setGraduateWithin4YearsWhitePercent = removeGraduateWithin4YearsWhitePercent ? null : $formValues.find('.setGraduateWithin4YearsWhitePercent').val();
	var addGraduateWithin4YearsWhitePercent = $formValues.find('.addGraduateWithin4YearsWhitePercent').val();
	if(removeGraduateWithin4YearsWhitePercent || setGraduateWithin4YearsWhitePercent != null && setGraduateWithin4YearsWhitePercent !== '')
		vals['setGraduateWithin4YearsWhitePercent'] = setGraduateWithin4YearsWhitePercent;
	if(addGraduateWithin4YearsWhitePercent != null && addGraduateWithin4YearsWhitePercent !== '')
		vals['addGraduateWithin4YearsWhitePercent'] = addGraduateWithin4YearsWhitePercent;
	var removeGraduateWithin4YearsWhitePercent = $formValues.find('.removeGraduateWithin4YearsWhitePercent').val();
	if(removeGraduateWithin4YearsWhitePercent != null && removeGraduateWithin4YearsWhitePercent !== '')
		vals['removeGraduateWithin4YearsWhitePercent'] = removeGraduateWithin4YearsWhitePercent;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
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

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterPupilsIndigenousMale = $formFilters.find('.valuePupilsIndigenousMale').val();
		if(filterPupilsIndigenousMale != null && filterPupilsIndigenousMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousMale:' + filterPupilsIndigenousMale });

		var filterPupilsIndigenousFemale = $formFilters.find('.valuePupilsIndigenousFemale').val();
		if(filterPupilsIndigenousFemale != null && filterPupilsIndigenousFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousFemale:' + filterPupilsIndigenousFemale });

		var filterPupilsIndigenousTotal = $formFilters.find('.valuePupilsIndigenousTotal').val();
		if(filterPupilsIndigenousTotal != null && filterPupilsIndigenousTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousTotal:' + filterPupilsIndigenousTotal });

		var filterPupilsIndigenousPercent = $formFilters.find('.valuePupilsIndigenousPercent').val();
		if(filterPupilsIndigenousPercent != null && filterPupilsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousPercent:' + filterPupilsIndigenousPercent });

		var filterPupilsAsianMale = $formFilters.find('.valuePupilsAsianMale').val();
		if(filterPupilsAsianMale != null && filterPupilsAsianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianMale:' + filterPupilsAsianMale });

		var filterPupilsAsianFemale = $formFilters.find('.valuePupilsAsianFemale').val();
		if(filterPupilsAsianFemale != null && filterPupilsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianFemale:' + filterPupilsAsianFemale });

		var filterPupilsAsianTotal = $formFilters.find('.valuePupilsAsianTotal').val();
		if(filterPupilsAsianTotal != null && filterPupilsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianTotal:' + filterPupilsAsianTotal });

		var filterPupilsAsianPercent = $formFilters.find('.valuePupilsAsianPercent').val();
		if(filterPupilsAsianPercent != null && filterPupilsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianPercent:' + filterPupilsAsianPercent });

		var filterPupilsLatinxMale = $formFilters.find('.valuePupilsLatinxMale').val();
		if(filterPupilsLatinxMale != null && filterPupilsLatinxMale !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxMale:' + filterPupilsLatinxMale });

		var filterPupilsLatinxFemale = $formFilters.find('.valuePupilsLatinxFemale').val();
		if(filterPupilsLatinxFemale != null && filterPupilsLatinxFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxFemale:' + filterPupilsLatinxFemale });

		var filterPupilsLatinxTotal = $formFilters.find('.valuePupilsLatinxTotal').val();
		if(filterPupilsLatinxTotal != null && filterPupilsLatinxTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxTotal:' + filterPupilsLatinxTotal });

		var filterPupilsLatinxPercent = $formFilters.find('.valuePupilsLatinxPercent').val();
		if(filterPupilsLatinxPercent != null && filterPupilsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxPercent:' + filterPupilsLatinxPercent });

		var filterPupilsBlackMale = $formFilters.find('.valuePupilsBlackMale').val();
		if(filterPupilsBlackMale != null && filterPupilsBlackMale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackMale:' + filterPupilsBlackMale });

		var filterPupilsBlackFemale = $formFilters.find('.valuePupilsBlackFemale').val();
		if(filterPupilsBlackFemale != null && filterPupilsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackFemale:' + filterPupilsBlackFemale });

		var filterPupilsBlackTotal = $formFilters.find('.valuePupilsBlackTotal').val();
		if(filterPupilsBlackTotal != null && filterPupilsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackTotal:' + filterPupilsBlackTotal });

		var filterPupilsBlackPercent = $formFilters.find('.valuePupilsBlackPercent').val();
		if(filterPupilsBlackPercent != null && filterPupilsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackPercent:' + filterPupilsBlackPercent });

		var filterPupilsWhiteMale = $formFilters.find('.valuePupilsWhiteMale').val();
		if(filterPupilsWhiteMale != null && filterPupilsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteMale:' + filterPupilsWhiteMale });

		var filterPupilsWhiteFemale = $formFilters.find('.valuePupilsWhiteFemale').val();
		if(filterPupilsWhiteFemale != null && filterPupilsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteFemale:' + filterPupilsWhiteFemale });

		var filterPupilsWhiteTotal = $formFilters.find('.valuePupilsWhiteTotal').val();
		if(filterPupilsWhiteTotal != null && filterPupilsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteTotal:' + filterPupilsWhiteTotal });

		var filterPupilsWhitePercent = $formFilters.find('.valuePupilsWhitePercent').val();
		if(filterPupilsWhitePercent != null && filterPupilsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'pupilsWhitePercent:' + filterPupilsWhitePercent });

		var filterPupilsPacificIslanderMale = $formFilters.find('.valuePupilsPacificIslanderMale').val();
		if(filterPupilsPacificIslanderMale != null && filterPupilsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderMale:' + filterPupilsPacificIslanderMale });

		var filterPupilsPacificIslanderFemale = $formFilters.find('.valuePupilsPacificIslanderFemale').val();
		if(filterPupilsPacificIslanderFemale != null && filterPupilsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderFemale:' + filterPupilsPacificIslanderFemale });

		var filterPupilsPacificIslanderTotal = $formFilters.find('.valuePupilsPacificIslanderTotal').val();
		if(filterPupilsPacificIslanderTotal != null && filterPupilsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderTotal:' + filterPupilsPacificIslanderTotal });

		var filterPupilsPacificIslanderPercent = $formFilters.find('.valuePupilsPacificIslanderPercent').val();
		if(filterPupilsPacificIslanderPercent != null && filterPupilsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderPercent:' + filterPupilsPacificIslanderPercent });

		var filterPupilsMultiRacialMale = $formFilters.find('.valuePupilsMultiRacialMale').val();
		if(filterPupilsMultiRacialMale != null && filterPupilsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialMale:' + filterPupilsMultiRacialMale });

		var filterPupilsMultiRacialFemale = $formFilters.find('.valuePupilsMultiRacialFemale').val();
		if(filterPupilsMultiRacialFemale != null && filterPupilsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialFemale:' + filterPupilsMultiRacialFemale });

		var filterPupilsMultiRacialTotal = $formFilters.find('.valuePupilsMultiRacialTotal').val();
		if(filterPupilsMultiRacialTotal != null && filterPupilsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialTotal:' + filterPupilsMultiRacialTotal });

		var filterPupilsMultiRacialPercent = $formFilters.find('.valuePupilsMultiRacialPercent').val();
		if(filterPupilsMultiRacialPercent != null && filterPupilsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialPercent:' + filterPupilsMultiRacialPercent });

		var filterPupilsTotal = $formFilters.find('.valuePupilsTotal').val();
		if(filterPupilsTotal != null && filterPupilsTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsTotal:' + filterPupilsTotal });

		var filterTeachersMale = $formFilters.find('.valueTeachersMale').val();
		if(filterTeachersMale != null && filterTeachersMale !== '')
			filters.push({ name: 'fq', value: 'teachersMale:' + filterTeachersMale });

		var filterTeachersFemale = $formFilters.find('.valueTeachersFemale').val();
		if(filterTeachersFemale != null && filterTeachersFemale !== '')
			filters.push({ name: 'fq', value: 'teachersFemale:' + filterTeachersFemale });

		var filterTeachersTotal = $formFilters.find('.valueTeachersTotal').val();
		if(filterTeachersTotal != null && filterTeachersTotal !== '')
			filters.push({ name: 'fq', value: 'teachersTotal:' + filterTeachersTotal });

		var filterTeachersWhiteTotal = $formFilters.find('.valueTeachersWhiteTotal').val();
		if(filterTeachersWhiteTotal != null && filterTeachersWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'teachersWhiteTotal:' + filterTeachersWhiteTotal });

		var filterTeachersWhitePercent = $formFilters.find('.valueTeachersWhitePercent').val();
		if(filterTeachersWhitePercent != null && filterTeachersWhitePercent !== '')
			filters.push({ name: 'fq', value: 'teachersWhitePercent:' + filterTeachersWhitePercent });

		var filterTeachersBlackTotal = $formFilters.find('.valueTeachersBlackTotal').val();
		if(filterTeachersBlackTotal != null && filterTeachersBlackTotal !== '')
			filters.push({ name: 'fq', value: 'teachersBlackTotal:' + filterTeachersBlackTotal });

		var filterTeachersBlackPercent = $formFilters.find('.valueTeachersBlackPercent').val();
		if(filterTeachersBlackPercent != null && filterTeachersBlackPercent !== '')
			filters.push({ name: 'fq', value: 'teachersBlackPercent:' + filterTeachersBlackPercent });

		var filterTeachersOtherTotal = $formFilters.find('.valueTeachersOtherTotal').val();
		if(filterTeachersOtherTotal != null && filterTeachersOtherTotal !== '')
			filters.push({ name: 'fq', value: 'teachersOtherTotal:' + filterTeachersOtherTotal });

		var filterTeachersOtherPercent = $formFilters.find('.valueTeachersOtherPercent').val();
		if(filterTeachersOtherPercent != null && filterTeachersOtherPercent !== '')
			filters.push({ name: 'fq', value: 'teachersOtherPercent:' + filterTeachersOtherPercent });

		var filterDelinquentComplaintsTotal = $formFilters.find('.valueDelinquentComplaintsTotal').val();
		if(filterDelinquentComplaintsTotal != null && filterDelinquentComplaintsTotal !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsTotal:' + filterDelinquentComplaintsTotal });

		var filterDelinquentComplaintsAtSchool = $formFilters.find('.valueDelinquentComplaintsAtSchool').val();
		if(filterDelinquentComplaintsAtSchool != null && filterDelinquentComplaintsAtSchool !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchool:' + filterDelinquentComplaintsAtSchool });

		var filterDelinquentComplaintsAtSchoolPercent = $formFilters.find('.valueDelinquentComplaintsAtSchoolPercent').val();
		if(filterDelinquentComplaintsAtSchoolPercent != null && filterDelinquentComplaintsAtSchoolPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchoolPercent:' + filterDelinquentComplaintsAtSchoolPercent });

		var filterDelinquentComplaintsAsian = $formFilters.find('.valueDelinquentComplaintsAsian').val();
		if(filterDelinquentComplaintsAsian != null && filterDelinquentComplaintsAsian !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAsian:' + filterDelinquentComplaintsAsian });

		var filterDelinquentComplaintsAsianPercent = $formFilters.find('.valueDelinquentComplaintsAsianPercent').val();
		if(filterDelinquentComplaintsAsianPercent != null && filterDelinquentComplaintsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAsianPercent:' + filterDelinquentComplaintsAsianPercent });

		var filterDelinquentComplaintsBlack = $formFilters.find('.valueDelinquentComplaintsBlack').val();
		if(filterDelinquentComplaintsBlack != null && filterDelinquentComplaintsBlack !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsBlack:' + filterDelinquentComplaintsBlack });

		var filterDelinquentComplaintsBlackPercent = $formFilters.find('.valueDelinquentComplaintsBlackPercent').val();
		if(filterDelinquentComplaintsBlackPercent != null && filterDelinquentComplaintsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsBlackPercent:' + filterDelinquentComplaintsBlackPercent });

		var filterDelinquentComplaintsLatinx = $formFilters.find('.valueDelinquentComplaintsLatinx').val();
		if(filterDelinquentComplaintsLatinx != null && filterDelinquentComplaintsLatinx !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsLatinx:' + filterDelinquentComplaintsLatinx });

		var filterDelinquentComplaintsLatinxPercent = $formFilters.find('.valueDelinquentComplaintsLatinxPercent').val();
		if(filterDelinquentComplaintsLatinxPercent != null && filterDelinquentComplaintsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsLatinxPercent:' + filterDelinquentComplaintsLatinxPercent });

		var filterDelinquentComplaintsMultiRacial = $formFilters.find('.valueDelinquentComplaintsMultiRacial').val();
		if(filterDelinquentComplaintsMultiRacial != null && filterDelinquentComplaintsMultiRacial !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacial:' + filterDelinquentComplaintsMultiRacial });

		var filterDelinquentComplaintsMultiRacialPercent = $formFilters.find('.valueDelinquentComplaintsMultiRacialPercent').val();
		if(filterDelinquentComplaintsMultiRacialPercent != null && filterDelinquentComplaintsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacialPercent:' + filterDelinquentComplaintsMultiRacialPercent });

		var filterDelinquentComplaintsIndigenous = $formFilters.find('.valueDelinquentComplaintsIndigenous').val();
		if(filterDelinquentComplaintsIndigenous != null && filterDelinquentComplaintsIndigenous !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndigenous:' + filterDelinquentComplaintsIndigenous });

		var filterDelinquentComplaintsIndigenousPercent = $formFilters.find('.valueDelinquentComplaintsIndigenousPercent').val();
		if(filterDelinquentComplaintsIndigenousPercent != null && filterDelinquentComplaintsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndigenousPercent:' + filterDelinquentComplaintsIndigenousPercent });

		var filterDelinquentComplaintsWhite = $formFilters.find('.valueDelinquentComplaintsWhite').val();
		if(filterDelinquentComplaintsWhite != null && filterDelinquentComplaintsWhite !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsWhite:' + filterDelinquentComplaintsWhite });

		var filterDelinquentComplaintsWhitePercent = $formFilters.find('.valueDelinquentComplaintsWhitePercent').val();
		if(filterDelinquentComplaintsWhitePercent != null && filterDelinquentComplaintsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsWhitePercent:' + filterDelinquentComplaintsWhitePercent });

		var filterDelinquentComplaintsPacificIslander = $formFilters.find('.valueDelinquentComplaintsPacificIslander').val();
		if(filterDelinquentComplaintsPacificIslander != null && filterDelinquentComplaintsPacificIslander !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsPacificIslander:' + filterDelinquentComplaintsPacificIslander });

		var filterDelinquentComplaintsPacificIslanderPercent = $formFilters.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
		if(filterDelinquentComplaintsPacificIslanderPercent != null && filterDelinquentComplaintsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsPacificIslanderPercent:' + filterDelinquentComplaintsPacificIslanderPercent });

		var filterShortTermSuspensionRate = $formFilters.find('.valueShortTermSuspensionRate').val();
		if(filterShortTermSuspensionRate != null && filterShortTermSuspensionRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionRate:' + filterShortTermSuspensionRate });

		var filterShortTermSuspensionsTotal = $formFilters.find('.valueShortTermSuspensionsTotal').val();
		if(filterShortTermSuspensionsTotal != null && filterShortTermSuspensionsTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsTotal:' + filterShortTermSuspensionsTotal });

		var filterLongTermSuspensionsTotal = $formFilters.find('.valueLongTermSuspensionsTotal').val();
		if(filterLongTermSuspensionsTotal != null && filterLongTermSuspensionsTotal !== '')
			filters.push({ name: 'fq', value: 'longTermSuspensionsTotal:' + filterLongTermSuspensionsTotal });

		var filterExpulsionsTotal = $formFilters.find('.valueExpulsionsTotal').val();
		if(filterExpulsionsTotal != null && filterExpulsionsTotal !== '')
			filters.push({ name: 'fq', value: 'expulsionsTotal:' + filterExpulsionsTotal });

		var filterShortTermSuspensionsAsianFemale = $formFilters.find('.valueShortTermSuspensionsAsianFemale').val();
		if(filterShortTermSuspensionsAsianFemale != null && filterShortTermSuspensionsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianFemale:' + filterShortTermSuspensionsAsianFemale });

		var filterShortTermSuspensionsAsianMale = $formFilters.find('.valueShortTermSuspensionsAsianMale').val();
		if(filterShortTermSuspensionsAsianMale != null && filterShortTermSuspensionsAsianMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianMale:' + filterShortTermSuspensionsAsianMale });

		var filterShortTermSuspensionsAsianTotal = $formFilters.find('.valueShortTermSuspensionsAsianTotal').val();
		if(filterShortTermSuspensionsAsianTotal != null && filterShortTermSuspensionsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianTotal:' + filterShortTermSuspensionsAsianTotal });

		var filterShortTermSuspensionsAsianPercent = $formFilters.find('.valueShortTermSuspensionsAsianPercent').val();
		if(filterShortTermSuspensionsAsianPercent != null && filterShortTermSuspensionsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianPercent:' + filterShortTermSuspensionsAsianPercent });

		var filterShortTermSuspensionsAsianRate = $formFilters.find('.valueShortTermSuspensionsAsianRate').val();
		if(filterShortTermSuspensionsAsianRate != null && filterShortTermSuspensionsAsianRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianRate:' + filterShortTermSuspensionsAsianRate });

		var filterShortTermSuspensionsBlackFemale = $formFilters.find('.valueShortTermSuspensionsBlackFemale').val();
		if(filterShortTermSuspensionsBlackFemale != null && filterShortTermSuspensionsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackFemale:' + filterShortTermSuspensionsBlackFemale });

		var filterShortTermSuspensionsBlackMale = $formFilters.find('.valueShortTermSuspensionsBlackMale').val();
		if(filterShortTermSuspensionsBlackMale != null && filterShortTermSuspensionsBlackMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackMale:' + filterShortTermSuspensionsBlackMale });

		var filterShortTermSuspensionsBlackTotal = $formFilters.find('.valueShortTermSuspensionsBlackTotal').val();
		if(filterShortTermSuspensionsBlackTotal != null && filterShortTermSuspensionsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackTotal:' + filterShortTermSuspensionsBlackTotal });

		var filterShortTermSuspensionsBlackPercent = $formFilters.find('.valueShortTermSuspensionsBlackPercent').val();
		if(filterShortTermSuspensionsBlackPercent != null && filterShortTermSuspensionsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackPercent:' + filterShortTermSuspensionsBlackPercent });

		var filterShortTermSuspensionsBlackRate = $formFilters.find('.valueShortTermSuspensionsBlackRate').val();
		if(filterShortTermSuspensionsBlackRate != null && filterShortTermSuspensionsBlackRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackRate:' + filterShortTermSuspensionsBlackRate });

		var filterShortTermSuspensionsLatinxFemale = $formFilters.find('.valueShortTermSuspensionsLatinxFemale').val();
		if(filterShortTermSuspensionsLatinxFemale != null && filterShortTermSuspensionsLatinxFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxFemale:' + filterShortTermSuspensionsLatinxFemale });

		var filterShortTermSuspensionsLatinxMale = $formFilters.find('.valueShortTermSuspensionsLatinxMale').val();
		if(filterShortTermSuspensionsLatinxMale != null && filterShortTermSuspensionsLatinxMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxMale:' + filterShortTermSuspensionsLatinxMale });

		var filterShortTermSuspensionsLatinxTotal = $formFilters.find('.valueShortTermSuspensionsLatinxTotal').val();
		if(filterShortTermSuspensionsLatinxTotal != null && filterShortTermSuspensionsLatinxTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxTotal:' + filterShortTermSuspensionsLatinxTotal });

		var filterShortTermSuspensionsLatinxPercent = $formFilters.find('.valueShortTermSuspensionsLatinxPercent').val();
		if(filterShortTermSuspensionsLatinxPercent != null && filterShortTermSuspensionsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxPercent:' + filterShortTermSuspensionsLatinxPercent });

		var filterShortTermSuspensionsLatinxRate = $formFilters.find('.valueShortTermSuspensionsLatinxRate').val();
		if(filterShortTermSuspensionsLatinxRate != null && filterShortTermSuspensionsLatinxRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxRate:' + filterShortTermSuspensionsLatinxRate });

		var filterShortTermSuspensionsIndigenousFemale = $formFilters.find('.valueShortTermSuspensionsIndigenousFemale').val();
		if(filterShortTermSuspensionsIndigenousFemale != null && filterShortTermSuspensionsIndigenousFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousFemale:' + filterShortTermSuspensionsIndigenousFemale });

		var filterShortTermSuspensionsIndigenousMale = $formFilters.find('.valueShortTermSuspensionsIndigenousMale').val();
		if(filterShortTermSuspensionsIndigenousMale != null && filterShortTermSuspensionsIndigenousMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousMale:' + filterShortTermSuspensionsIndigenousMale });

		var filterShortTermSuspensionsIndigenousTotal = $formFilters.find('.valueShortTermSuspensionsIndigenousTotal').val();
		if(filterShortTermSuspensionsIndigenousTotal != null && filterShortTermSuspensionsIndigenousTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousTotal:' + filterShortTermSuspensionsIndigenousTotal });

		var filterShortTermSuspensionsIndigenousPercent = $formFilters.find('.valueShortTermSuspensionsIndigenousPercent').val();
		if(filterShortTermSuspensionsIndigenousPercent != null && filterShortTermSuspensionsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousPercent:' + filterShortTermSuspensionsIndigenousPercent });

		var filterShortTermSuspensionsIndigenousRate = $formFilters.find('.valueShortTermSuspensionsIndigenousRate').val();
		if(filterShortTermSuspensionsIndigenousRate != null && filterShortTermSuspensionsIndigenousRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousRate:' + filterShortTermSuspensionsIndigenousRate });

		var filterShortTermSuspensionsMultiRacialFemale = $formFilters.find('.valueShortTermSuspensionsMultiRacialFemale').val();
		if(filterShortTermSuspensionsMultiRacialFemale != null && filterShortTermSuspensionsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialFemale:' + filterShortTermSuspensionsMultiRacialFemale });

		var filterShortTermSuspensionsMultiRacialMale = $formFilters.find('.valueShortTermSuspensionsMultiRacialMale').val();
		if(filterShortTermSuspensionsMultiRacialMale != null && filterShortTermSuspensionsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialMale:' + filterShortTermSuspensionsMultiRacialMale });

		var filterShortTermSuspensionsMultiRacialTotal = $formFilters.find('.valueShortTermSuspensionsMultiRacialTotal').val();
		if(filterShortTermSuspensionsMultiRacialTotal != null && filterShortTermSuspensionsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialTotal:' + filterShortTermSuspensionsMultiRacialTotal });

		var filterShortTermSuspensionsMultiRacialPercent = $formFilters.find('.valueShortTermSuspensionsMultiRacialPercent').val();
		if(filterShortTermSuspensionsMultiRacialPercent != null && filterShortTermSuspensionsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialPercent:' + filterShortTermSuspensionsMultiRacialPercent });

		var filterShortTermSuspensionsMultiRacialRate = $formFilters.find('.valueShortTermSuspensionsMultiRacialRate').val();
		if(filterShortTermSuspensionsMultiRacialRate != null && filterShortTermSuspensionsMultiRacialRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialRate:' + filterShortTermSuspensionsMultiRacialRate });

		var filterShortTermSuspensionsPacificIslanderFemale = $formFilters.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
		if(filterShortTermSuspensionsPacificIslanderFemale != null && filterShortTermSuspensionsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderFemale:' + filterShortTermSuspensionsPacificIslanderFemale });

		var filterShortTermSuspensionsPacificIslanderMale = $formFilters.find('.valueShortTermSuspensionsPacificIslanderMale').val();
		if(filterShortTermSuspensionsPacificIslanderMale != null && filterShortTermSuspensionsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderMale:' + filterShortTermSuspensionsPacificIslanderMale });

		var filterShortTermSuspensionsPacificIslanderTotal = $formFilters.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
		if(filterShortTermSuspensionsPacificIslanderTotal != null && filterShortTermSuspensionsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderTotal:' + filterShortTermSuspensionsPacificIslanderTotal });

		var filterShortTermSuspensionsPacificIslanderPercent = $formFilters.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
		if(filterShortTermSuspensionsPacificIslanderPercent != null && filterShortTermSuspensionsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderPercent:' + filterShortTermSuspensionsPacificIslanderPercent });

		var filterShortTermSuspensionsPacificIslanderRate = $formFilters.find('.valueShortTermSuspensionsPacificIslanderRate').val();
		if(filterShortTermSuspensionsPacificIslanderRate != null && filterShortTermSuspensionsPacificIslanderRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderRate:' + filterShortTermSuspensionsPacificIslanderRate });

		var filterShortTermSuspensionsWhiteFemale = $formFilters.find('.valueShortTermSuspensionsWhiteFemale').val();
		if(filterShortTermSuspensionsWhiteFemale != null && filterShortTermSuspensionsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteFemale:' + filterShortTermSuspensionsWhiteFemale });

		var filterShortTermSuspensionsWhiteMale = $formFilters.find('.valueShortTermSuspensionsWhiteMale').val();
		if(filterShortTermSuspensionsWhiteMale != null && filterShortTermSuspensionsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteMale:' + filterShortTermSuspensionsWhiteMale });

		var filterShortTermSuspensionsWhiteTotal = $formFilters.find('.valueShortTermSuspensionsWhiteTotal').val();
		if(filterShortTermSuspensionsWhiteTotal != null && filterShortTermSuspensionsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteTotal:' + filterShortTermSuspensionsWhiteTotal });

		var filterShortTermSuspensionsWhitePercent = $formFilters.find('.valueShortTermSuspensionsWhitePercent').val();
		if(filterShortTermSuspensionsWhitePercent != null && filterShortTermSuspensionsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhitePercent:' + filterShortTermSuspensionsWhitePercent });

		var filterShortTermSuspensionsWhiteRate = $formFilters.find('.valueShortTermSuspensionsWhiteRate').val();
		if(filterShortTermSuspensionsWhiteRate != null && filterShortTermSuspensionsWhiteRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteRate:' + filterShortTermSuspensionsWhiteRate });

		var filterShortTermSuspensionsAllRate = $formFilters.find('.valueShortTermSuspensionsAllRate').val();
		if(filterShortTermSuspensionsAllRate != null && filterShortTermSuspensionsAllRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAllRate:' + filterShortTermSuspensionsAllRate });

		var filterShortTermSuspensionsBlackVsWhite = $formFilters.find('.valueShortTermSuspensionsBlackVsWhite').val();
		if(filterShortTermSuspensionsBlackVsWhite != null && filterShortTermSuspensionsBlackVsWhite !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackVsWhite:' + filterShortTermSuspensionsBlackVsWhite });

		var filterExamsCollegeReadyGrades38OverallPercent = $formFilters.find('.valueExamsCollegeReadyGrades38OverallPercent').val();
		if(filterExamsCollegeReadyGrades38OverallPercent != null && filterExamsCollegeReadyGrades38OverallPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38OverallPercent:' + filterExamsCollegeReadyGrades38OverallPercent });

		var filterExamsCollegeReadyGrades38IndigenousPercent = $formFilters.find('.valueExamsCollegeReadyGrades38IndigenousPercent').val();
		if(filterExamsCollegeReadyGrades38IndigenousPercent != null && filterExamsCollegeReadyGrades38IndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38IndigenousPercent:' + filterExamsCollegeReadyGrades38IndigenousPercent });

		var filterExamsCollegeReadyGrades38AsianPercent = $formFilters.find('.valueExamsCollegeReadyGrades38AsianPercent').val();
		if(filterExamsCollegeReadyGrades38AsianPercent != null && filterExamsCollegeReadyGrades38AsianPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38AsianPercent:' + filterExamsCollegeReadyGrades38AsianPercent });

		var filterExamsCollegeReadyGrades38BlackPercent = $formFilters.find('.valueExamsCollegeReadyGrades38BlackPercent').val();
		if(filterExamsCollegeReadyGrades38BlackPercent != null && filterExamsCollegeReadyGrades38BlackPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38BlackPercent:' + filterExamsCollegeReadyGrades38BlackPercent });

		var filterExamsCollegeReadyGrades38LatinxPercent = $formFilters.find('.valueExamsCollegeReadyGrades38LatinxPercent').val();
		if(filterExamsCollegeReadyGrades38LatinxPercent != null && filterExamsCollegeReadyGrades38LatinxPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38LatinxPercent:' + filterExamsCollegeReadyGrades38LatinxPercent });

		var filterExamsCollegeReadyGrades38MultiRacialPercent = $formFilters.find('.valueExamsCollegeReadyGrades38MultiRacialPercent').val();
		if(filterExamsCollegeReadyGrades38MultiRacialPercent != null && filterExamsCollegeReadyGrades38MultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38MultiRacialPercent:' + filterExamsCollegeReadyGrades38MultiRacialPercent });

		var filterExamsCollegeReadyGrades38PacificIslanderPercent = $formFilters.find('.valueExamsCollegeReadyGrades38PacificIslanderPercent').val();
		if(filterExamsCollegeReadyGrades38PacificIslanderPercent != null && filterExamsCollegeReadyGrades38PacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38PacificIslanderPercent:' + filterExamsCollegeReadyGrades38PacificIslanderPercent });

		var filterExamsCollegeReadyGrades38WhitePercent = $formFilters.find('.valueExamsCollegeReadyGrades38WhitePercent').val();
		if(filterExamsCollegeReadyGrades38WhitePercent != null && filterExamsCollegeReadyGrades38WhitePercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38WhitePercent:' + filterExamsCollegeReadyGrades38WhitePercent });

		var filterExamsCollegeReadyGrades912OverallPercent = $formFilters.find('.valueExamsCollegeReadyGrades912OverallPercent').val();
		if(filterExamsCollegeReadyGrades912OverallPercent != null && filterExamsCollegeReadyGrades912OverallPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912OverallPercent:' + filterExamsCollegeReadyGrades912OverallPercent });

		var filterExamsCollegeReadyGrades912IndigenousPercent = $formFilters.find('.valueExamsCollegeReadyGrades912IndigenousPercent').val();
		if(filterExamsCollegeReadyGrades912IndigenousPercent != null && filterExamsCollegeReadyGrades912IndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912IndigenousPercent:' + filterExamsCollegeReadyGrades912IndigenousPercent });

		var filterExamsCollegeReadyGrades912AsianPercent = $formFilters.find('.valueExamsCollegeReadyGrades912AsianPercent').val();
		if(filterExamsCollegeReadyGrades912AsianPercent != null && filterExamsCollegeReadyGrades912AsianPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912AsianPercent:' + filterExamsCollegeReadyGrades912AsianPercent });

		var filterExamsCollegeReadyGrades912BlackPercent = $formFilters.find('.valueExamsCollegeReadyGrades912BlackPercent').val();
		if(filterExamsCollegeReadyGrades912BlackPercent != null && filterExamsCollegeReadyGrades912BlackPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912BlackPercent:' + filterExamsCollegeReadyGrades912BlackPercent });

		var filterExamsCollegeReadyGrades912LatinxPercent = $formFilters.find('.valueExamsCollegeReadyGrades912LatinxPercent').val();
		if(filterExamsCollegeReadyGrades912LatinxPercent != null && filterExamsCollegeReadyGrades912LatinxPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912LatinxPercent:' + filterExamsCollegeReadyGrades912LatinxPercent });

		var filterExamsCollegeReadyGrades912MultiRacialPercent = $formFilters.find('.valueExamsCollegeReadyGrades912MultiRacialPercent').val();
		if(filterExamsCollegeReadyGrades912MultiRacialPercent != null && filterExamsCollegeReadyGrades912MultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912MultiRacialPercent:' + filterExamsCollegeReadyGrades912MultiRacialPercent });

		var filterExamsCollegeReadyGrades912PacificIslanderPercent = $formFilters.find('.valueExamsCollegeReadyGrades912PacificIslanderPercent').val();
		if(filterExamsCollegeReadyGrades912PacificIslanderPercent != null && filterExamsCollegeReadyGrades912PacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912PacificIslanderPercent:' + filterExamsCollegeReadyGrades912PacificIslanderPercent });

		var filterExamsCollegeReadyGrades912WhitePercent = $formFilters.find('.valueExamsCollegeReadyGrades912WhitePercent').val();
		if(filterExamsCollegeReadyGrades912WhitePercent != null && filterExamsCollegeReadyGrades912WhitePercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912WhitePercent:' + filterExamsCollegeReadyGrades912WhitePercent });

		var filterGraduateWithin4YearsOverallPercent = $formFilters.find('.valueGraduateWithin4YearsOverallPercent').val();
		if(filterGraduateWithin4YearsOverallPercent != null && filterGraduateWithin4YearsOverallPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsOverallPercent:' + filterGraduateWithin4YearsOverallPercent });

		var filterGraduateWithin4YearsIndigenousPercent = $formFilters.find('.valueGraduateWithin4YearsIndigenousPercent').val();
		if(filterGraduateWithin4YearsIndigenousPercent != null && filterGraduateWithin4YearsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsIndigenousPercent:' + filterGraduateWithin4YearsIndigenousPercent });

		var filterGraduateWithin4YearsAsianPercent = $formFilters.find('.valueGraduateWithin4YearsAsianPercent').val();
		if(filterGraduateWithin4YearsAsianPercent != null && filterGraduateWithin4YearsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsAsianPercent:' + filterGraduateWithin4YearsAsianPercent });

		var filterGraduateWithin4YearsBlackPercent = $formFilters.find('.valueGraduateWithin4YearsBlackPercent').val();
		if(filterGraduateWithin4YearsBlackPercent != null && filterGraduateWithin4YearsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsBlackPercent:' + filterGraduateWithin4YearsBlackPercent });

		var filterGraduateWithin4YearsLatinxPercent = $formFilters.find('.valueGraduateWithin4YearsLatinxPercent').val();
		if(filterGraduateWithin4YearsLatinxPercent != null && filterGraduateWithin4YearsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsLatinxPercent:' + filterGraduateWithin4YearsLatinxPercent });

		var filterGraduateWithin4YearsMultiRacialPercent = $formFilters.find('.valueGraduateWithin4YearsMultiRacialPercent').val();
		if(filterGraduateWithin4YearsMultiRacialPercent != null && filterGraduateWithin4YearsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsMultiRacialPercent:' + filterGraduateWithin4YearsMultiRacialPercent });

		var filterGraduateWithin4YearsPacificIslanderPercent = $formFilters.find('.valueGraduateWithin4YearsPacificIslanderPercent').val();
		if(filterGraduateWithin4YearsPacificIslanderPercent != null && filterGraduateWithin4YearsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsPacificIslanderPercent:' + filterGraduateWithin4YearsPacificIslanderPercent });

		var filterGraduateWithin4YearsWhitePercent = $formFilters.find('.valueGraduateWithin4YearsWhitePercent').val();
		if(filterGraduateWithin4YearsWhitePercent != null && filterGraduateWithin4YearsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsWhitePercent:' + filterGraduateWithin4YearsWhitePercent });

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

		var filterReportCardYearsStr = $formFilters.find('.valueReportCardYearsStr').val();
		if(filterReportCardYearsStr != null && filterReportCardYearsStr !== '')
			filters.push({ name: 'fq', value: 'reportCardYearsStr:' + filterReportCardYearsStr });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterPupilsOtherPercent = $formFilters.find('.valuePupilsOtherPercent').val();
		if(filterPupilsOtherPercent != null && filterPupilsOtherPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsOtherPercent:' + filterPupilsOtherPercent });

		var filterExamsCollegeReadyGrades38BlackVsWhite = $formFilters.find('.valueExamsCollegeReadyGrades38BlackVsWhite').val();
		if(filterExamsCollegeReadyGrades38BlackVsWhite != null && filterExamsCollegeReadyGrades38BlackVsWhite !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38BlackVsWhite:' + filterExamsCollegeReadyGrades38BlackVsWhite });

		var filterExamsCollegeReadyGrades38LatinxVsWhite = $formFilters.find('.valueExamsCollegeReadyGrades38LatinxVsWhite').val();
		if(filterExamsCollegeReadyGrades38LatinxVsWhite != null && filterExamsCollegeReadyGrades38LatinxVsWhite !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38LatinxVsWhite:' + filterExamsCollegeReadyGrades38LatinxVsWhite });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateId = $formFilters.find('.valueStateId').val();
		if(filterStateId != null && filterStateId !== '')
			filters.push({ name: 'fq', value: 'stateId:' + filterStateId });

		var filterAgencyId = $formFilters.find('.valueAgencyId').val();
		if(filterAgencyId != null && filterAgencyId !== '')
			filters.push({ name: 'fq', value: 'agencyId:' + filterAgencyId });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterAgencyOnlyName = $formFilters.find('.valueAgencyOnlyName').val();
		if(filterAgencyOnlyName != null && filterAgencyOnlyName !== '')
			filters.push({ name: 'fq', value: 'agencyOnlyName:' + filterAgencyOnlyName });

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterReportCardCompleteName = $formFilters.find('.valueReportCardCompleteName').val();
		if(filterReportCardCompleteName != null && filterReportCardCompleteName !== '')
			filters.push({ name: 'fq', value: 'reportCardCompleteName:' + filterReportCardCompleteName });
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

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterPupilsIndigenousMale = $formFilters.find('.valuePupilsIndigenousMale').val();
		if(filterPupilsIndigenousMale != null && filterPupilsIndigenousMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousMale:' + filterPupilsIndigenousMale });

		var filterPupilsIndigenousFemale = $formFilters.find('.valuePupilsIndigenousFemale').val();
		if(filterPupilsIndigenousFemale != null && filterPupilsIndigenousFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousFemale:' + filterPupilsIndigenousFemale });

		var filterPupilsIndigenousTotal = $formFilters.find('.valuePupilsIndigenousTotal').val();
		if(filterPupilsIndigenousTotal != null && filterPupilsIndigenousTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousTotal:' + filterPupilsIndigenousTotal });

		var filterPupilsIndigenousPercent = $formFilters.find('.valuePupilsIndigenousPercent').val();
		if(filterPupilsIndigenousPercent != null && filterPupilsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousPercent:' + filterPupilsIndigenousPercent });

		var filterPupilsAsianMale = $formFilters.find('.valuePupilsAsianMale').val();
		if(filterPupilsAsianMale != null && filterPupilsAsianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianMale:' + filterPupilsAsianMale });

		var filterPupilsAsianFemale = $formFilters.find('.valuePupilsAsianFemale').val();
		if(filterPupilsAsianFemale != null && filterPupilsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianFemale:' + filterPupilsAsianFemale });

		var filterPupilsAsianTotal = $formFilters.find('.valuePupilsAsianTotal').val();
		if(filterPupilsAsianTotal != null && filterPupilsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianTotal:' + filterPupilsAsianTotal });

		var filterPupilsAsianPercent = $formFilters.find('.valuePupilsAsianPercent').val();
		if(filterPupilsAsianPercent != null && filterPupilsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianPercent:' + filterPupilsAsianPercent });

		var filterPupilsLatinxMale = $formFilters.find('.valuePupilsLatinxMale').val();
		if(filterPupilsLatinxMale != null && filterPupilsLatinxMale !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxMale:' + filterPupilsLatinxMale });

		var filterPupilsLatinxFemale = $formFilters.find('.valuePupilsLatinxFemale').val();
		if(filterPupilsLatinxFemale != null && filterPupilsLatinxFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxFemale:' + filterPupilsLatinxFemale });

		var filterPupilsLatinxTotal = $formFilters.find('.valuePupilsLatinxTotal').val();
		if(filterPupilsLatinxTotal != null && filterPupilsLatinxTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxTotal:' + filterPupilsLatinxTotal });

		var filterPupilsLatinxPercent = $formFilters.find('.valuePupilsLatinxPercent').val();
		if(filterPupilsLatinxPercent != null && filterPupilsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxPercent:' + filterPupilsLatinxPercent });

		var filterPupilsBlackMale = $formFilters.find('.valuePupilsBlackMale').val();
		if(filterPupilsBlackMale != null && filterPupilsBlackMale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackMale:' + filterPupilsBlackMale });

		var filterPupilsBlackFemale = $formFilters.find('.valuePupilsBlackFemale').val();
		if(filterPupilsBlackFemale != null && filterPupilsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackFemale:' + filterPupilsBlackFemale });

		var filterPupilsBlackTotal = $formFilters.find('.valuePupilsBlackTotal').val();
		if(filterPupilsBlackTotal != null && filterPupilsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackTotal:' + filterPupilsBlackTotal });

		var filterPupilsBlackPercent = $formFilters.find('.valuePupilsBlackPercent').val();
		if(filterPupilsBlackPercent != null && filterPupilsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackPercent:' + filterPupilsBlackPercent });

		var filterPupilsWhiteMale = $formFilters.find('.valuePupilsWhiteMale').val();
		if(filterPupilsWhiteMale != null && filterPupilsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteMale:' + filterPupilsWhiteMale });

		var filterPupilsWhiteFemale = $formFilters.find('.valuePupilsWhiteFemale').val();
		if(filterPupilsWhiteFemale != null && filterPupilsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteFemale:' + filterPupilsWhiteFemale });

		var filterPupilsWhiteTotal = $formFilters.find('.valuePupilsWhiteTotal').val();
		if(filterPupilsWhiteTotal != null && filterPupilsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteTotal:' + filterPupilsWhiteTotal });

		var filterPupilsWhitePercent = $formFilters.find('.valuePupilsWhitePercent').val();
		if(filterPupilsWhitePercent != null && filterPupilsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'pupilsWhitePercent:' + filterPupilsWhitePercent });

		var filterPupilsPacificIslanderMale = $formFilters.find('.valuePupilsPacificIslanderMale').val();
		if(filterPupilsPacificIslanderMale != null && filterPupilsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderMale:' + filterPupilsPacificIslanderMale });

		var filterPupilsPacificIslanderFemale = $formFilters.find('.valuePupilsPacificIslanderFemale').val();
		if(filterPupilsPacificIslanderFemale != null && filterPupilsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderFemale:' + filterPupilsPacificIslanderFemale });

		var filterPupilsPacificIslanderTotal = $formFilters.find('.valuePupilsPacificIslanderTotal').val();
		if(filterPupilsPacificIslanderTotal != null && filterPupilsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderTotal:' + filterPupilsPacificIslanderTotal });

		var filterPupilsPacificIslanderPercent = $formFilters.find('.valuePupilsPacificIslanderPercent').val();
		if(filterPupilsPacificIslanderPercent != null && filterPupilsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderPercent:' + filterPupilsPacificIslanderPercent });

		var filterPupilsMultiRacialMale = $formFilters.find('.valuePupilsMultiRacialMale').val();
		if(filterPupilsMultiRacialMale != null && filterPupilsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialMale:' + filterPupilsMultiRacialMale });

		var filterPupilsMultiRacialFemale = $formFilters.find('.valuePupilsMultiRacialFemale').val();
		if(filterPupilsMultiRacialFemale != null && filterPupilsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialFemale:' + filterPupilsMultiRacialFemale });

		var filterPupilsMultiRacialTotal = $formFilters.find('.valuePupilsMultiRacialTotal').val();
		if(filterPupilsMultiRacialTotal != null && filterPupilsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialTotal:' + filterPupilsMultiRacialTotal });

		var filterPupilsMultiRacialPercent = $formFilters.find('.valuePupilsMultiRacialPercent').val();
		if(filterPupilsMultiRacialPercent != null && filterPupilsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialPercent:' + filterPupilsMultiRacialPercent });

		var filterPupilsTotal = $formFilters.find('.valuePupilsTotal').val();
		if(filterPupilsTotal != null && filterPupilsTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsTotal:' + filterPupilsTotal });

		var filterTeachersMale = $formFilters.find('.valueTeachersMale').val();
		if(filterTeachersMale != null && filterTeachersMale !== '')
			filters.push({ name: 'fq', value: 'teachersMale:' + filterTeachersMale });

		var filterTeachersFemale = $formFilters.find('.valueTeachersFemale').val();
		if(filterTeachersFemale != null && filterTeachersFemale !== '')
			filters.push({ name: 'fq', value: 'teachersFemale:' + filterTeachersFemale });

		var filterTeachersTotal = $formFilters.find('.valueTeachersTotal').val();
		if(filterTeachersTotal != null && filterTeachersTotal !== '')
			filters.push({ name: 'fq', value: 'teachersTotal:' + filterTeachersTotal });

		var filterTeachersWhiteTotal = $formFilters.find('.valueTeachersWhiteTotal').val();
		if(filterTeachersWhiteTotal != null && filterTeachersWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'teachersWhiteTotal:' + filterTeachersWhiteTotal });

		var filterTeachersWhitePercent = $formFilters.find('.valueTeachersWhitePercent').val();
		if(filterTeachersWhitePercent != null && filterTeachersWhitePercent !== '')
			filters.push({ name: 'fq', value: 'teachersWhitePercent:' + filterTeachersWhitePercent });

		var filterTeachersBlackTotal = $formFilters.find('.valueTeachersBlackTotal').val();
		if(filterTeachersBlackTotal != null && filterTeachersBlackTotal !== '')
			filters.push({ name: 'fq', value: 'teachersBlackTotal:' + filterTeachersBlackTotal });

		var filterTeachersBlackPercent = $formFilters.find('.valueTeachersBlackPercent').val();
		if(filterTeachersBlackPercent != null && filterTeachersBlackPercent !== '')
			filters.push({ name: 'fq', value: 'teachersBlackPercent:' + filterTeachersBlackPercent });

		var filterTeachersOtherTotal = $formFilters.find('.valueTeachersOtherTotal').val();
		if(filterTeachersOtherTotal != null && filterTeachersOtherTotal !== '')
			filters.push({ name: 'fq', value: 'teachersOtherTotal:' + filterTeachersOtherTotal });

		var filterTeachersOtherPercent = $formFilters.find('.valueTeachersOtherPercent').val();
		if(filterTeachersOtherPercent != null && filterTeachersOtherPercent !== '')
			filters.push({ name: 'fq', value: 'teachersOtherPercent:' + filterTeachersOtherPercent });

		var filterDelinquentComplaintsTotal = $formFilters.find('.valueDelinquentComplaintsTotal').val();
		if(filterDelinquentComplaintsTotal != null && filterDelinquentComplaintsTotal !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsTotal:' + filterDelinquentComplaintsTotal });

		var filterDelinquentComplaintsAtSchool = $formFilters.find('.valueDelinquentComplaintsAtSchool').val();
		if(filterDelinquentComplaintsAtSchool != null && filterDelinquentComplaintsAtSchool !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchool:' + filterDelinquentComplaintsAtSchool });

		var filterDelinquentComplaintsAtSchoolPercent = $formFilters.find('.valueDelinquentComplaintsAtSchoolPercent').val();
		if(filterDelinquentComplaintsAtSchoolPercent != null && filterDelinquentComplaintsAtSchoolPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchoolPercent:' + filterDelinquentComplaintsAtSchoolPercent });

		var filterDelinquentComplaintsAsian = $formFilters.find('.valueDelinquentComplaintsAsian').val();
		if(filterDelinquentComplaintsAsian != null && filterDelinquentComplaintsAsian !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAsian:' + filterDelinquentComplaintsAsian });

		var filterDelinquentComplaintsAsianPercent = $formFilters.find('.valueDelinquentComplaintsAsianPercent').val();
		if(filterDelinquentComplaintsAsianPercent != null && filterDelinquentComplaintsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAsianPercent:' + filterDelinquentComplaintsAsianPercent });

		var filterDelinquentComplaintsBlack = $formFilters.find('.valueDelinquentComplaintsBlack').val();
		if(filterDelinquentComplaintsBlack != null && filterDelinquentComplaintsBlack !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsBlack:' + filterDelinquentComplaintsBlack });

		var filterDelinquentComplaintsBlackPercent = $formFilters.find('.valueDelinquentComplaintsBlackPercent').val();
		if(filterDelinquentComplaintsBlackPercent != null && filterDelinquentComplaintsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsBlackPercent:' + filterDelinquentComplaintsBlackPercent });

		var filterDelinquentComplaintsLatinx = $formFilters.find('.valueDelinquentComplaintsLatinx').val();
		if(filterDelinquentComplaintsLatinx != null && filterDelinquentComplaintsLatinx !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsLatinx:' + filterDelinquentComplaintsLatinx });

		var filterDelinquentComplaintsLatinxPercent = $formFilters.find('.valueDelinquentComplaintsLatinxPercent').val();
		if(filterDelinquentComplaintsLatinxPercent != null && filterDelinquentComplaintsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsLatinxPercent:' + filterDelinquentComplaintsLatinxPercent });

		var filterDelinquentComplaintsMultiRacial = $formFilters.find('.valueDelinquentComplaintsMultiRacial').val();
		if(filterDelinquentComplaintsMultiRacial != null && filterDelinquentComplaintsMultiRacial !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacial:' + filterDelinquentComplaintsMultiRacial });

		var filterDelinquentComplaintsMultiRacialPercent = $formFilters.find('.valueDelinquentComplaintsMultiRacialPercent').val();
		if(filterDelinquentComplaintsMultiRacialPercent != null && filterDelinquentComplaintsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacialPercent:' + filterDelinquentComplaintsMultiRacialPercent });

		var filterDelinquentComplaintsIndigenous = $formFilters.find('.valueDelinquentComplaintsIndigenous').val();
		if(filterDelinquentComplaintsIndigenous != null && filterDelinquentComplaintsIndigenous !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndigenous:' + filterDelinquentComplaintsIndigenous });

		var filterDelinquentComplaintsIndigenousPercent = $formFilters.find('.valueDelinquentComplaintsIndigenousPercent').val();
		if(filterDelinquentComplaintsIndigenousPercent != null && filterDelinquentComplaintsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndigenousPercent:' + filterDelinquentComplaintsIndigenousPercent });

		var filterDelinquentComplaintsWhite = $formFilters.find('.valueDelinquentComplaintsWhite').val();
		if(filterDelinquentComplaintsWhite != null && filterDelinquentComplaintsWhite !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsWhite:' + filterDelinquentComplaintsWhite });

		var filterDelinquentComplaintsWhitePercent = $formFilters.find('.valueDelinquentComplaintsWhitePercent').val();
		if(filterDelinquentComplaintsWhitePercent != null && filterDelinquentComplaintsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsWhitePercent:' + filterDelinquentComplaintsWhitePercent });

		var filterDelinquentComplaintsPacificIslander = $formFilters.find('.valueDelinquentComplaintsPacificIslander').val();
		if(filterDelinquentComplaintsPacificIslander != null && filterDelinquentComplaintsPacificIslander !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsPacificIslander:' + filterDelinquentComplaintsPacificIslander });

		var filterDelinquentComplaintsPacificIslanderPercent = $formFilters.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
		if(filterDelinquentComplaintsPacificIslanderPercent != null && filterDelinquentComplaintsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsPacificIslanderPercent:' + filterDelinquentComplaintsPacificIslanderPercent });

		var filterShortTermSuspensionRate = $formFilters.find('.valueShortTermSuspensionRate').val();
		if(filterShortTermSuspensionRate != null && filterShortTermSuspensionRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionRate:' + filterShortTermSuspensionRate });

		var filterShortTermSuspensionsTotal = $formFilters.find('.valueShortTermSuspensionsTotal').val();
		if(filterShortTermSuspensionsTotal != null && filterShortTermSuspensionsTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsTotal:' + filterShortTermSuspensionsTotal });

		var filterLongTermSuspensionsTotal = $formFilters.find('.valueLongTermSuspensionsTotal').val();
		if(filterLongTermSuspensionsTotal != null && filterLongTermSuspensionsTotal !== '')
			filters.push({ name: 'fq', value: 'longTermSuspensionsTotal:' + filterLongTermSuspensionsTotal });

		var filterExpulsionsTotal = $formFilters.find('.valueExpulsionsTotal').val();
		if(filterExpulsionsTotal != null && filterExpulsionsTotal !== '')
			filters.push({ name: 'fq', value: 'expulsionsTotal:' + filterExpulsionsTotal });

		var filterShortTermSuspensionsAsianFemale = $formFilters.find('.valueShortTermSuspensionsAsianFemale').val();
		if(filterShortTermSuspensionsAsianFemale != null && filterShortTermSuspensionsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianFemale:' + filterShortTermSuspensionsAsianFemale });

		var filterShortTermSuspensionsAsianMale = $formFilters.find('.valueShortTermSuspensionsAsianMale').val();
		if(filterShortTermSuspensionsAsianMale != null && filterShortTermSuspensionsAsianMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianMale:' + filterShortTermSuspensionsAsianMale });

		var filterShortTermSuspensionsAsianTotal = $formFilters.find('.valueShortTermSuspensionsAsianTotal').val();
		if(filterShortTermSuspensionsAsianTotal != null && filterShortTermSuspensionsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianTotal:' + filterShortTermSuspensionsAsianTotal });

		var filterShortTermSuspensionsAsianPercent = $formFilters.find('.valueShortTermSuspensionsAsianPercent').val();
		if(filterShortTermSuspensionsAsianPercent != null && filterShortTermSuspensionsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianPercent:' + filterShortTermSuspensionsAsianPercent });

		var filterShortTermSuspensionsAsianRate = $formFilters.find('.valueShortTermSuspensionsAsianRate').val();
		if(filterShortTermSuspensionsAsianRate != null && filterShortTermSuspensionsAsianRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianRate:' + filterShortTermSuspensionsAsianRate });

		var filterShortTermSuspensionsBlackFemale = $formFilters.find('.valueShortTermSuspensionsBlackFemale').val();
		if(filterShortTermSuspensionsBlackFemale != null && filterShortTermSuspensionsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackFemale:' + filterShortTermSuspensionsBlackFemale });

		var filterShortTermSuspensionsBlackMale = $formFilters.find('.valueShortTermSuspensionsBlackMale').val();
		if(filterShortTermSuspensionsBlackMale != null && filterShortTermSuspensionsBlackMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackMale:' + filterShortTermSuspensionsBlackMale });

		var filterShortTermSuspensionsBlackTotal = $formFilters.find('.valueShortTermSuspensionsBlackTotal').val();
		if(filterShortTermSuspensionsBlackTotal != null && filterShortTermSuspensionsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackTotal:' + filterShortTermSuspensionsBlackTotal });

		var filterShortTermSuspensionsBlackPercent = $formFilters.find('.valueShortTermSuspensionsBlackPercent').val();
		if(filterShortTermSuspensionsBlackPercent != null && filterShortTermSuspensionsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackPercent:' + filterShortTermSuspensionsBlackPercent });

		var filterShortTermSuspensionsBlackRate = $formFilters.find('.valueShortTermSuspensionsBlackRate').val();
		if(filterShortTermSuspensionsBlackRate != null && filterShortTermSuspensionsBlackRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackRate:' + filterShortTermSuspensionsBlackRate });

		var filterShortTermSuspensionsLatinxFemale = $formFilters.find('.valueShortTermSuspensionsLatinxFemale').val();
		if(filterShortTermSuspensionsLatinxFemale != null && filterShortTermSuspensionsLatinxFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxFemale:' + filterShortTermSuspensionsLatinxFemale });

		var filterShortTermSuspensionsLatinxMale = $formFilters.find('.valueShortTermSuspensionsLatinxMale').val();
		if(filterShortTermSuspensionsLatinxMale != null && filterShortTermSuspensionsLatinxMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxMale:' + filterShortTermSuspensionsLatinxMale });

		var filterShortTermSuspensionsLatinxTotal = $formFilters.find('.valueShortTermSuspensionsLatinxTotal').val();
		if(filterShortTermSuspensionsLatinxTotal != null && filterShortTermSuspensionsLatinxTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxTotal:' + filterShortTermSuspensionsLatinxTotal });

		var filterShortTermSuspensionsLatinxPercent = $formFilters.find('.valueShortTermSuspensionsLatinxPercent').val();
		if(filterShortTermSuspensionsLatinxPercent != null && filterShortTermSuspensionsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxPercent:' + filterShortTermSuspensionsLatinxPercent });

		var filterShortTermSuspensionsLatinxRate = $formFilters.find('.valueShortTermSuspensionsLatinxRate').val();
		if(filterShortTermSuspensionsLatinxRate != null && filterShortTermSuspensionsLatinxRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxRate:' + filterShortTermSuspensionsLatinxRate });

		var filterShortTermSuspensionsIndigenousFemale = $formFilters.find('.valueShortTermSuspensionsIndigenousFemale').val();
		if(filterShortTermSuspensionsIndigenousFemale != null && filterShortTermSuspensionsIndigenousFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousFemale:' + filterShortTermSuspensionsIndigenousFemale });

		var filterShortTermSuspensionsIndigenousMale = $formFilters.find('.valueShortTermSuspensionsIndigenousMale').val();
		if(filterShortTermSuspensionsIndigenousMale != null && filterShortTermSuspensionsIndigenousMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousMale:' + filterShortTermSuspensionsIndigenousMale });

		var filterShortTermSuspensionsIndigenousTotal = $formFilters.find('.valueShortTermSuspensionsIndigenousTotal').val();
		if(filterShortTermSuspensionsIndigenousTotal != null && filterShortTermSuspensionsIndigenousTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousTotal:' + filterShortTermSuspensionsIndigenousTotal });

		var filterShortTermSuspensionsIndigenousPercent = $formFilters.find('.valueShortTermSuspensionsIndigenousPercent').val();
		if(filterShortTermSuspensionsIndigenousPercent != null && filterShortTermSuspensionsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousPercent:' + filterShortTermSuspensionsIndigenousPercent });

		var filterShortTermSuspensionsIndigenousRate = $formFilters.find('.valueShortTermSuspensionsIndigenousRate').val();
		if(filterShortTermSuspensionsIndigenousRate != null && filterShortTermSuspensionsIndigenousRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousRate:' + filterShortTermSuspensionsIndigenousRate });

		var filterShortTermSuspensionsMultiRacialFemale = $formFilters.find('.valueShortTermSuspensionsMultiRacialFemale').val();
		if(filterShortTermSuspensionsMultiRacialFemale != null && filterShortTermSuspensionsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialFemale:' + filterShortTermSuspensionsMultiRacialFemale });

		var filterShortTermSuspensionsMultiRacialMale = $formFilters.find('.valueShortTermSuspensionsMultiRacialMale').val();
		if(filterShortTermSuspensionsMultiRacialMale != null && filterShortTermSuspensionsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialMale:' + filterShortTermSuspensionsMultiRacialMale });

		var filterShortTermSuspensionsMultiRacialTotal = $formFilters.find('.valueShortTermSuspensionsMultiRacialTotal').val();
		if(filterShortTermSuspensionsMultiRacialTotal != null && filterShortTermSuspensionsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialTotal:' + filterShortTermSuspensionsMultiRacialTotal });

		var filterShortTermSuspensionsMultiRacialPercent = $formFilters.find('.valueShortTermSuspensionsMultiRacialPercent').val();
		if(filterShortTermSuspensionsMultiRacialPercent != null && filterShortTermSuspensionsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialPercent:' + filterShortTermSuspensionsMultiRacialPercent });

		var filterShortTermSuspensionsMultiRacialRate = $formFilters.find('.valueShortTermSuspensionsMultiRacialRate').val();
		if(filterShortTermSuspensionsMultiRacialRate != null && filterShortTermSuspensionsMultiRacialRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialRate:' + filterShortTermSuspensionsMultiRacialRate });

		var filterShortTermSuspensionsPacificIslanderFemale = $formFilters.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
		if(filterShortTermSuspensionsPacificIslanderFemale != null && filterShortTermSuspensionsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderFemale:' + filterShortTermSuspensionsPacificIslanderFemale });

		var filterShortTermSuspensionsPacificIslanderMale = $formFilters.find('.valueShortTermSuspensionsPacificIslanderMale').val();
		if(filterShortTermSuspensionsPacificIslanderMale != null && filterShortTermSuspensionsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderMale:' + filterShortTermSuspensionsPacificIslanderMale });

		var filterShortTermSuspensionsPacificIslanderTotal = $formFilters.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
		if(filterShortTermSuspensionsPacificIslanderTotal != null && filterShortTermSuspensionsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderTotal:' + filterShortTermSuspensionsPacificIslanderTotal });

		var filterShortTermSuspensionsPacificIslanderPercent = $formFilters.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
		if(filterShortTermSuspensionsPacificIslanderPercent != null && filterShortTermSuspensionsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderPercent:' + filterShortTermSuspensionsPacificIslanderPercent });

		var filterShortTermSuspensionsPacificIslanderRate = $formFilters.find('.valueShortTermSuspensionsPacificIslanderRate').val();
		if(filterShortTermSuspensionsPacificIslanderRate != null && filterShortTermSuspensionsPacificIslanderRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderRate:' + filterShortTermSuspensionsPacificIslanderRate });

		var filterShortTermSuspensionsWhiteFemale = $formFilters.find('.valueShortTermSuspensionsWhiteFemale').val();
		if(filterShortTermSuspensionsWhiteFemale != null && filterShortTermSuspensionsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteFemale:' + filterShortTermSuspensionsWhiteFemale });

		var filterShortTermSuspensionsWhiteMale = $formFilters.find('.valueShortTermSuspensionsWhiteMale').val();
		if(filterShortTermSuspensionsWhiteMale != null && filterShortTermSuspensionsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteMale:' + filterShortTermSuspensionsWhiteMale });

		var filterShortTermSuspensionsWhiteTotal = $formFilters.find('.valueShortTermSuspensionsWhiteTotal').val();
		if(filterShortTermSuspensionsWhiteTotal != null && filterShortTermSuspensionsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteTotal:' + filterShortTermSuspensionsWhiteTotal });

		var filterShortTermSuspensionsWhitePercent = $formFilters.find('.valueShortTermSuspensionsWhitePercent').val();
		if(filterShortTermSuspensionsWhitePercent != null && filterShortTermSuspensionsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhitePercent:' + filterShortTermSuspensionsWhitePercent });

		var filterShortTermSuspensionsWhiteRate = $formFilters.find('.valueShortTermSuspensionsWhiteRate').val();
		if(filterShortTermSuspensionsWhiteRate != null && filterShortTermSuspensionsWhiteRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteRate:' + filterShortTermSuspensionsWhiteRate });

		var filterShortTermSuspensionsAllRate = $formFilters.find('.valueShortTermSuspensionsAllRate').val();
		if(filterShortTermSuspensionsAllRate != null && filterShortTermSuspensionsAllRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAllRate:' + filterShortTermSuspensionsAllRate });

		var filterShortTermSuspensionsBlackVsWhite = $formFilters.find('.valueShortTermSuspensionsBlackVsWhite').val();
		if(filterShortTermSuspensionsBlackVsWhite != null && filterShortTermSuspensionsBlackVsWhite !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackVsWhite:' + filterShortTermSuspensionsBlackVsWhite });

		var filterExamsCollegeReadyGrades38OverallPercent = $formFilters.find('.valueExamsCollegeReadyGrades38OverallPercent').val();
		if(filterExamsCollegeReadyGrades38OverallPercent != null && filterExamsCollegeReadyGrades38OverallPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38OverallPercent:' + filterExamsCollegeReadyGrades38OverallPercent });

		var filterExamsCollegeReadyGrades38IndigenousPercent = $formFilters.find('.valueExamsCollegeReadyGrades38IndigenousPercent').val();
		if(filterExamsCollegeReadyGrades38IndigenousPercent != null && filterExamsCollegeReadyGrades38IndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38IndigenousPercent:' + filterExamsCollegeReadyGrades38IndigenousPercent });

		var filterExamsCollegeReadyGrades38AsianPercent = $formFilters.find('.valueExamsCollegeReadyGrades38AsianPercent').val();
		if(filterExamsCollegeReadyGrades38AsianPercent != null && filterExamsCollegeReadyGrades38AsianPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38AsianPercent:' + filterExamsCollegeReadyGrades38AsianPercent });

		var filterExamsCollegeReadyGrades38BlackPercent = $formFilters.find('.valueExamsCollegeReadyGrades38BlackPercent').val();
		if(filterExamsCollegeReadyGrades38BlackPercent != null && filterExamsCollegeReadyGrades38BlackPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38BlackPercent:' + filterExamsCollegeReadyGrades38BlackPercent });

		var filterExamsCollegeReadyGrades38LatinxPercent = $formFilters.find('.valueExamsCollegeReadyGrades38LatinxPercent').val();
		if(filterExamsCollegeReadyGrades38LatinxPercent != null && filterExamsCollegeReadyGrades38LatinxPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38LatinxPercent:' + filterExamsCollegeReadyGrades38LatinxPercent });

		var filterExamsCollegeReadyGrades38MultiRacialPercent = $formFilters.find('.valueExamsCollegeReadyGrades38MultiRacialPercent').val();
		if(filterExamsCollegeReadyGrades38MultiRacialPercent != null && filterExamsCollegeReadyGrades38MultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38MultiRacialPercent:' + filterExamsCollegeReadyGrades38MultiRacialPercent });

		var filterExamsCollegeReadyGrades38PacificIslanderPercent = $formFilters.find('.valueExamsCollegeReadyGrades38PacificIslanderPercent').val();
		if(filterExamsCollegeReadyGrades38PacificIslanderPercent != null && filterExamsCollegeReadyGrades38PacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38PacificIslanderPercent:' + filterExamsCollegeReadyGrades38PacificIslanderPercent });

		var filterExamsCollegeReadyGrades38WhitePercent = $formFilters.find('.valueExamsCollegeReadyGrades38WhitePercent').val();
		if(filterExamsCollegeReadyGrades38WhitePercent != null && filterExamsCollegeReadyGrades38WhitePercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38WhitePercent:' + filterExamsCollegeReadyGrades38WhitePercent });

		var filterExamsCollegeReadyGrades912OverallPercent = $formFilters.find('.valueExamsCollegeReadyGrades912OverallPercent').val();
		if(filterExamsCollegeReadyGrades912OverallPercent != null && filterExamsCollegeReadyGrades912OverallPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912OverallPercent:' + filterExamsCollegeReadyGrades912OverallPercent });

		var filterExamsCollegeReadyGrades912IndigenousPercent = $formFilters.find('.valueExamsCollegeReadyGrades912IndigenousPercent').val();
		if(filterExamsCollegeReadyGrades912IndigenousPercent != null && filterExamsCollegeReadyGrades912IndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912IndigenousPercent:' + filterExamsCollegeReadyGrades912IndigenousPercent });

		var filterExamsCollegeReadyGrades912AsianPercent = $formFilters.find('.valueExamsCollegeReadyGrades912AsianPercent').val();
		if(filterExamsCollegeReadyGrades912AsianPercent != null && filterExamsCollegeReadyGrades912AsianPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912AsianPercent:' + filterExamsCollegeReadyGrades912AsianPercent });

		var filterExamsCollegeReadyGrades912BlackPercent = $formFilters.find('.valueExamsCollegeReadyGrades912BlackPercent').val();
		if(filterExamsCollegeReadyGrades912BlackPercent != null && filterExamsCollegeReadyGrades912BlackPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912BlackPercent:' + filterExamsCollegeReadyGrades912BlackPercent });

		var filterExamsCollegeReadyGrades912LatinxPercent = $formFilters.find('.valueExamsCollegeReadyGrades912LatinxPercent').val();
		if(filterExamsCollegeReadyGrades912LatinxPercent != null && filterExamsCollegeReadyGrades912LatinxPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912LatinxPercent:' + filterExamsCollegeReadyGrades912LatinxPercent });

		var filterExamsCollegeReadyGrades912MultiRacialPercent = $formFilters.find('.valueExamsCollegeReadyGrades912MultiRacialPercent').val();
		if(filterExamsCollegeReadyGrades912MultiRacialPercent != null && filterExamsCollegeReadyGrades912MultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912MultiRacialPercent:' + filterExamsCollegeReadyGrades912MultiRacialPercent });

		var filterExamsCollegeReadyGrades912PacificIslanderPercent = $formFilters.find('.valueExamsCollegeReadyGrades912PacificIslanderPercent').val();
		if(filterExamsCollegeReadyGrades912PacificIslanderPercent != null && filterExamsCollegeReadyGrades912PacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912PacificIslanderPercent:' + filterExamsCollegeReadyGrades912PacificIslanderPercent });

		var filterExamsCollegeReadyGrades912WhitePercent = $formFilters.find('.valueExamsCollegeReadyGrades912WhitePercent').val();
		if(filterExamsCollegeReadyGrades912WhitePercent != null && filterExamsCollegeReadyGrades912WhitePercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912WhitePercent:' + filterExamsCollegeReadyGrades912WhitePercent });

		var filterGraduateWithin4YearsOverallPercent = $formFilters.find('.valueGraduateWithin4YearsOverallPercent').val();
		if(filterGraduateWithin4YearsOverallPercent != null && filterGraduateWithin4YearsOverallPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsOverallPercent:' + filterGraduateWithin4YearsOverallPercent });

		var filterGraduateWithin4YearsIndigenousPercent = $formFilters.find('.valueGraduateWithin4YearsIndigenousPercent').val();
		if(filterGraduateWithin4YearsIndigenousPercent != null && filterGraduateWithin4YearsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsIndigenousPercent:' + filterGraduateWithin4YearsIndigenousPercent });

		var filterGraduateWithin4YearsAsianPercent = $formFilters.find('.valueGraduateWithin4YearsAsianPercent').val();
		if(filterGraduateWithin4YearsAsianPercent != null && filterGraduateWithin4YearsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsAsianPercent:' + filterGraduateWithin4YearsAsianPercent });

		var filterGraduateWithin4YearsBlackPercent = $formFilters.find('.valueGraduateWithin4YearsBlackPercent').val();
		if(filterGraduateWithin4YearsBlackPercent != null && filterGraduateWithin4YearsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsBlackPercent:' + filterGraduateWithin4YearsBlackPercent });

		var filterGraduateWithin4YearsLatinxPercent = $formFilters.find('.valueGraduateWithin4YearsLatinxPercent').val();
		if(filterGraduateWithin4YearsLatinxPercent != null && filterGraduateWithin4YearsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsLatinxPercent:' + filterGraduateWithin4YearsLatinxPercent });

		var filterGraduateWithin4YearsMultiRacialPercent = $formFilters.find('.valueGraduateWithin4YearsMultiRacialPercent').val();
		if(filterGraduateWithin4YearsMultiRacialPercent != null && filterGraduateWithin4YearsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsMultiRacialPercent:' + filterGraduateWithin4YearsMultiRacialPercent });

		var filterGraduateWithin4YearsPacificIslanderPercent = $formFilters.find('.valueGraduateWithin4YearsPacificIslanderPercent').val();
		if(filterGraduateWithin4YearsPacificIslanderPercent != null && filterGraduateWithin4YearsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsPacificIslanderPercent:' + filterGraduateWithin4YearsPacificIslanderPercent });

		var filterGraduateWithin4YearsWhitePercent = $formFilters.find('.valueGraduateWithin4YearsWhitePercent').val();
		if(filterGraduateWithin4YearsWhitePercent != null && filterGraduateWithin4YearsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsWhitePercent:' + filterGraduateWithin4YearsWhitePercent });

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

		var filterReportCardYearsStr = $formFilters.find('.valueReportCardYearsStr').val();
		if(filterReportCardYearsStr != null && filterReportCardYearsStr !== '')
			filters.push({ name: 'fq', value: 'reportCardYearsStr:' + filterReportCardYearsStr });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterPupilsOtherPercent = $formFilters.find('.valuePupilsOtherPercent').val();
		if(filterPupilsOtherPercent != null && filterPupilsOtherPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsOtherPercent:' + filterPupilsOtherPercent });

		var filterExamsCollegeReadyGrades38BlackVsWhite = $formFilters.find('.valueExamsCollegeReadyGrades38BlackVsWhite').val();
		if(filterExamsCollegeReadyGrades38BlackVsWhite != null && filterExamsCollegeReadyGrades38BlackVsWhite !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38BlackVsWhite:' + filterExamsCollegeReadyGrades38BlackVsWhite });

		var filterExamsCollegeReadyGrades38LatinxVsWhite = $formFilters.find('.valueExamsCollegeReadyGrades38LatinxVsWhite').val();
		if(filterExamsCollegeReadyGrades38LatinxVsWhite != null && filterExamsCollegeReadyGrades38LatinxVsWhite !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38LatinxVsWhite:' + filterExamsCollegeReadyGrades38LatinxVsWhite });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateId = $formFilters.find('.valueStateId').val();
		if(filterStateId != null && filterStateId !== '')
			filters.push({ name: 'fq', value: 'stateId:' + filterStateId });

		var filterAgencyId = $formFilters.find('.valueAgencyId').val();
		if(filterAgencyId != null && filterAgencyId !== '')
			filters.push({ name: 'fq', value: 'agencyId:' + filterAgencyId });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterAgencyOnlyName = $formFilters.find('.valueAgencyOnlyName').val();
		if(filterAgencyOnlyName != null && filterAgencyOnlyName !== '')
			filters.push({ name: 'fq', value: 'agencyOnlyName:' + filterAgencyOnlyName });

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterReportCardCompleteName = $formFilters.find('.valueReportCardCompleteName').val();
		if(filterReportCardCompleteName != null && filterReportCardCompleteName !== '')
			filters.push({ name: 'fq', value: 'reportCardCompleteName:' + filterReportCardCompleteName });
	}
	return filters;
}

function searchReportCardVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'reportCardStartYear desc' });
	filters.push({ name: 'sort', value: 'stateName asc' });
	filters.push({ name: 'sort', value: 'agencyName asc' });
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
			var $span = $('<span>').attr('class', '').text(o['reportCardCompleteName']);
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

function suggestReportCardAgencyKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-road ');
			var $span = $('<span>').attr('class', '').text(o['agencyCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['reportCardKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_agencyKey_' + pk + '_reportCardKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgencyKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_agencyKey_" + pk + "_reportCardKeys_" + o['pk'] + "'); patchReportCardVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AgencyKey']: \"" + o['pk'] + "\" } ); ");
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
	searchSiteAgencyVals(filters, success, error);
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

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterPupilsIndigenousMale = $formFilters.find('.valuePupilsIndigenousMale').val();
		if(filterPupilsIndigenousMale != null && filterPupilsIndigenousMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousMale:' + filterPupilsIndigenousMale });

		var filterPupilsIndigenousFemale = $formFilters.find('.valuePupilsIndigenousFemale').val();
		if(filterPupilsIndigenousFemale != null && filterPupilsIndigenousFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousFemale:' + filterPupilsIndigenousFemale });

		var filterPupilsIndigenousTotal = $formFilters.find('.valuePupilsIndigenousTotal').val();
		if(filterPupilsIndigenousTotal != null && filterPupilsIndigenousTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousTotal:' + filterPupilsIndigenousTotal });

		var filterPupilsIndigenousPercent = $formFilters.find('.valuePupilsIndigenousPercent').val();
		if(filterPupilsIndigenousPercent != null && filterPupilsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndigenousPercent:' + filterPupilsIndigenousPercent });

		var filterPupilsAsianMale = $formFilters.find('.valuePupilsAsianMale').val();
		if(filterPupilsAsianMale != null && filterPupilsAsianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianMale:' + filterPupilsAsianMale });

		var filterPupilsAsianFemale = $formFilters.find('.valuePupilsAsianFemale').val();
		if(filterPupilsAsianFemale != null && filterPupilsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianFemale:' + filterPupilsAsianFemale });

		var filterPupilsAsianTotal = $formFilters.find('.valuePupilsAsianTotal').val();
		if(filterPupilsAsianTotal != null && filterPupilsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianTotal:' + filterPupilsAsianTotal });

		var filterPupilsAsianPercent = $formFilters.find('.valuePupilsAsianPercent').val();
		if(filterPupilsAsianPercent != null && filterPupilsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsAsianPercent:' + filterPupilsAsianPercent });

		var filterPupilsLatinxMale = $formFilters.find('.valuePupilsLatinxMale').val();
		if(filterPupilsLatinxMale != null && filterPupilsLatinxMale !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxMale:' + filterPupilsLatinxMale });

		var filterPupilsLatinxFemale = $formFilters.find('.valuePupilsLatinxFemale').val();
		if(filterPupilsLatinxFemale != null && filterPupilsLatinxFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxFemale:' + filterPupilsLatinxFemale });

		var filterPupilsLatinxTotal = $formFilters.find('.valuePupilsLatinxTotal').val();
		if(filterPupilsLatinxTotal != null && filterPupilsLatinxTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxTotal:' + filterPupilsLatinxTotal });

		var filterPupilsLatinxPercent = $formFilters.find('.valuePupilsLatinxPercent').val();
		if(filterPupilsLatinxPercent != null && filterPupilsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsLatinxPercent:' + filterPupilsLatinxPercent });

		var filterPupilsBlackMale = $formFilters.find('.valuePupilsBlackMale').val();
		if(filterPupilsBlackMale != null && filterPupilsBlackMale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackMale:' + filterPupilsBlackMale });

		var filterPupilsBlackFemale = $formFilters.find('.valuePupilsBlackFemale').val();
		if(filterPupilsBlackFemale != null && filterPupilsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackFemale:' + filterPupilsBlackFemale });

		var filterPupilsBlackTotal = $formFilters.find('.valuePupilsBlackTotal').val();
		if(filterPupilsBlackTotal != null && filterPupilsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackTotal:' + filterPupilsBlackTotal });

		var filterPupilsBlackPercent = $formFilters.find('.valuePupilsBlackPercent').val();
		if(filterPupilsBlackPercent != null && filterPupilsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsBlackPercent:' + filterPupilsBlackPercent });

		var filterPupilsWhiteMale = $formFilters.find('.valuePupilsWhiteMale').val();
		if(filterPupilsWhiteMale != null && filterPupilsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteMale:' + filterPupilsWhiteMale });

		var filterPupilsWhiteFemale = $formFilters.find('.valuePupilsWhiteFemale').val();
		if(filterPupilsWhiteFemale != null && filterPupilsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteFemale:' + filterPupilsWhiteFemale });

		var filterPupilsWhiteTotal = $formFilters.find('.valuePupilsWhiteTotal').val();
		if(filterPupilsWhiteTotal != null && filterPupilsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsWhiteTotal:' + filterPupilsWhiteTotal });

		var filterPupilsWhitePercent = $formFilters.find('.valuePupilsWhitePercent').val();
		if(filterPupilsWhitePercent != null && filterPupilsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'pupilsWhitePercent:' + filterPupilsWhitePercent });

		var filterPupilsPacificIslanderMale = $formFilters.find('.valuePupilsPacificIslanderMale').val();
		if(filterPupilsPacificIslanderMale != null && filterPupilsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderMale:' + filterPupilsPacificIslanderMale });

		var filterPupilsPacificIslanderFemale = $formFilters.find('.valuePupilsPacificIslanderFemale').val();
		if(filterPupilsPacificIslanderFemale != null && filterPupilsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderFemale:' + filterPupilsPacificIslanderFemale });

		var filterPupilsPacificIslanderTotal = $formFilters.find('.valuePupilsPacificIslanderTotal').val();
		if(filterPupilsPacificIslanderTotal != null && filterPupilsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderTotal:' + filterPupilsPacificIslanderTotal });

		var filterPupilsPacificIslanderPercent = $formFilters.find('.valuePupilsPacificIslanderPercent').val();
		if(filterPupilsPacificIslanderPercent != null && filterPupilsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsPacificIslanderPercent:' + filterPupilsPacificIslanderPercent });

		var filterPupilsMultiRacialMale = $formFilters.find('.valuePupilsMultiRacialMale').val();
		if(filterPupilsMultiRacialMale != null && filterPupilsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialMale:' + filterPupilsMultiRacialMale });

		var filterPupilsMultiRacialFemale = $formFilters.find('.valuePupilsMultiRacialFemale').val();
		if(filterPupilsMultiRacialFemale != null && filterPupilsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialFemale:' + filterPupilsMultiRacialFemale });

		var filterPupilsMultiRacialTotal = $formFilters.find('.valuePupilsMultiRacialTotal').val();
		if(filterPupilsMultiRacialTotal != null && filterPupilsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialTotal:' + filterPupilsMultiRacialTotal });

		var filterPupilsMultiRacialPercent = $formFilters.find('.valuePupilsMultiRacialPercent').val();
		if(filterPupilsMultiRacialPercent != null && filterPupilsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsMultiRacialPercent:' + filterPupilsMultiRacialPercent });

		var filterPupilsTotal = $formFilters.find('.valuePupilsTotal').val();
		if(filterPupilsTotal != null && filterPupilsTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsTotal:' + filterPupilsTotal });

		var filterTeachersMale = $formFilters.find('.valueTeachersMale').val();
		if(filterTeachersMale != null && filterTeachersMale !== '')
			filters.push({ name: 'fq', value: 'teachersMale:' + filterTeachersMale });

		var filterTeachersFemale = $formFilters.find('.valueTeachersFemale').val();
		if(filterTeachersFemale != null && filterTeachersFemale !== '')
			filters.push({ name: 'fq', value: 'teachersFemale:' + filterTeachersFemale });

		var filterTeachersTotal = $formFilters.find('.valueTeachersTotal').val();
		if(filterTeachersTotal != null && filterTeachersTotal !== '')
			filters.push({ name: 'fq', value: 'teachersTotal:' + filterTeachersTotal });

		var filterTeachersWhiteTotal = $formFilters.find('.valueTeachersWhiteTotal').val();
		if(filterTeachersWhiteTotal != null && filterTeachersWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'teachersWhiteTotal:' + filterTeachersWhiteTotal });

		var filterTeachersWhitePercent = $formFilters.find('.valueTeachersWhitePercent').val();
		if(filterTeachersWhitePercent != null && filterTeachersWhitePercent !== '')
			filters.push({ name: 'fq', value: 'teachersWhitePercent:' + filterTeachersWhitePercent });

		var filterTeachersBlackTotal = $formFilters.find('.valueTeachersBlackTotal').val();
		if(filterTeachersBlackTotal != null && filterTeachersBlackTotal !== '')
			filters.push({ name: 'fq', value: 'teachersBlackTotal:' + filterTeachersBlackTotal });

		var filterTeachersBlackPercent = $formFilters.find('.valueTeachersBlackPercent').val();
		if(filterTeachersBlackPercent != null && filterTeachersBlackPercent !== '')
			filters.push({ name: 'fq', value: 'teachersBlackPercent:' + filterTeachersBlackPercent });

		var filterTeachersOtherTotal = $formFilters.find('.valueTeachersOtherTotal').val();
		if(filterTeachersOtherTotal != null && filterTeachersOtherTotal !== '')
			filters.push({ name: 'fq', value: 'teachersOtherTotal:' + filterTeachersOtherTotal });

		var filterTeachersOtherPercent = $formFilters.find('.valueTeachersOtherPercent').val();
		if(filterTeachersOtherPercent != null && filterTeachersOtherPercent !== '')
			filters.push({ name: 'fq', value: 'teachersOtherPercent:' + filterTeachersOtherPercent });

		var filterDelinquentComplaintsTotal = $formFilters.find('.valueDelinquentComplaintsTotal').val();
		if(filterDelinquentComplaintsTotal != null && filterDelinquentComplaintsTotal !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsTotal:' + filterDelinquentComplaintsTotal });

		var filterDelinquentComplaintsAtSchool = $formFilters.find('.valueDelinquentComplaintsAtSchool').val();
		if(filterDelinquentComplaintsAtSchool != null && filterDelinquentComplaintsAtSchool !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchool:' + filterDelinquentComplaintsAtSchool });

		var filterDelinquentComplaintsAtSchoolPercent = $formFilters.find('.valueDelinquentComplaintsAtSchoolPercent').val();
		if(filterDelinquentComplaintsAtSchoolPercent != null && filterDelinquentComplaintsAtSchoolPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAtSchoolPercent:' + filterDelinquentComplaintsAtSchoolPercent });

		var filterDelinquentComplaintsAsian = $formFilters.find('.valueDelinquentComplaintsAsian').val();
		if(filterDelinquentComplaintsAsian != null && filterDelinquentComplaintsAsian !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAsian:' + filterDelinquentComplaintsAsian });

		var filterDelinquentComplaintsAsianPercent = $formFilters.find('.valueDelinquentComplaintsAsianPercent').val();
		if(filterDelinquentComplaintsAsianPercent != null && filterDelinquentComplaintsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsAsianPercent:' + filterDelinquentComplaintsAsianPercent });

		var filterDelinquentComplaintsBlack = $formFilters.find('.valueDelinquentComplaintsBlack').val();
		if(filterDelinquentComplaintsBlack != null && filterDelinquentComplaintsBlack !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsBlack:' + filterDelinquentComplaintsBlack });

		var filterDelinquentComplaintsBlackPercent = $formFilters.find('.valueDelinquentComplaintsBlackPercent').val();
		if(filterDelinquentComplaintsBlackPercent != null && filterDelinquentComplaintsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsBlackPercent:' + filterDelinquentComplaintsBlackPercent });

		var filterDelinquentComplaintsLatinx = $formFilters.find('.valueDelinquentComplaintsLatinx').val();
		if(filterDelinquentComplaintsLatinx != null && filterDelinquentComplaintsLatinx !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsLatinx:' + filterDelinquentComplaintsLatinx });

		var filterDelinquentComplaintsLatinxPercent = $formFilters.find('.valueDelinquentComplaintsLatinxPercent').val();
		if(filterDelinquentComplaintsLatinxPercent != null && filterDelinquentComplaintsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsLatinxPercent:' + filterDelinquentComplaintsLatinxPercent });

		var filterDelinquentComplaintsMultiRacial = $formFilters.find('.valueDelinquentComplaintsMultiRacial').val();
		if(filterDelinquentComplaintsMultiRacial != null && filterDelinquentComplaintsMultiRacial !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacial:' + filterDelinquentComplaintsMultiRacial });

		var filterDelinquentComplaintsMultiRacialPercent = $formFilters.find('.valueDelinquentComplaintsMultiRacialPercent').val();
		if(filterDelinquentComplaintsMultiRacialPercent != null && filterDelinquentComplaintsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacialPercent:' + filterDelinquentComplaintsMultiRacialPercent });

		var filterDelinquentComplaintsIndigenous = $formFilters.find('.valueDelinquentComplaintsIndigenous').val();
		if(filterDelinquentComplaintsIndigenous != null && filterDelinquentComplaintsIndigenous !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndigenous:' + filterDelinquentComplaintsIndigenous });

		var filterDelinquentComplaintsIndigenousPercent = $formFilters.find('.valueDelinquentComplaintsIndigenousPercent').val();
		if(filterDelinquentComplaintsIndigenousPercent != null && filterDelinquentComplaintsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndigenousPercent:' + filterDelinquentComplaintsIndigenousPercent });

		var filterDelinquentComplaintsWhite = $formFilters.find('.valueDelinquentComplaintsWhite').val();
		if(filterDelinquentComplaintsWhite != null && filterDelinquentComplaintsWhite !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsWhite:' + filterDelinquentComplaintsWhite });

		var filterDelinquentComplaintsWhitePercent = $formFilters.find('.valueDelinquentComplaintsWhitePercent').val();
		if(filterDelinquentComplaintsWhitePercent != null && filterDelinquentComplaintsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsWhitePercent:' + filterDelinquentComplaintsWhitePercent });

		var filterDelinquentComplaintsPacificIslander = $formFilters.find('.valueDelinquentComplaintsPacificIslander').val();
		if(filterDelinquentComplaintsPacificIslander != null && filterDelinquentComplaintsPacificIslander !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsPacificIslander:' + filterDelinquentComplaintsPacificIslander });

		var filterDelinquentComplaintsPacificIslanderPercent = $formFilters.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
		if(filterDelinquentComplaintsPacificIslanderPercent != null && filterDelinquentComplaintsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsPacificIslanderPercent:' + filterDelinquentComplaintsPacificIslanderPercent });

		var filterShortTermSuspensionRate = $formFilters.find('.valueShortTermSuspensionRate').val();
		if(filterShortTermSuspensionRate != null && filterShortTermSuspensionRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionRate:' + filterShortTermSuspensionRate });

		var filterShortTermSuspensionsTotal = $formFilters.find('.valueShortTermSuspensionsTotal').val();
		if(filterShortTermSuspensionsTotal != null && filterShortTermSuspensionsTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsTotal:' + filterShortTermSuspensionsTotal });

		var filterLongTermSuspensionsTotal = $formFilters.find('.valueLongTermSuspensionsTotal').val();
		if(filterLongTermSuspensionsTotal != null && filterLongTermSuspensionsTotal !== '')
			filters.push({ name: 'fq', value: 'longTermSuspensionsTotal:' + filterLongTermSuspensionsTotal });

		var filterExpulsionsTotal = $formFilters.find('.valueExpulsionsTotal').val();
		if(filterExpulsionsTotal != null && filterExpulsionsTotal !== '')
			filters.push({ name: 'fq', value: 'expulsionsTotal:' + filterExpulsionsTotal });

		var filterShortTermSuspensionsAsianFemale = $formFilters.find('.valueShortTermSuspensionsAsianFemale').val();
		if(filterShortTermSuspensionsAsianFemale != null && filterShortTermSuspensionsAsianFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianFemale:' + filterShortTermSuspensionsAsianFemale });

		var filterShortTermSuspensionsAsianMale = $formFilters.find('.valueShortTermSuspensionsAsianMale').val();
		if(filterShortTermSuspensionsAsianMale != null && filterShortTermSuspensionsAsianMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianMale:' + filterShortTermSuspensionsAsianMale });

		var filterShortTermSuspensionsAsianTotal = $formFilters.find('.valueShortTermSuspensionsAsianTotal').val();
		if(filterShortTermSuspensionsAsianTotal != null && filterShortTermSuspensionsAsianTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianTotal:' + filterShortTermSuspensionsAsianTotal });

		var filterShortTermSuspensionsAsianPercent = $formFilters.find('.valueShortTermSuspensionsAsianPercent').val();
		if(filterShortTermSuspensionsAsianPercent != null && filterShortTermSuspensionsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianPercent:' + filterShortTermSuspensionsAsianPercent });

		var filterShortTermSuspensionsAsianRate = $formFilters.find('.valueShortTermSuspensionsAsianRate').val();
		if(filterShortTermSuspensionsAsianRate != null && filterShortTermSuspensionsAsianRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAsianRate:' + filterShortTermSuspensionsAsianRate });

		var filterShortTermSuspensionsBlackFemale = $formFilters.find('.valueShortTermSuspensionsBlackFemale').val();
		if(filterShortTermSuspensionsBlackFemale != null && filterShortTermSuspensionsBlackFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackFemale:' + filterShortTermSuspensionsBlackFemale });

		var filterShortTermSuspensionsBlackMale = $formFilters.find('.valueShortTermSuspensionsBlackMale').val();
		if(filterShortTermSuspensionsBlackMale != null && filterShortTermSuspensionsBlackMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackMale:' + filterShortTermSuspensionsBlackMale });

		var filterShortTermSuspensionsBlackTotal = $formFilters.find('.valueShortTermSuspensionsBlackTotal').val();
		if(filterShortTermSuspensionsBlackTotal != null && filterShortTermSuspensionsBlackTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackTotal:' + filterShortTermSuspensionsBlackTotal });

		var filterShortTermSuspensionsBlackPercent = $formFilters.find('.valueShortTermSuspensionsBlackPercent').val();
		if(filterShortTermSuspensionsBlackPercent != null && filterShortTermSuspensionsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackPercent:' + filterShortTermSuspensionsBlackPercent });

		var filterShortTermSuspensionsBlackRate = $formFilters.find('.valueShortTermSuspensionsBlackRate').val();
		if(filterShortTermSuspensionsBlackRate != null && filterShortTermSuspensionsBlackRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackRate:' + filterShortTermSuspensionsBlackRate });

		var filterShortTermSuspensionsLatinxFemale = $formFilters.find('.valueShortTermSuspensionsLatinxFemale').val();
		if(filterShortTermSuspensionsLatinxFemale != null && filterShortTermSuspensionsLatinxFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxFemale:' + filterShortTermSuspensionsLatinxFemale });

		var filterShortTermSuspensionsLatinxMale = $formFilters.find('.valueShortTermSuspensionsLatinxMale').val();
		if(filterShortTermSuspensionsLatinxMale != null && filterShortTermSuspensionsLatinxMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxMale:' + filterShortTermSuspensionsLatinxMale });

		var filterShortTermSuspensionsLatinxTotal = $formFilters.find('.valueShortTermSuspensionsLatinxTotal').val();
		if(filterShortTermSuspensionsLatinxTotal != null && filterShortTermSuspensionsLatinxTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxTotal:' + filterShortTermSuspensionsLatinxTotal });

		var filterShortTermSuspensionsLatinxPercent = $formFilters.find('.valueShortTermSuspensionsLatinxPercent').val();
		if(filterShortTermSuspensionsLatinxPercent != null && filterShortTermSuspensionsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxPercent:' + filterShortTermSuspensionsLatinxPercent });

		var filterShortTermSuspensionsLatinxRate = $formFilters.find('.valueShortTermSuspensionsLatinxRate').val();
		if(filterShortTermSuspensionsLatinxRate != null && filterShortTermSuspensionsLatinxRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsLatinxRate:' + filterShortTermSuspensionsLatinxRate });

		var filterShortTermSuspensionsIndigenousFemale = $formFilters.find('.valueShortTermSuspensionsIndigenousFemale').val();
		if(filterShortTermSuspensionsIndigenousFemale != null && filterShortTermSuspensionsIndigenousFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousFemale:' + filterShortTermSuspensionsIndigenousFemale });

		var filterShortTermSuspensionsIndigenousMale = $formFilters.find('.valueShortTermSuspensionsIndigenousMale').val();
		if(filterShortTermSuspensionsIndigenousMale != null && filterShortTermSuspensionsIndigenousMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousMale:' + filterShortTermSuspensionsIndigenousMale });

		var filterShortTermSuspensionsIndigenousTotal = $formFilters.find('.valueShortTermSuspensionsIndigenousTotal').val();
		if(filterShortTermSuspensionsIndigenousTotal != null && filterShortTermSuspensionsIndigenousTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousTotal:' + filterShortTermSuspensionsIndigenousTotal });

		var filterShortTermSuspensionsIndigenousPercent = $formFilters.find('.valueShortTermSuspensionsIndigenousPercent').val();
		if(filterShortTermSuspensionsIndigenousPercent != null && filterShortTermSuspensionsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousPercent:' + filterShortTermSuspensionsIndigenousPercent });

		var filterShortTermSuspensionsIndigenousRate = $formFilters.find('.valueShortTermSuspensionsIndigenousRate').val();
		if(filterShortTermSuspensionsIndigenousRate != null && filterShortTermSuspensionsIndigenousRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndigenousRate:' + filterShortTermSuspensionsIndigenousRate });

		var filterShortTermSuspensionsMultiRacialFemale = $formFilters.find('.valueShortTermSuspensionsMultiRacialFemale').val();
		if(filterShortTermSuspensionsMultiRacialFemale != null && filterShortTermSuspensionsMultiRacialFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialFemale:' + filterShortTermSuspensionsMultiRacialFemale });

		var filterShortTermSuspensionsMultiRacialMale = $formFilters.find('.valueShortTermSuspensionsMultiRacialMale').val();
		if(filterShortTermSuspensionsMultiRacialMale != null && filterShortTermSuspensionsMultiRacialMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialMale:' + filterShortTermSuspensionsMultiRacialMale });

		var filterShortTermSuspensionsMultiRacialTotal = $formFilters.find('.valueShortTermSuspensionsMultiRacialTotal').val();
		if(filterShortTermSuspensionsMultiRacialTotal != null && filterShortTermSuspensionsMultiRacialTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialTotal:' + filterShortTermSuspensionsMultiRacialTotal });

		var filterShortTermSuspensionsMultiRacialPercent = $formFilters.find('.valueShortTermSuspensionsMultiRacialPercent').val();
		if(filterShortTermSuspensionsMultiRacialPercent != null && filterShortTermSuspensionsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialPercent:' + filterShortTermSuspensionsMultiRacialPercent });

		var filterShortTermSuspensionsMultiRacialRate = $formFilters.find('.valueShortTermSuspensionsMultiRacialRate').val();
		if(filterShortTermSuspensionsMultiRacialRate != null && filterShortTermSuspensionsMultiRacialRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsMultiRacialRate:' + filterShortTermSuspensionsMultiRacialRate });

		var filterShortTermSuspensionsPacificIslanderFemale = $formFilters.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
		if(filterShortTermSuspensionsPacificIslanderFemale != null && filterShortTermSuspensionsPacificIslanderFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderFemale:' + filterShortTermSuspensionsPacificIslanderFemale });

		var filterShortTermSuspensionsPacificIslanderMale = $formFilters.find('.valueShortTermSuspensionsPacificIslanderMale').val();
		if(filterShortTermSuspensionsPacificIslanderMale != null && filterShortTermSuspensionsPacificIslanderMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderMale:' + filterShortTermSuspensionsPacificIslanderMale });

		var filterShortTermSuspensionsPacificIslanderTotal = $formFilters.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
		if(filterShortTermSuspensionsPacificIslanderTotal != null && filterShortTermSuspensionsPacificIslanderTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderTotal:' + filterShortTermSuspensionsPacificIslanderTotal });

		var filterShortTermSuspensionsPacificIslanderPercent = $formFilters.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
		if(filterShortTermSuspensionsPacificIslanderPercent != null && filterShortTermSuspensionsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderPercent:' + filterShortTermSuspensionsPacificIslanderPercent });

		var filterShortTermSuspensionsPacificIslanderRate = $formFilters.find('.valueShortTermSuspensionsPacificIslanderRate').val();
		if(filterShortTermSuspensionsPacificIslanderRate != null && filterShortTermSuspensionsPacificIslanderRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsPacificIslanderRate:' + filterShortTermSuspensionsPacificIslanderRate });

		var filterShortTermSuspensionsWhiteFemale = $formFilters.find('.valueShortTermSuspensionsWhiteFemale').val();
		if(filterShortTermSuspensionsWhiteFemale != null && filterShortTermSuspensionsWhiteFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteFemale:' + filterShortTermSuspensionsWhiteFemale });

		var filterShortTermSuspensionsWhiteMale = $formFilters.find('.valueShortTermSuspensionsWhiteMale').val();
		if(filterShortTermSuspensionsWhiteMale != null && filterShortTermSuspensionsWhiteMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteMale:' + filterShortTermSuspensionsWhiteMale });

		var filterShortTermSuspensionsWhiteTotal = $formFilters.find('.valueShortTermSuspensionsWhiteTotal').val();
		if(filterShortTermSuspensionsWhiteTotal != null && filterShortTermSuspensionsWhiteTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteTotal:' + filterShortTermSuspensionsWhiteTotal });

		var filterShortTermSuspensionsWhitePercent = $formFilters.find('.valueShortTermSuspensionsWhitePercent').val();
		if(filterShortTermSuspensionsWhitePercent != null && filterShortTermSuspensionsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhitePercent:' + filterShortTermSuspensionsWhitePercent });

		var filterShortTermSuspensionsWhiteRate = $formFilters.find('.valueShortTermSuspensionsWhiteRate').val();
		if(filterShortTermSuspensionsWhiteRate != null && filterShortTermSuspensionsWhiteRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsWhiteRate:' + filterShortTermSuspensionsWhiteRate });

		var filterShortTermSuspensionsAllRate = $formFilters.find('.valueShortTermSuspensionsAllRate').val();
		if(filterShortTermSuspensionsAllRate != null && filterShortTermSuspensionsAllRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsAllRate:' + filterShortTermSuspensionsAllRate });

		var filterShortTermSuspensionsBlackVsWhite = $formFilters.find('.valueShortTermSuspensionsBlackVsWhite').val();
		if(filterShortTermSuspensionsBlackVsWhite != null && filterShortTermSuspensionsBlackVsWhite !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsBlackVsWhite:' + filterShortTermSuspensionsBlackVsWhite });

		var filterExamsCollegeReadyGrades38OverallPercent = $formFilters.find('.valueExamsCollegeReadyGrades38OverallPercent').val();
		if(filterExamsCollegeReadyGrades38OverallPercent != null && filterExamsCollegeReadyGrades38OverallPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38OverallPercent:' + filterExamsCollegeReadyGrades38OverallPercent });

		var filterExamsCollegeReadyGrades38IndigenousPercent = $formFilters.find('.valueExamsCollegeReadyGrades38IndigenousPercent').val();
		if(filterExamsCollegeReadyGrades38IndigenousPercent != null && filterExamsCollegeReadyGrades38IndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38IndigenousPercent:' + filterExamsCollegeReadyGrades38IndigenousPercent });

		var filterExamsCollegeReadyGrades38AsianPercent = $formFilters.find('.valueExamsCollegeReadyGrades38AsianPercent').val();
		if(filterExamsCollegeReadyGrades38AsianPercent != null && filterExamsCollegeReadyGrades38AsianPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38AsianPercent:' + filterExamsCollegeReadyGrades38AsianPercent });

		var filterExamsCollegeReadyGrades38BlackPercent = $formFilters.find('.valueExamsCollegeReadyGrades38BlackPercent').val();
		if(filterExamsCollegeReadyGrades38BlackPercent != null && filterExamsCollegeReadyGrades38BlackPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38BlackPercent:' + filterExamsCollegeReadyGrades38BlackPercent });

		var filterExamsCollegeReadyGrades38LatinxPercent = $formFilters.find('.valueExamsCollegeReadyGrades38LatinxPercent').val();
		if(filterExamsCollegeReadyGrades38LatinxPercent != null && filterExamsCollegeReadyGrades38LatinxPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38LatinxPercent:' + filterExamsCollegeReadyGrades38LatinxPercent });

		var filterExamsCollegeReadyGrades38MultiRacialPercent = $formFilters.find('.valueExamsCollegeReadyGrades38MultiRacialPercent').val();
		if(filterExamsCollegeReadyGrades38MultiRacialPercent != null && filterExamsCollegeReadyGrades38MultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38MultiRacialPercent:' + filterExamsCollegeReadyGrades38MultiRacialPercent });

		var filterExamsCollegeReadyGrades38PacificIslanderPercent = $formFilters.find('.valueExamsCollegeReadyGrades38PacificIslanderPercent').val();
		if(filterExamsCollegeReadyGrades38PacificIslanderPercent != null && filterExamsCollegeReadyGrades38PacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38PacificIslanderPercent:' + filterExamsCollegeReadyGrades38PacificIslanderPercent });

		var filterExamsCollegeReadyGrades38WhitePercent = $formFilters.find('.valueExamsCollegeReadyGrades38WhitePercent').val();
		if(filterExamsCollegeReadyGrades38WhitePercent != null && filterExamsCollegeReadyGrades38WhitePercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38WhitePercent:' + filterExamsCollegeReadyGrades38WhitePercent });

		var filterExamsCollegeReadyGrades912OverallPercent = $formFilters.find('.valueExamsCollegeReadyGrades912OverallPercent').val();
		if(filterExamsCollegeReadyGrades912OverallPercent != null && filterExamsCollegeReadyGrades912OverallPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912OverallPercent:' + filterExamsCollegeReadyGrades912OverallPercent });

		var filterExamsCollegeReadyGrades912IndigenousPercent = $formFilters.find('.valueExamsCollegeReadyGrades912IndigenousPercent').val();
		if(filterExamsCollegeReadyGrades912IndigenousPercent != null && filterExamsCollegeReadyGrades912IndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912IndigenousPercent:' + filterExamsCollegeReadyGrades912IndigenousPercent });

		var filterExamsCollegeReadyGrades912AsianPercent = $formFilters.find('.valueExamsCollegeReadyGrades912AsianPercent').val();
		if(filterExamsCollegeReadyGrades912AsianPercent != null && filterExamsCollegeReadyGrades912AsianPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912AsianPercent:' + filterExamsCollegeReadyGrades912AsianPercent });

		var filterExamsCollegeReadyGrades912BlackPercent = $formFilters.find('.valueExamsCollegeReadyGrades912BlackPercent').val();
		if(filterExamsCollegeReadyGrades912BlackPercent != null && filterExamsCollegeReadyGrades912BlackPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912BlackPercent:' + filterExamsCollegeReadyGrades912BlackPercent });

		var filterExamsCollegeReadyGrades912LatinxPercent = $formFilters.find('.valueExamsCollegeReadyGrades912LatinxPercent').val();
		if(filterExamsCollegeReadyGrades912LatinxPercent != null && filterExamsCollegeReadyGrades912LatinxPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912LatinxPercent:' + filterExamsCollegeReadyGrades912LatinxPercent });

		var filterExamsCollegeReadyGrades912MultiRacialPercent = $formFilters.find('.valueExamsCollegeReadyGrades912MultiRacialPercent').val();
		if(filterExamsCollegeReadyGrades912MultiRacialPercent != null && filterExamsCollegeReadyGrades912MultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912MultiRacialPercent:' + filterExamsCollegeReadyGrades912MultiRacialPercent });

		var filterExamsCollegeReadyGrades912PacificIslanderPercent = $formFilters.find('.valueExamsCollegeReadyGrades912PacificIslanderPercent').val();
		if(filterExamsCollegeReadyGrades912PacificIslanderPercent != null && filterExamsCollegeReadyGrades912PacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912PacificIslanderPercent:' + filterExamsCollegeReadyGrades912PacificIslanderPercent });

		var filterExamsCollegeReadyGrades912WhitePercent = $formFilters.find('.valueExamsCollegeReadyGrades912WhitePercent').val();
		if(filterExamsCollegeReadyGrades912WhitePercent != null && filterExamsCollegeReadyGrades912WhitePercent !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades912WhitePercent:' + filterExamsCollegeReadyGrades912WhitePercent });

		var filterGraduateWithin4YearsOverallPercent = $formFilters.find('.valueGraduateWithin4YearsOverallPercent').val();
		if(filterGraduateWithin4YearsOverallPercent != null && filterGraduateWithin4YearsOverallPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsOverallPercent:' + filterGraduateWithin4YearsOverallPercent });

		var filterGraduateWithin4YearsIndigenousPercent = $formFilters.find('.valueGraduateWithin4YearsIndigenousPercent').val();
		if(filterGraduateWithin4YearsIndigenousPercent != null && filterGraduateWithin4YearsIndigenousPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsIndigenousPercent:' + filterGraduateWithin4YearsIndigenousPercent });

		var filterGraduateWithin4YearsAsianPercent = $formFilters.find('.valueGraduateWithin4YearsAsianPercent').val();
		if(filterGraduateWithin4YearsAsianPercent != null && filterGraduateWithin4YearsAsianPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsAsianPercent:' + filterGraduateWithin4YearsAsianPercent });

		var filterGraduateWithin4YearsBlackPercent = $formFilters.find('.valueGraduateWithin4YearsBlackPercent').val();
		if(filterGraduateWithin4YearsBlackPercent != null && filterGraduateWithin4YearsBlackPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsBlackPercent:' + filterGraduateWithin4YearsBlackPercent });

		var filterGraduateWithin4YearsLatinxPercent = $formFilters.find('.valueGraduateWithin4YearsLatinxPercent').val();
		if(filterGraduateWithin4YearsLatinxPercent != null && filterGraduateWithin4YearsLatinxPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsLatinxPercent:' + filterGraduateWithin4YearsLatinxPercent });

		var filterGraduateWithin4YearsMultiRacialPercent = $formFilters.find('.valueGraduateWithin4YearsMultiRacialPercent').val();
		if(filterGraduateWithin4YearsMultiRacialPercent != null && filterGraduateWithin4YearsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsMultiRacialPercent:' + filterGraduateWithin4YearsMultiRacialPercent });

		var filterGraduateWithin4YearsPacificIslanderPercent = $formFilters.find('.valueGraduateWithin4YearsPacificIslanderPercent').val();
		if(filterGraduateWithin4YearsPacificIslanderPercent != null && filterGraduateWithin4YearsPacificIslanderPercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsPacificIslanderPercent:' + filterGraduateWithin4YearsPacificIslanderPercent });

		var filterGraduateWithin4YearsWhitePercent = $formFilters.find('.valueGraduateWithin4YearsWhitePercent').val();
		if(filterGraduateWithin4YearsWhitePercent != null && filterGraduateWithin4YearsWhitePercent !== '')
			filters.push({ name: 'fq', value: 'graduateWithin4YearsWhitePercent:' + filterGraduateWithin4YearsWhitePercent });

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

		var filterReportCardYearsStr = $formFilters.find('.valueReportCardYearsStr').val();
		if(filterReportCardYearsStr != null && filterReportCardYearsStr !== '')
			filters.push({ name: 'fq', value: 'reportCardYearsStr:' + filterReportCardYearsStr });

		var filterImageLeft = $formFilters.find('.valueImageLeft').val();
		if(filterImageLeft != null && filterImageLeft !== '')
			filters.push({ name: 'fq', value: 'imageLeft:' + filterImageLeft });

		var filterImageTop = $formFilters.find('.valueImageTop').val();
		if(filterImageTop != null && filterImageTop !== '')
			filters.push({ name: 'fq', value: 'imageTop:' + filterImageTop });

		var filterPupilsOtherPercent = $formFilters.find('.valuePupilsOtherPercent').val();
		if(filterPupilsOtherPercent != null && filterPupilsOtherPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsOtherPercent:' + filterPupilsOtherPercent });

		var filterExamsCollegeReadyGrades38BlackVsWhite = $formFilters.find('.valueExamsCollegeReadyGrades38BlackVsWhite').val();
		if(filterExamsCollegeReadyGrades38BlackVsWhite != null && filterExamsCollegeReadyGrades38BlackVsWhite !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38BlackVsWhite:' + filterExamsCollegeReadyGrades38BlackVsWhite });

		var filterExamsCollegeReadyGrades38LatinxVsWhite = $formFilters.find('.valueExamsCollegeReadyGrades38LatinxVsWhite').val();
		if(filterExamsCollegeReadyGrades38LatinxVsWhite != null && filterExamsCollegeReadyGrades38LatinxVsWhite !== '')
			filters.push({ name: 'fq', value: 'examsCollegeReadyGrades38LatinxVsWhite:' + filterExamsCollegeReadyGrades38LatinxVsWhite });

		var filterStateKey = $formFilters.find('.valueStateKey').val();
		if(filterStateKey != null && filterStateKey !== '')
			filters.push({ name: 'fq', value: 'stateKey:' + filterStateKey });

		var filterStateId = $formFilters.find('.valueStateId').val();
		if(filterStateId != null && filterStateId !== '')
			filters.push({ name: 'fq', value: 'stateId:' + filterStateId });

		var filterAgencyId = $formFilters.find('.valueAgencyId').val();
		if(filterAgencyId != null && filterAgencyId !== '')
			filters.push({ name: 'fq', value: 'agencyId:' + filterAgencyId });

		var filterStateName = $formFilters.find('.valueStateName').val();
		if(filterStateName != null && filterStateName !== '')
			filters.push({ name: 'fq', value: 'stateName:' + filterStateName });

		var filterStateAbbreviation = $formFilters.find('.valueStateAbbreviation').val();
		if(filterStateAbbreviation != null && filterStateAbbreviation !== '')
			filters.push({ name: 'fq', value: 'stateAbbreviation:' + filterStateAbbreviation });

		var filterAgencyOnlyName = $formFilters.find('.valueAgencyOnlyName').val();
		if(filterAgencyOnlyName != null && filterAgencyOnlyName !== '')
			filters.push({ name: 'fq', value: 'agencyOnlyName:' + filterAgencyOnlyName });

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterReportCardCompleteName = $formFilters.find('.valueReportCardCompleteName').val();
		if(filterReportCardCompleteName != null && filterReportCardCompleteName !== '')
			filters.push({ name: 'fq', value: 'reportCardCompleteName:' + filterReportCardCompleteName });
	}
	return filters;
}

function adminsearchReportCardVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'reportCardStartYear desc' });
	filters.push({ name: 'sort', value: 'stateName asc' });
	filters.push({ name: 'sort', value: 'agencyName asc' });
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
			var $span = $('<span>').attr('class', '').text(o['reportCardCompleteName']);
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

function suggestReportCardAgencyKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-road ');
			var $span = $('<span>').attr('class', '').text(o['agencyCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['reportCardKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_agencyKey_' + pk + '_reportCardKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAgencyKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_agencyKey_" + pk + "_reportCardKeys_" + o['pk'] + "'); patchReportCardVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AgencyKey']: \"" + o['pk'] + "\" } ); ");
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
	searchSiteAgencyVals(filters, success, error);
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
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
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
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).remove();
					$('.top-box').append($box);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketSiteAgency', function (error, message) {
			$('#Page_agencyKey').trigger('oninput');
			$('#Page_agencyKey_add').text('add a agency');
			$('#Page_agencyKey_add').removeClass('w3-disabled');
			$('#Page_agencyKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteAgency', function (error, message) {
			$('#Page_agencyKey').trigger('oninput');
			$('#Page_agencyKey_add').text('add a agency');
			$('#Page_agencyKey_add').removeClass('w3-disabled');
			$('#Page_agencyKey_add').attr('disabled', false);
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
			var val = o['agencyKey'];
			if(vars.includes('agencyKey')) {
				$('.inputReportCard' + pk + 'AgencyKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyKey'));
			}
			var val = o['pupilsIndigenousMale'];
			if(vars.includes('pupilsIndigenousMale')) {
				$('.inputReportCard' + pk + 'PupilsIndigenousMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndigenousMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndigenousMale'));
			}
			var val = o['pupilsIndigenousFemale'];
			if(vars.includes('pupilsIndigenousFemale')) {
				$('.inputReportCard' + pk + 'PupilsIndigenousFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndigenousFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndigenousFemale'));
			}
			var val = o['pupilsIndigenousTotal'];
			if(vars.includes('pupilsIndigenousTotal')) {
				$('.inputReportCard' + pk + 'PupilsIndigenousTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndigenousTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndigenousTotal'));
			}
			var val = o['pupilsIndigenousPercent'];
			if(vars.includes('pupilsIndigenousPercent')) {
				$('.inputReportCard' + pk + 'PupilsIndigenousPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsIndigenousPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsIndigenousPercent'));
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
			var val = o['pupilsLatinxMale'];
			if(vars.includes('pupilsLatinxMale')) {
				$('.inputReportCard' + pk + 'PupilsLatinxMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsLatinxMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsLatinxMale'));
			}
			var val = o['pupilsLatinxFemale'];
			if(vars.includes('pupilsLatinxFemale')) {
				$('.inputReportCard' + pk + 'PupilsLatinxFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsLatinxFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsLatinxFemale'));
			}
			var val = o['pupilsLatinxTotal'];
			if(vars.includes('pupilsLatinxTotal')) {
				$('.inputReportCard' + pk + 'PupilsLatinxTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsLatinxTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsLatinxTotal'));
			}
			var val = o['pupilsLatinxPercent'];
			if(vars.includes('pupilsLatinxPercent')) {
				$('.inputReportCard' + pk + 'PupilsLatinxPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsLatinxPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsLatinxPercent'));
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
			var val = o['teachersMale'];
			if(vars.includes('teachersMale')) {
				$('.inputReportCard' + pk + 'TeachersMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersMale'));
			}
			var val = o['teachersFemale'];
			if(vars.includes('teachersFemale')) {
				$('.inputReportCard' + pk + 'TeachersFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersFemale'));
			}
			var val = o['teachersTotal'];
			if(vars.includes('teachersTotal')) {
				$('.inputReportCard' + pk + 'TeachersTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersTotal'));
			}
			var val = o['teachersWhiteTotal'];
			if(vars.includes('teachersWhiteTotal')) {
				$('.inputReportCard' + pk + 'TeachersWhiteTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersWhiteTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersWhiteTotal'));
			}
			var val = o['teachersWhitePercent'];
			if(vars.includes('teachersWhitePercent')) {
				$('.inputReportCard' + pk + 'TeachersWhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersWhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersWhitePercent'));
			}
			var val = o['teachersBlackTotal'];
			if(vars.includes('teachersBlackTotal')) {
				$('.inputReportCard' + pk + 'TeachersBlackTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersBlackTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersBlackTotal'));
			}
			var val = o['teachersBlackPercent'];
			if(vars.includes('teachersBlackPercent')) {
				$('.inputReportCard' + pk + 'TeachersBlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersBlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersBlackPercent'));
			}
			var val = o['teachersOtherTotal'];
			if(vars.includes('teachersOtherTotal')) {
				$('.inputReportCard' + pk + 'TeachersOtherTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersOtherTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersOtherTotal'));
			}
			var val = o['teachersOtherPercent'];
			if(vars.includes('teachersOtherPercent')) {
				$('.inputReportCard' + pk + 'TeachersOtherPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'TeachersOtherPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'TeachersOtherPercent'));
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
			var val = o['delinquentComplaintsAsian'];
			if(vars.includes('delinquentComplaintsAsian')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsAsian').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsAsian').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsAsian'));
			}
			var val = o['delinquentComplaintsAsianPercent'];
			if(vars.includes('delinquentComplaintsAsianPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsAsianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsAsianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsAsianPercent'));
			}
			var val = o['delinquentComplaintsBlack'];
			if(vars.includes('delinquentComplaintsBlack')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsBlack').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsBlack').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsBlack'));
			}
			var val = o['delinquentComplaintsBlackPercent'];
			if(vars.includes('delinquentComplaintsBlackPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsBlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsBlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsBlackPercent'));
			}
			var val = o['delinquentComplaintsLatinx'];
			if(vars.includes('delinquentComplaintsLatinx')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsLatinx').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsLatinx').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsLatinx'));
			}
			var val = o['delinquentComplaintsLatinxPercent'];
			if(vars.includes('delinquentComplaintsLatinxPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsLatinxPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsLatinxPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsLatinxPercent'));
			}
			var val = o['delinquentComplaintsMultiRacial'];
			if(vars.includes('delinquentComplaintsMultiRacial')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsMultiRacial').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsMultiRacial').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsMultiRacial'));
			}
			var val = o['delinquentComplaintsMultiRacialPercent'];
			if(vars.includes('delinquentComplaintsMultiRacialPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsMultiRacialPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsMultiRacialPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsMultiRacialPercent'));
			}
			var val = o['delinquentComplaintsIndigenous'];
			if(vars.includes('delinquentComplaintsIndigenous')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsIndigenous').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsIndigenous').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsIndigenous'));
			}
			var val = o['delinquentComplaintsIndigenousPercent'];
			if(vars.includes('delinquentComplaintsIndigenousPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsIndigenousPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsIndigenousPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsIndigenousPercent'));
			}
			var val = o['delinquentComplaintsWhite'];
			if(vars.includes('delinquentComplaintsWhite')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsWhite').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsWhite').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsWhite'));
			}
			var val = o['delinquentComplaintsWhitePercent'];
			if(vars.includes('delinquentComplaintsWhitePercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsWhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsWhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsWhitePercent'));
			}
			var val = o['delinquentComplaintsPacificIslander'];
			if(vars.includes('delinquentComplaintsPacificIslander')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsPacificIslander').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsPacificIslander').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsPacificIslander'));
			}
			var val = o['delinquentComplaintsPacificIslanderPercent'];
			if(vars.includes('delinquentComplaintsPacificIslanderPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsPacificIslanderPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsPacificIslanderPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsPacificIslanderPercent'));
			}
			var val = o['shortTermSuspensionRate'];
			if(vars.includes('shortTermSuspensionRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionRate'));
			}
			var val = o['shortTermSuspensionsTotal'];
			if(vars.includes('shortTermSuspensionsTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsTotal'));
			}
			var val = o['longTermSuspensionsTotal'];
			if(vars.includes('longTermSuspensionsTotal')) {
				$('.inputReportCard' + pk + 'LongTermSuspensionsTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'LongTermSuspensionsTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'LongTermSuspensionsTotal'));
			}
			var val = o['expulsionsTotal'];
			if(vars.includes('expulsionsTotal')) {
				$('.inputReportCard' + pk + 'ExpulsionsTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExpulsionsTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExpulsionsTotal'));
			}
			var val = o['shortTermSuspensionsAsianFemale'];
			if(vars.includes('shortTermSuspensionsAsianFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsAsianFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsAsianFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsAsianFemale'));
			}
			var val = o['shortTermSuspensionsAsianMale'];
			if(vars.includes('shortTermSuspensionsAsianMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsAsianMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsAsianMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsAsianMale'));
			}
			var val = o['shortTermSuspensionsAsianTotal'];
			if(vars.includes('shortTermSuspensionsAsianTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsAsianTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsAsianTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsAsianTotal'));
			}
			var val = o['shortTermSuspensionsAsianPercent'];
			if(vars.includes('shortTermSuspensionsAsianPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsAsianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsAsianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsAsianPercent'));
			}
			var val = o['shortTermSuspensionsAsianRate'];
			if(vars.includes('shortTermSuspensionsAsianRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsAsianRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsAsianRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsAsianRate'));
			}
			var val = o['shortTermSuspensionsBlackFemale'];
			if(vars.includes('shortTermSuspensionsBlackFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsBlackFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsBlackFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsBlackFemale'));
			}
			var val = o['shortTermSuspensionsBlackMale'];
			if(vars.includes('shortTermSuspensionsBlackMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsBlackMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsBlackMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsBlackMale'));
			}
			var val = o['shortTermSuspensionsBlackTotal'];
			if(vars.includes('shortTermSuspensionsBlackTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsBlackTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsBlackTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsBlackTotal'));
			}
			var val = o['shortTermSuspensionsBlackPercent'];
			if(vars.includes('shortTermSuspensionsBlackPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsBlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsBlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsBlackPercent'));
			}
			var val = o['shortTermSuspensionsBlackRate'];
			if(vars.includes('shortTermSuspensionsBlackRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsBlackRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsBlackRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsBlackRate'));
			}
			var val = o['shortTermSuspensionsLatinxFemale'];
			if(vars.includes('shortTermSuspensionsLatinxFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsLatinxFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxFemale'));
			}
			var val = o['shortTermSuspensionsLatinxMale'];
			if(vars.includes('shortTermSuspensionsLatinxMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsLatinxMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxMale'));
			}
			var val = o['shortTermSuspensionsLatinxTotal'];
			if(vars.includes('shortTermSuspensionsLatinxTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsLatinxTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxTotal'));
			}
			var val = o['shortTermSuspensionsLatinxPercent'];
			if(vars.includes('shortTermSuspensionsLatinxPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsLatinxPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxPercent'));
			}
			var val = o['shortTermSuspensionsLatinxRate'];
			if(vars.includes('shortTermSuspensionsLatinxRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsLatinxRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsLatinxRate'));
			}
			var val = o['shortTermSuspensionsIndigenousFemale'];
			if(vars.includes('shortTermSuspensionsIndigenousFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndigenousFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousFemale'));
			}
			var val = o['shortTermSuspensionsIndigenousMale'];
			if(vars.includes('shortTermSuspensionsIndigenousMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndigenousMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousMale'));
			}
			var val = o['shortTermSuspensionsIndigenousTotal'];
			if(vars.includes('shortTermSuspensionsIndigenousTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndigenousTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousTotal'));
			}
			var val = o['shortTermSuspensionsIndigenousPercent'];
			if(vars.includes('shortTermSuspensionsIndigenousPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndigenousPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousPercent'));
			}
			var val = o['shortTermSuspensionsIndigenousRate'];
			if(vars.includes('shortTermSuspensionsIndigenousRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndigenousRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndigenousRate'));
			}
			var val = o['shortTermSuspensionsMultiRacialFemale'];
			if(vars.includes('shortTermSuspensionsMultiRacialFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsMultiRacialFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialFemale'));
			}
			var val = o['shortTermSuspensionsMultiRacialMale'];
			if(vars.includes('shortTermSuspensionsMultiRacialMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsMultiRacialMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialMale'));
			}
			var val = o['shortTermSuspensionsMultiRacialTotal'];
			if(vars.includes('shortTermSuspensionsMultiRacialTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsMultiRacialTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialTotal'));
			}
			var val = o['shortTermSuspensionsMultiRacialPercent'];
			if(vars.includes('shortTermSuspensionsMultiRacialPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsMultiRacialPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialPercent'));
			}
			var val = o['shortTermSuspensionsMultiRacialRate'];
			if(vars.includes('shortTermSuspensionsMultiRacialRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsMultiRacialRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsMultiRacialRate'));
			}
			var val = o['shortTermSuspensionsPacificIslanderFemale'];
			if(vars.includes('shortTermSuspensionsPacificIslanderFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsPacificIslanderFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderFemale'));
			}
			var val = o['shortTermSuspensionsPacificIslanderMale'];
			if(vars.includes('shortTermSuspensionsPacificIslanderMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsPacificIslanderMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderMale'));
			}
			var val = o['shortTermSuspensionsPacificIslanderTotal'];
			if(vars.includes('shortTermSuspensionsPacificIslanderTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsPacificIslanderTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderTotal'));
			}
			var val = o['shortTermSuspensionsPacificIslanderPercent'];
			if(vars.includes('shortTermSuspensionsPacificIslanderPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsPacificIslanderPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderPercent'));
			}
			var val = o['shortTermSuspensionsPacificIslanderRate'];
			if(vars.includes('shortTermSuspensionsPacificIslanderRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsPacificIslanderRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsPacificIslanderRate'));
			}
			var val = o['shortTermSuspensionsWhiteFemale'];
			if(vars.includes('shortTermSuspensionsWhiteFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsWhiteFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteFemale'));
			}
			var val = o['shortTermSuspensionsWhiteMale'];
			if(vars.includes('shortTermSuspensionsWhiteMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsWhiteMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteMale'));
			}
			var val = o['shortTermSuspensionsWhiteTotal'];
			if(vars.includes('shortTermSuspensionsWhiteTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsWhiteTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteTotal'));
			}
			var val = o['shortTermSuspensionsWhitePercent'];
			if(vars.includes('shortTermSuspensionsWhitePercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsWhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsWhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsWhitePercent'));
			}
			var val = o['shortTermSuspensionsWhiteRate'];
			if(vars.includes('shortTermSuspensionsWhiteRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsWhiteRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsWhiteRate'));
			}
			var val = o['shortTermSuspensionsAllRate'];
			if(vars.includes('shortTermSuspensionsAllRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsAllRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsAllRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsAllRate'));
			}
			var val = o['shortTermSuspensionsBlackVsWhite'];
			if(vars.includes('shortTermSuspensionsBlackVsWhite')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsBlackVsWhite').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsBlackVsWhite').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsBlackVsWhite'));
			}
			var val = o['examsCollegeReadyGrades38OverallPercent'];
			if(vars.includes('examsCollegeReadyGrades38OverallPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38OverallPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38OverallPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38OverallPercent'));
			}
			var val = o['examsCollegeReadyGrades38IndigenousPercent'];
			if(vars.includes('examsCollegeReadyGrades38IndigenousPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38IndigenousPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38IndigenousPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38IndigenousPercent'));
			}
			var val = o['examsCollegeReadyGrades38AsianPercent'];
			if(vars.includes('examsCollegeReadyGrades38AsianPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38AsianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38AsianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38AsianPercent'));
			}
			var val = o['examsCollegeReadyGrades38BlackPercent'];
			if(vars.includes('examsCollegeReadyGrades38BlackPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38BlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38BlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38BlackPercent'));
			}
			var val = o['examsCollegeReadyGrades38LatinxPercent'];
			if(vars.includes('examsCollegeReadyGrades38LatinxPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38LatinxPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38LatinxPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38LatinxPercent'));
			}
			var val = o['examsCollegeReadyGrades38MultiRacialPercent'];
			if(vars.includes('examsCollegeReadyGrades38MultiRacialPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38MultiRacialPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38MultiRacialPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38MultiRacialPercent'));
			}
			var val = o['examsCollegeReadyGrades38PacificIslanderPercent'];
			if(vars.includes('examsCollegeReadyGrades38PacificIslanderPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38PacificIslanderPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38PacificIslanderPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38PacificIslanderPercent'));
			}
			var val = o['examsCollegeReadyGrades38WhitePercent'];
			if(vars.includes('examsCollegeReadyGrades38WhitePercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38WhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38WhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38WhitePercent'));
			}
			var val = o['examsCollegeReadyGrades912OverallPercent'];
			if(vars.includes('examsCollegeReadyGrades912OverallPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912OverallPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912OverallPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912OverallPercent'));
			}
			var val = o['examsCollegeReadyGrades912IndigenousPercent'];
			if(vars.includes('examsCollegeReadyGrades912IndigenousPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912IndigenousPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912IndigenousPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912IndigenousPercent'));
			}
			var val = o['examsCollegeReadyGrades912AsianPercent'];
			if(vars.includes('examsCollegeReadyGrades912AsianPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912AsianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912AsianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912AsianPercent'));
			}
			var val = o['examsCollegeReadyGrades912BlackPercent'];
			if(vars.includes('examsCollegeReadyGrades912BlackPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912BlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912BlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912BlackPercent'));
			}
			var val = o['examsCollegeReadyGrades912LatinxPercent'];
			if(vars.includes('examsCollegeReadyGrades912LatinxPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912LatinxPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912LatinxPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912LatinxPercent'));
			}
			var val = o['examsCollegeReadyGrades912MultiRacialPercent'];
			if(vars.includes('examsCollegeReadyGrades912MultiRacialPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912MultiRacialPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912MultiRacialPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912MultiRacialPercent'));
			}
			var val = o['examsCollegeReadyGrades912PacificIslanderPercent'];
			if(vars.includes('examsCollegeReadyGrades912PacificIslanderPercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912PacificIslanderPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912PacificIslanderPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912PacificIslanderPercent'));
			}
			var val = o['examsCollegeReadyGrades912WhitePercent'];
			if(vars.includes('examsCollegeReadyGrades912WhitePercent')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912WhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades912WhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades912WhitePercent'));
			}
			var val = o['graduateWithin4YearsOverallPercent'];
			if(vars.includes('graduateWithin4YearsOverallPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsOverallPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsOverallPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsOverallPercent'));
			}
			var val = o['graduateWithin4YearsIndigenousPercent'];
			if(vars.includes('graduateWithin4YearsIndigenousPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsIndigenousPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsIndigenousPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsIndigenousPercent'));
			}
			var val = o['graduateWithin4YearsAsianPercent'];
			if(vars.includes('graduateWithin4YearsAsianPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsAsianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsAsianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsAsianPercent'));
			}
			var val = o['graduateWithin4YearsBlackPercent'];
			if(vars.includes('graduateWithin4YearsBlackPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsBlackPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsBlackPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsBlackPercent'));
			}
			var val = o['graduateWithin4YearsLatinxPercent'];
			if(vars.includes('graduateWithin4YearsLatinxPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsLatinxPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsLatinxPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsLatinxPercent'));
			}
			var val = o['graduateWithin4YearsMultiRacialPercent'];
			if(vars.includes('graduateWithin4YearsMultiRacialPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsMultiRacialPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsMultiRacialPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsMultiRacialPercent'));
			}
			var val = o['graduateWithin4YearsPacificIslanderPercent'];
			if(vars.includes('graduateWithin4YearsPacificIslanderPercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsPacificIslanderPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsPacificIslanderPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsPacificIslanderPercent'));
			}
			var val = o['graduateWithin4YearsWhitePercent'];
			if(vars.includes('graduateWithin4YearsWhitePercent')) {
				$('.inputReportCard' + pk + 'GraduateWithin4YearsWhitePercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'GraduateWithin4YearsWhitePercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'GraduateWithin4YearsWhitePercent'));
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
			var val = o['modifiedIsoOffsetDateTime'];
			if(vars.includes('modifiedIsoOffsetDateTime')) {
				$('.inputReportCard' + pk + 'ModifiedIsoOffsetDateTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ModifiedIsoOffsetDateTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ModifiedIsoOffsetDateTime'));
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
			var val = o['reportCardYearsStr'];
			if(vars.includes('reportCardYearsStr')) {
				$('.inputReportCard' + pk + 'ReportCardYearsStr').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ReportCardYearsStr').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ReportCardYearsStr'));
			}
			var val = o['imageLeft'];
			if(vars.includes('imageLeft')) {
				$('.inputReportCard' + pk + 'ImageLeft').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ImageLeft').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ImageLeft'));
			}
			var val = o['imageTop'];
			if(vars.includes('imageTop')) {
				$('.inputReportCard' + pk + 'ImageTop').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ImageTop').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ImageTop'));
			}
			var val = o['pupilsOtherPercent'];
			if(vars.includes('pupilsOtherPercent')) {
				$('.inputReportCard' + pk + 'PupilsOtherPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'PupilsOtherPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'PupilsOtherPercent'));
			}
			var val = o['examsCollegeReadyGrades38BlackVsWhite'];
			if(vars.includes('examsCollegeReadyGrades38BlackVsWhite')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38BlackVsWhite').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38BlackVsWhite').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38BlackVsWhite'));
			}
			var val = o['examsCollegeReadyGrades38LatinxVsWhite'];
			if(vars.includes('examsCollegeReadyGrades38LatinxVsWhite')) {
				$('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38LatinxVsWhite').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ExamsCollegeReadyGrades38LatinxVsWhite').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ExamsCollegeReadyGrades38LatinxVsWhite'));
			}
			var val = o['stateKey'];
			if(vars.includes('stateKey')) {
				$('.inputReportCard' + pk + 'StateKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'StateKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'StateKey'));
			}
			var val = o['stateId'];
			if(vars.includes('stateId')) {
				$('.inputReportCard' + pk + 'StateId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'StateId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'StateId'));
			}
			var val = o['agencyId'];
			if(vars.includes('agencyId')) {
				$('.inputReportCard' + pk + 'AgencyId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyId'));
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
			var val = o['agencyOnlyName'];
			if(vars.includes('agencyOnlyName')) {
				$('.inputReportCard' + pk + 'AgencyOnlyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyOnlyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyOnlyName'));
			}
			var val = o['agencyName'];
			if(vars.includes('agencyName')) {
				$('.inputReportCard' + pk + 'AgencyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyName'));
			}
			var val = o['agencyCoords'];
			if(vars.includes('agencyCoords')) {
				$('.inputReportCard' + pk + 'AgencyCoords').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyCoords').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyCoords'));
			}
			var val = o['agencyLeft'];
			if(vars.includes('agencyLeft')) {
				$('.inputReportCard' + pk + 'AgencyLeft').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyLeft').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyLeft'));
			}
			var val = o['reportCardCompleteName'];
			if(vars.includes('reportCardCompleteName')) {
				$('.inputReportCard' + pk + 'ReportCardCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ReportCardCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ReportCardCompleteName'));
			}
			var val = o['agencyDemographicsGraph'];
			if(vars.includes('agencyDemographicsGraph')) {
				$('.inputReportCard' + pk + 'AgencyDemographicsGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyDemographicsGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyDemographicsGraph'));
			}
			var val = o['agencyStudentsByRaceGraph'];
			if(vars.includes('agencyStudentsByRaceGraph')) {
				$('.inputReportCard' + pk + 'AgencyStudentsByRaceGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyStudentsByRaceGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyStudentsByRaceGraph'));
			}
			var val = o['agencyTeachersByRaceGraph'];
			if(vars.includes('agencyTeachersByRaceGraph')) {
				$('.inputReportCard' + pk + 'AgencyTeachersByRaceGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyTeachersByRaceGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyTeachersByRaceGraph'));
			}
			var val = o['agencyGrades3To8Graph'];
			if(vars.includes('agencyGrades3To8Graph')) {
				$('.inputReportCard' + pk + 'AgencyGrades3To8Graph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyGrades3To8Graph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyGrades3To8Graph'));
			}
			var val = o['agencyGrades9To12Graph'];
			if(vars.includes('agencyGrades9To12Graph')) {
				$('.inputReportCard' + pk + 'AgencyGrades9To12Graph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyGrades9To12Graph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyGrades9To12Graph'));
			}
			var val = o['agencyGraduatesWithin4YearsGraph'];
			if(vars.includes('agencyGraduatesWithin4YearsGraph')) {
				$('.inputReportCard' + pk + 'AgencyGraduatesWithin4YearsGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyGraduatesWithin4YearsGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyGraduatesWithin4YearsGraph'));
			}
			var val = o['suspensionsByRaceGraph'];
			if(vars.includes('suspensionsByRaceGraph')) {
				$('.inputReportCard' + pk + 'SuspensionsByRaceGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'SuspensionsByRaceGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'SuspensionsByRaceGraph'));
			}
			var val = o['suspensionRatesByRaceGraph'];
			if(vars.includes('suspensionRatesByRaceGraph')) {
				$('.inputReportCard' + pk + 'SuspensionRatesByRaceGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'SuspensionRatesByRaceGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'SuspensionRatesByRaceGraph'));
			}
			var val = o['countySchoolBasedComplaintsGraph'];
			if(vars.includes('countySchoolBasedComplaintsGraph')) {
				$('.inputReportCard' + pk + 'CountySchoolBasedComplaintsGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'CountySchoolBasedComplaintsGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'CountySchoolBasedComplaintsGraph'));
			}
			var val = o['schoolBasedComplaintsGraph'];
			if(vars.includes('schoolBasedComplaintsGraph')) {
				$('.inputReportCard' + pk + 'SchoolBasedComplaintsGraph').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'SchoolBasedComplaintsGraph').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'SchoolBasedComplaintsGraph'));
			}
			var val = o['agencyStudentsByRaceGraph2'];
			if(vars.includes('agencyStudentsByRaceGraph2')) {
				$('.inputReportCard' + pk + 'AgencyStudentsByRaceGraph2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyStudentsByRaceGraph2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyStudentsByRaceGraph2'));
			}
			var val = o['reportCardImage'];
			if(vars.includes('reportCardImage')) {
				$('.inputReportCard' + pk + 'ReportCardImage').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ReportCardImage').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ReportCardImage'));
			}
		});
	}
}
