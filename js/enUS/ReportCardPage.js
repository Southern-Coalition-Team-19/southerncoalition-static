
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

	var valuePupilsIndianMale = $formValues.find('.valuePupilsIndianMale').val();
	if(valuePupilsIndianMale != null && valuePupilsIndianMale !== '')
		vals['pupilsIndianMale'] = valuePupilsIndianMale;

	var valuePupilsIndianFemale = $formValues.find('.valuePupilsIndianFemale').val();
	if(valuePupilsIndianFemale != null && valuePupilsIndianFemale !== '')
		vals['pupilsIndianFemale'] = valuePupilsIndianFemale;

	var valuePupilsIndianTotal = $formValues.find('.valuePupilsIndianTotal').val();
	if(valuePupilsIndianTotal != null && valuePupilsIndianTotal !== '')
		vals['pupilsIndianTotal'] = valuePupilsIndianTotal;

	var valuePupilsIndianPercent = $formValues.find('.valuePupilsIndianPercent').val();
	if(valuePupilsIndianPercent != null && valuePupilsIndianPercent !== '')
		vals['pupilsIndianPercent'] = valuePupilsIndianPercent;

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

	var valuePupilsHispanicMale = $formValues.find('.valuePupilsHispanicMale').val();
	if(valuePupilsHispanicMale != null && valuePupilsHispanicMale !== '')
		vals['pupilsHispanicMale'] = valuePupilsHispanicMale;

	var valuePupilsHispanicFemale = $formValues.find('.valuePupilsHispanicFemale').val();
	if(valuePupilsHispanicFemale != null && valuePupilsHispanicFemale !== '')
		vals['pupilsHispanicFemale'] = valuePupilsHispanicFemale;

	var valuePupilsHispanicTotal = $formValues.find('.valuePupilsHispanicTotal').val();
	if(valuePupilsHispanicTotal != null && valuePupilsHispanicTotal !== '')
		vals['pupilsHispanicTotal'] = valuePupilsHispanicTotal;

	var valuePupilsHispanicPercent = $formValues.find('.valuePupilsHispanicPercent').val();
	if(valuePupilsHispanicPercent != null && valuePupilsHispanicPercent !== '')
		vals['pupilsHispanicPercent'] = valuePupilsHispanicPercent;

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

	var valueDelinquentComplaintsHispanic = $formValues.find('.valueDelinquentComplaintsHispanic').val();
	if(valueDelinquentComplaintsHispanic != null && valueDelinquentComplaintsHispanic !== '')
		vals['delinquentComplaintsHispanic'] = valueDelinquentComplaintsHispanic;

	var valueDelinquentComplaintsHispanicPercent = $formValues.find('.valueDelinquentComplaintsHispanicPercent').val();
	if(valueDelinquentComplaintsHispanicPercent != null && valueDelinquentComplaintsHispanicPercent !== '')
		vals['delinquentComplaintsHispanicPercent'] = valueDelinquentComplaintsHispanicPercent;

	var valueDelinquentComplaintsMultiRacial = $formValues.find('.valueDelinquentComplaintsMultiRacial').val();
	if(valueDelinquentComplaintsMultiRacial != null && valueDelinquentComplaintsMultiRacial !== '')
		vals['delinquentComplaintsMultiRacial'] = valueDelinquentComplaintsMultiRacial;

	var valueDelinquentComplaintsMultiRacialPercent = $formValues.find('.valueDelinquentComplaintsMultiRacialPercent').val();
	if(valueDelinquentComplaintsMultiRacialPercent != null && valueDelinquentComplaintsMultiRacialPercent !== '')
		vals['delinquentComplaintsMultiRacialPercent'] = valueDelinquentComplaintsMultiRacialPercent;

	var valueDelinquentComplaintsIndian = $formValues.find('.valueDelinquentComplaintsIndian').val();
	if(valueDelinquentComplaintsIndian != null && valueDelinquentComplaintsIndian !== '')
		vals['delinquentComplaintsIndian'] = valueDelinquentComplaintsIndian;

	var valueDelinquentComplaintsIndianPercent = $formValues.find('.valueDelinquentComplaintsIndianPercent').val();
	if(valueDelinquentComplaintsIndianPercent != null && valueDelinquentComplaintsIndianPercent !== '')
		vals['delinquentComplaintsIndianPercent'] = valueDelinquentComplaintsIndianPercent;

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

	var valueShortTermSuspensionsHispanicFemale = $formValues.find('.valueShortTermSuspensionsHispanicFemale').val();
	if(valueShortTermSuspensionsHispanicFemale != null && valueShortTermSuspensionsHispanicFemale !== '')
		vals['shortTermSuspensionsHispanicFemale'] = valueShortTermSuspensionsHispanicFemale;

	var valueShortTermSuspensionsHispanicMale = $formValues.find('.valueShortTermSuspensionsHispanicMale').val();
	if(valueShortTermSuspensionsHispanicMale != null && valueShortTermSuspensionsHispanicMale !== '')
		vals['shortTermSuspensionsHispanicMale'] = valueShortTermSuspensionsHispanicMale;

	var valueShortTermSuspensionsHispanicTotal = $formValues.find('.valueShortTermSuspensionsHispanicTotal').val();
	if(valueShortTermSuspensionsHispanicTotal != null && valueShortTermSuspensionsHispanicTotal !== '')
		vals['shortTermSuspensionsHispanicTotal'] = valueShortTermSuspensionsHispanicTotal;

	var valueShortTermSuspensionsHispanicPercent = $formValues.find('.valueShortTermSuspensionsHispanicPercent').val();
	if(valueShortTermSuspensionsHispanicPercent != null && valueShortTermSuspensionsHispanicPercent !== '')
		vals['shortTermSuspensionsHispanicPercent'] = valueShortTermSuspensionsHispanicPercent;

	var valueShortTermSuspensionsHispanicRate = $formValues.find('.valueShortTermSuspensionsHispanicRate').val();
	if(valueShortTermSuspensionsHispanicRate != null && valueShortTermSuspensionsHispanicRate !== '')
		vals['shortTermSuspensionsHispanicRate'] = valueShortTermSuspensionsHispanicRate;

	var valueShortTermSuspensionsIndianFemale = $formValues.find('.valueShortTermSuspensionsIndianFemale').val();
	if(valueShortTermSuspensionsIndianFemale != null && valueShortTermSuspensionsIndianFemale !== '')
		vals['shortTermSuspensionsIndianFemale'] = valueShortTermSuspensionsIndianFemale;

	var valueShortTermSuspensionsIndianMale = $formValues.find('.valueShortTermSuspensionsIndianMale').val();
	if(valueShortTermSuspensionsIndianMale != null && valueShortTermSuspensionsIndianMale !== '')
		vals['shortTermSuspensionsIndianMale'] = valueShortTermSuspensionsIndianMale;

	var valueShortTermSuspensionsIndianTotal = $formValues.find('.valueShortTermSuspensionsIndianTotal').val();
	if(valueShortTermSuspensionsIndianTotal != null && valueShortTermSuspensionsIndianTotal !== '')
		vals['shortTermSuspensionsIndianTotal'] = valueShortTermSuspensionsIndianTotal;

	var valueShortTermSuspensionsIndianPercent = $formValues.find('.valueShortTermSuspensionsIndianPercent').val();
	if(valueShortTermSuspensionsIndianPercent != null && valueShortTermSuspensionsIndianPercent !== '')
		vals['shortTermSuspensionsIndianPercent'] = valueShortTermSuspensionsIndianPercent;

	var valueShortTermSuspensionsIndianRate = $formValues.find('.valueShortTermSuspensionsIndianRate').val();
	if(valueShortTermSuspensionsIndianRate != null && valueShortTermSuspensionsIndianRate !== '')
		vals['shortTermSuspensionsIndianRate'] = valueShortTermSuspensionsIndianRate;

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

	var valuePupilsIndianMale = $formValues.find('.valuePupilsIndianMale').val();
	if(valuePupilsIndianMale != null && valuePupilsIndianMale !== '')
		vals['pupilsIndianMale'] = valuePupilsIndianMale;

	var valuePupilsIndianFemale = $formValues.find('.valuePupilsIndianFemale').val();
	if(valuePupilsIndianFemale != null && valuePupilsIndianFemale !== '')
		vals['pupilsIndianFemale'] = valuePupilsIndianFemale;

	var valuePupilsIndianTotal = $formValues.find('.valuePupilsIndianTotal').val();
	if(valuePupilsIndianTotal != null && valuePupilsIndianTotal !== '')
		vals['pupilsIndianTotal'] = valuePupilsIndianTotal;

	var valuePupilsIndianPercent = $formValues.find('.valuePupilsIndianPercent').val();
	if(valuePupilsIndianPercent != null && valuePupilsIndianPercent !== '')
		vals['pupilsIndianPercent'] = valuePupilsIndianPercent;

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

	var valuePupilsHispanicMale = $formValues.find('.valuePupilsHispanicMale').val();
	if(valuePupilsHispanicMale != null && valuePupilsHispanicMale !== '')
		vals['pupilsHispanicMale'] = valuePupilsHispanicMale;

	var valuePupilsHispanicFemale = $formValues.find('.valuePupilsHispanicFemale').val();
	if(valuePupilsHispanicFemale != null && valuePupilsHispanicFemale !== '')
		vals['pupilsHispanicFemale'] = valuePupilsHispanicFemale;

	var valuePupilsHispanicTotal = $formValues.find('.valuePupilsHispanicTotal').val();
	if(valuePupilsHispanicTotal != null && valuePupilsHispanicTotal !== '')
		vals['pupilsHispanicTotal'] = valuePupilsHispanicTotal;

	var valuePupilsHispanicPercent = $formValues.find('.valuePupilsHispanicPercent').val();
	if(valuePupilsHispanicPercent != null && valuePupilsHispanicPercent !== '')
		vals['pupilsHispanicPercent'] = valuePupilsHispanicPercent;

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

	var valueDelinquentComplaintsHispanic = $formValues.find('.valueDelinquentComplaintsHispanic').val();
	if(valueDelinquentComplaintsHispanic != null && valueDelinquentComplaintsHispanic !== '')
		vals['delinquentComplaintsHispanic'] = valueDelinquentComplaintsHispanic;

	var valueDelinquentComplaintsHispanicPercent = $formValues.find('.valueDelinquentComplaintsHispanicPercent').val();
	if(valueDelinquentComplaintsHispanicPercent != null && valueDelinquentComplaintsHispanicPercent !== '')
		vals['delinquentComplaintsHispanicPercent'] = valueDelinquentComplaintsHispanicPercent;

	var valueDelinquentComplaintsMultiRacial = $formValues.find('.valueDelinquentComplaintsMultiRacial').val();
	if(valueDelinquentComplaintsMultiRacial != null && valueDelinquentComplaintsMultiRacial !== '')
		vals['delinquentComplaintsMultiRacial'] = valueDelinquentComplaintsMultiRacial;

	var valueDelinquentComplaintsMultiRacialPercent = $formValues.find('.valueDelinquentComplaintsMultiRacialPercent').val();
	if(valueDelinquentComplaintsMultiRacialPercent != null && valueDelinquentComplaintsMultiRacialPercent !== '')
		vals['delinquentComplaintsMultiRacialPercent'] = valueDelinquentComplaintsMultiRacialPercent;

	var valueDelinquentComplaintsIndian = $formValues.find('.valueDelinquentComplaintsIndian').val();
	if(valueDelinquentComplaintsIndian != null && valueDelinquentComplaintsIndian !== '')
		vals['delinquentComplaintsIndian'] = valueDelinquentComplaintsIndian;

	var valueDelinquentComplaintsIndianPercent = $formValues.find('.valueDelinquentComplaintsIndianPercent').val();
	if(valueDelinquentComplaintsIndianPercent != null && valueDelinquentComplaintsIndianPercent !== '')
		vals['delinquentComplaintsIndianPercent'] = valueDelinquentComplaintsIndianPercent;

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

	var valueShortTermSuspensionsHispanicFemale = $formValues.find('.valueShortTermSuspensionsHispanicFemale').val();
	if(valueShortTermSuspensionsHispanicFemale != null && valueShortTermSuspensionsHispanicFemale !== '')
		vals['shortTermSuspensionsHispanicFemale'] = valueShortTermSuspensionsHispanicFemale;

	var valueShortTermSuspensionsHispanicMale = $formValues.find('.valueShortTermSuspensionsHispanicMale').val();
	if(valueShortTermSuspensionsHispanicMale != null && valueShortTermSuspensionsHispanicMale !== '')
		vals['shortTermSuspensionsHispanicMale'] = valueShortTermSuspensionsHispanicMale;

	var valueShortTermSuspensionsHispanicTotal = $formValues.find('.valueShortTermSuspensionsHispanicTotal').val();
	if(valueShortTermSuspensionsHispanicTotal != null && valueShortTermSuspensionsHispanicTotal !== '')
		vals['shortTermSuspensionsHispanicTotal'] = valueShortTermSuspensionsHispanicTotal;

	var valueShortTermSuspensionsHispanicPercent = $formValues.find('.valueShortTermSuspensionsHispanicPercent').val();
	if(valueShortTermSuspensionsHispanicPercent != null && valueShortTermSuspensionsHispanicPercent !== '')
		vals['shortTermSuspensionsHispanicPercent'] = valueShortTermSuspensionsHispanicPercent;

	var valueShortTermSuspensionsHispanicRate = $formValues.find('.valueShortTermSuspensionsHispanicRate').val();
	if(valueShortTermSuspensionsHispanicRate != null && valueShortTermSuspensionsHispanicRate !== '')
		vals['shortTermSuspensionsHispanicRate'] = valueShortTermSuspensionsHispanicRate;

	var valueShortTermSuspensionsIndianFemale = $formValues.find('.valueShortTermSuspensionsIndianFemale').val();
	if(valueShortTermSuspensionsIndianFemale != null && valueShortTermSuspensionsIndianFemale !== '')
		vals['shortTermSuspensionsIndianFemale'] = valueShortTermSuspensionsIndianFemale;

	var valueShortTermSuspensionsIndianMale = $formValues.find('.valueShortTermSuspensionsIndianMale').val();
	if(valueShortTermSuspensionsIndianMale != null && valueShortTermSuspensionsIndianMale !== '')
		vals['shortTermSuspensionsIndianMale'] = valueShortTermSuspensionsIndianMale;

	var valueShortTermSuspensionsIndianTotal = $formValues.find('.valueShortTermSuspensionsIndianTotal').val();
	if(valueShortTermSuspensionsIndianTotal != null && valueShortTermSuspensionsIndianTotal !== '')
		vals['shortTermSuspensionsIndianTotal'] = valueShortTermSuspensionsIndianTotal;

	var valueShortTermSuspensionsIndianPercent = $formValues.find('.valueShortTermSuspensionsIndianPercent').val();
	if(valueShortTermSuspensionsIndianPercent != null && valueShortTermSuspensionsIndianPercent !== '')
		vals['shortTermSuspensionsIndianPercent'] = valueShortTermSuspensionsIndianPercent;

	var valueShortTermSuspensionsIndianRate = $formValues.find('.valueShortTermSuspensionsIndianRate').val();
	if(valueShortTermSuspensionsIndianRate != null && valueShortTermSuspensionsIndianRate !== '')
		vals['shortTermSuspensionsIndianRate'] = valueShortTermSuspensionsIndianRate;

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

	var valueAgencyKey = $formValues.find('input.valueAgencyKey:checked').val();
	if(valueAgencyKey != null && valueAgencyKey !== '')
		vals['setAgencyKey'] = valueAgencyKey;

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

	var valueTeachersMale = $formValues.find('.valueTeachersMale').val();
	if(valueTeachersMale != null && valueTeachersMale !== '')
	var removeTeachersMale = $formFilters.find('.removeTeachersMale').val() === 'true';
	var setTeachersMale = removeTeachersMale ? null : $formValues.find('.setTeachersMale').val();
	if(removeTeachersMale || setTeachersMale != null && setTeachersMale !== '')
		vals['setTeachersMale'] = setTeachersMale;
	var addTeachersMale = $formValues.find('.addTeachersMale').val();
	if(addTeachersMale != null && addTeachersMale !== '')
		vals['addTeachersMale'] = addTeachersMale;
	var removeTeachersMale = $formValues.find('.removeTeachersMale').val();
	if(removeTeachersMale != null && removeTeachersMale !== '')
		vals['removeTeachersMale'] = removeTeachersMale;

	var valueTeachersFemale = $formValues.find('.valueTeachersFemale').val();
	if(valueTeachersFemale != null && valueTeachersFemale !== '')
	var removeTeachersFemale = $formFilters.find('.removeTeachersFemale').val() === 'true';
	var setTeachersFemale = removeTeachersFemale ? null : $formValues.find('.setTeachersFemale').val();
	if(removeTeachersFemale || setTeachersFemale != null && setTeachersFemale !== '')
		vals['setTeachersFemale'] = setTeachersFemale;
	var addTeachersFemale = $formValues.find('.addTeachersFemale').val();
	if(addTeachersFemale != null && addTeachersFemale !== '')
		vals['addTeachersFemale'] = addTeachersFemale;
	var removeTeachersFemale = $formValues.find('.removeTeachersFemale').val();
	if(removeTeachersFemale != null && removeTeachersFemale !== '')
		vals['removeTeachersFemale'] = removeTeachersFemale;

	var valueTeachersTotal = $formValues.find('.valueTeachersTotal').val();
	if(valueTeachersTotal != null && valueTeachersTotal !== '')
	var removeTeachersTotal = $formFilters.find('.removeTeachersTotal').val() === 'true';
	var setTeachersTotal = removeTeachersTotal ? null : $formValues.find('.setTeachersTotal').val();
	if(removeTeachersTotal || setTeachersTotal != null && setTeachersTotal !== '')
		vals['setTeachersTotal'] = setTeachersTotal;
	var addTeachersTotal = $formValues.find('.addTeachersTotal').val();
	if(addTeachersTotal != null && addTeachersTotal !== '')
		vals['addTeachersTotal'] = addTeachersTotal;
	var removeTeachersTotal = $formValues.find('.removeTeachersTotal').val();
	if(removeTeachersTotal != null && removeTeachersTotal !== '')
		vals['removeTeachersTotal'] = removeTeachersTotal;

	var valueTeachersWhiteTotal = $formValues.find('.valueTeachersWhiteTotal').val();
	if(valueTeachersWhiteTotal != null && valueTeachersWhiteTotal !== '')
	var removeTeachersWhiteTotal = $formFilters.find('.removeTeachersWhiteTotal').val() === 'true';
	var setTeachersWhiteTotal = removeTeachersWhiteTotal ? null : $formValues.find('.setTeachersWhiteTotal').val();
	if(removeTeachersWhiteTotal || setTeachersWhiteTotal != null && setTeachersWhiteTotal !== '')
		vals['setTeachersWhiteTotal'] = setTeachersWhiteTotal;
	var addTeachersWhiteTotal = $formValues.find('.addTeachersWhiteTotal').val();
	if(addTeachersWhiteTotal != null && addTeachersWhiteTotal !== '')
		vals['addTeachersWhiteTotal'] = addTeachersWhiteTotal;
	var removeTeachersWhiteTotal = $formValues.find('.removeTeachersWhiteTotal').val();
	if(removeTeachersWhiteTotal != null && removeTeachersWhiteTotal !== '')
		vals['removeTeachersWhiteTotal'] = removeTeachersWhiteTotal;

	var valueTeachersWhitePercent = $formValues.find('.valueTeachersWhitePercent').val();
	if(valueTeachersWhitePercent != null && valueTeachersWhitePercent !== '')
	var removeTeachersWhitePercent = $formFilters.find('.removeTeachersWhitePercent').val() === 'true';
	var setTeachersWhitePercent = removeTeachersWhitePercent ? null : $formValues.find('.setTeachersWhitePercent').val();
	if(removeTeachersWhitePercent || setTeachersWhitePercent != null && setTeachersWhitePercent !== '')
		vals['setTeachersWhitePercent'] = setTeachersWhitePercent;
	var addTeachersWhitePercent = $formValues.find('.addTeachersWhitePercent').val();
	if(addTeachersWhitePercent != null && addTeachersWhitePercent !== '')
		vals['addTeachersWhitePercent'] = addTeachersWhitePercent;
	var removeTeachersWhitePercent = $formValues.find('.removeTeachersWhitePercent').val();
	if(removeTeachersWhitePercent != null && removeTeachersWhitePercent !== '')
		vals['removeTeachersWhitePercent'] = removeTeachersWhitePercent;

	var valueTeachersBlackTotal = $formValues.find('.valueTeachersBlackTotal').val();
	if(valueTeachersBlackTotal != null && valueTeachersBlackTotal !== '')
	var removeTeachersBlackTotal = $formFilters.find('.removeTeachersBlackTotal').val() === 'true';
	var setTeachersBlackTotal = removeTeachersBlackTotal ? null : $formValues.find('.setTeachersBlackTotal').val();
	if(removeTeachersBlackTotal || setTeachersBlackTotal != null && setTeachersBlackTotal !== '')
		vals['setTeachersBlackTotal'] = setTeachersBlackTotal;
	var addTeachersBlackTotal = $formValues.find('.addTeachersBlackTotal').val();
	if(addTeachersBlackTotal != null && addTeachersBlackTotal !== '')
		vals['addTeachersBlackTotal'] = addTeachersBlackTotal;
	var removeTeachersBlackTotal = $formValues.find('.removeTeachersBlackTotal').val();
	if(removeTeachersBlackTotal != null && removeTeachersBlackTotal !== '')
		vals['removeTeachersBlackTotal'] = removeTeachersBlackTotal;

	var valueTeachersBlackPercent = $formValues.find('.valueTeachersBlackPercent').val();
	if(valueTeachersBlackPercent != null && valueTeachersBlackPercent !== '')
	var removeTeachersBlackPercent = $formFilters.find('.removeTeachersBlackPercent').val() === 'true';
	var setTeachersBlackPercent = removeTeachersBlackPercent ? null : $formValues.find('.setTeachersBlackPercent').val();
	if(removeTeachersBlackPercent || setTeachersBlackPercent != null && setTeachersBlackPercent !== '')
		vals['setTeachersBlackPercent'] = setTeachersBlackPercent;
	var addTeachersBlackPercent = $formValues.find('.addTeachersBlackPercent').val();
	if(addTeachersBlackPercent != null && addTeachersBlackPercent !== '')
		vals['addTeachersBlackPercent'] = addTeachersBlackPercent;
	var removeTeachersBlackPercent = $formValues.find('.removeTeachersBlackPercent').val();
	if(removeTeachersBlackPercent != null && removeTeachersBlackPercent !== '')
		vals['removeTeachersBlackPercent'] = removeTeachersBlackPercent;

	var valueTeachersOtherTotal = $formValues.find('.valueTeachersOtherTotal').val();
	if(valueTeachersOtherTotal != null && valueTeachersOtherTotal !== '')
	var removeTeachersOtherTotal = $formFilters.find('.removeTeachersOtherTotal').val() === 'true';
	var setTeachersOtherTotal = removeTeachersOtherTotal ? null : $formValues.find('.setTeachersOtherTotal').val();
	if(removeTeachersOtherTotal || setTeachersOtherTotal != null && setTeachersOtherTotal !== '')
		vals['setTeachersOtherTotal'] = setTeachersOtherTotal;
	var addTeachersOtherTotal = $formValues.find('.addTeachersOtherTotal').val();
	if(addTeachersOtherTotal != null && addTeachersOtherTotal !== '')
		vals['addTeachersOtherTotal'] = addTeachersOtherTotal;
	var removeTeachersOtherTotal = $formValues.find('.removeTeachersOtherTotal').val();
	if(removeTeachersOtherTotal != null && removeTeachersOtherTotal !== '')
		vals['removeTeachersOtherTotal'] = removeTeachersOtherTotal;

	var valueTeachersOtherPercent = $formValues.find('.valueTeachersOtherPercent').val();
	if(valueTeachersOtherPercent != null && valueTeachersOtherPercent !== '')
	var removeTeachersOtherPercent = $formFilters.find('.removeTeachersOtherPercent').val() === 'true';
	var setTeachersOtherPercent = removeTeachersOtherPercent ? null : $formValues.find('.setTeachersOtherPercent').val();
	if(removeTeachersOtherPercent || setTeachersOtherPercent != null && setTeachersOtherPercent !== '')
		vals['setTeachersOtherPercent'] = setTeachersOtherPercent;
	var addTeachersOtherPercent = $formValues.find('.addTeachersOtherPercent').val();
	if(addTeachersOtherPercent != null && addTeachersOtherPercent !== '')
		vals['addTeachersOtherPercent'] = addTeachersOtherPercent;
	var removeTeachersOtherPercent = $formValues.find('.removeTeachersOtherPercent').val();
	if(removeTeachersOtherPercent != null && removeTeachersOtherPercent !== '')
		vals['removeTeachersOtherPercent'] = removeTeachersOtherPercent;

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

	var valueDelinquentComplaintsAsian = $formValues.find('.valueDelinquentComplaintsAsian').val();
	if(valueDelinquentComplaintsAsian != null && valueDelinquentComplaintsAsian !== '')
	var removeDelinquentComplaintsAsian = $formFilters.find('.removeDelinquentComplaintsAsian').val() === 'true';
	var setDelinquentComplaintsAsian = removeDelinquentComplaintsAsian ? null : $formValues.find('.setDelinquentComplaintsAsian').val();
	if(removeDelinquentComplaintsAsian || setDelinquentComplaintsAsian != null && setDelinquentComplaintsAsian !== '')
		vals['setDelinquentComplaintsAsian'] = setDelinquentComplaintsAsian;
	var addDelinquentComplaintsAsian = $formValues.find('.addDelinquentComplaintsAsian').val();
	if(addDelinquentComplaintsAsian != null && addDelinquentComplaintsAsian !== '')
		vals['addDelinquentComplaintsAsian'] = addDelinquentComplaintsAsian;
	var removeDelinquentComplaintsAsian = $formValues.find('.removeDelinquentComplaintsAsian').val();
	if(removeDelinquentComplaintsAsian != null && removeDelinquentComplaintsAsian !== '')
		vals['removeDelinquentComplaintsAsian'] = removeDelinquentComplaintsAsian;

	var valueDelinquentComplaintsAsianPercent = $formValues.find('.valueDelinquentComplaintsAsianPercent').val();
	if(valueDelinquentComplaintsAsianPercent != null && valueDelinquentComplaintsAsianPercent !== '')
	var removeDelinquentComplaintsAsianPercent = $formFilters.find('.removeDelinquentComplaintsAsianPercent').val() === 'true';
	var setDelinquentComplaintsAsianPercent = removeDelinquentComplaintsAsianPercent ? null : $formValues.find('.setDelinquentComplaintsAsianPercent').val();
	if(removeDelinquentComplaintsAsianPercent || setDelinquentComplaintsAsianPercent != null && setDelinquentComplaintsAsianPercent !== '')
		vals['setDelinquentComplaintsAsianPercent'] = setDelinquentComplaintsAsianPercent;
	var addDelinquentComplaintsAsianPercent = $formValues.find('.addDelinquentComplaintsAsianPercent').val();
	if(addDelinquentComplaintsAsianPercent != null && addDelinquentComplaintsAsianPercent !== '')
		vals['addDelinquentComplaintsAsianPercent'] = addDelinquentComplaintsAsianPercent;
	var removeDelinquentComplaintsAsianPercent = $formValues.find('.removeDelinquentComplaintsAsianPercent').val();
	if(removeDelinquentComplaintsAsianPercent != null && removeDelinquentComplaintsAsianPercent !== '')
		vals['removeDelinquentComplaintsAsianPercent'] = removeDelinquentComplaintsAsianPercent;

	var valueDelinquentComplaintsBlack = $formValues.find('.valueDelinquentComplaintsBlack').val();
	if(valueDelinquentComplaintsBlack != null && valueDelinquentComplaintsBlack !== '')
	var removeDelinquentComplaintsBlack = $formFilters.find('.removeDelinquentComplaintsBlack').val() === 'true';
	var setDelinquentComplaintsBlack = removeDelinquentComplaintsBlack ? null : $formValues.find('.setDelinquentComplaintsBlack').val();
	if(removeDelinquentComplaintsBlack || setDelinquentComplaintsBlack != null && setDelinquentComplaintsBlack !== '')
		vals['setDelinquentComplaintsBlack'] = setDelinquentComplaintsBlack;
	var addDelinquentComplaintsBlack = $formValues.find('.addDelinquentComplaintsBlack').val();
	if(addDelinquentComplaintsBlack != null && addDelinquentComplaintsBlack !== '')
		vals['addDelinquentComplaintsBlack'] = addDelinquentComplaintsBlack;
	var removeDelinquentComplaintsBlack = $formValues.find('.removeDelinquentComplaintsBlack').val();
	if(removeDelinquentComplaintsBlack != null && removeDelinquentComplaintsBlack !== '')
		vals['removeDelinquentComplaintsBlack'] = removeDelinquentComplaintsBlack;

	var valueDelinquentComplaintsBlackPercent = $formValues.find('.valueDelinquentComplaintsBlackPercent').val();
	if(valueDelinquentComplaintsBlackPercent != null && valueDelinquentComplaintsBlackPercent !== '')
	var removeDelinquentComplaintsBlackPercent = $formFilters.find('.removeDelinquentComplaintsBlackPercent').val() === 'true';
	var setDelinquentComplaintsBlackPercent = removeDelinquentComplaintsBlackPercent ? null : $formValues.find('.setDelinquentComplaintsBlackPercent').val();
	if(removeDelinquentComplaintsBlackPercent || setDelinquentComplaintsBlackPercent != null && setDelinquentComplaintsBlackPercent !== '')
		vals['setDelinquentComplaintsBlackPercent'] = setDelinquentComplaintsBlackPercent;
	var addDelinquentComplaintsBlackPercent = $formValues.find('.addDelinquentComplaintsBlackPercent').val();
	if(addDelinquentComplaintsBlackPercent != null && addDelinquentComplaintsBlackPercent !== '')
		vals['addDelinquentComplaintsBlackPercent'] = addDelinquentComplaintsBlackPercent;
	var removeDelinquentComplaintsBlackPercent = $formValues.find('.removeDelinquentComplaintsBlackPercent').val();
	if(removeDelinquentComplaintsBlackPercent != null && removeDelinquentComplaintsBlackPercent !== '')
		vals['removeDelinquentComplaintsBlackPercent'] = removeDelinquentComplaintsBlackPercent;

	var valueDelinquentComplaintsHispanic = $formValues.find('.valueDelinquentComplaintsHispanic').val();
	if(valueDelinquentComplaintsHispanic != null && valueDelinquentComplaintsHispanic !== '')
	var removeDelinquentComplaintsHispanic = $formFilters.find('.removeDelinquentComplaintsHispanic').val() === 'true';
	var setDelinquentComplaintsHispanic = removeDelinquentComplaintsHispanic ? null : $formValues.find('.setDelinquentComplaintsHispanic').val();
	if(removeDelinquentComplaintsHispanic || setDelinquentComplaintsHispanic != null && setDelinquentComplaintsHispanic !== '')
		vals['setDelinquentComplaintsHispanic'] = setDelinquentComplaintsHispanic;
	var addDelinquentComplaintsHispanic = $formValues.find('.addDelinquentComplaintsHispanic').val();
	if(addDelinquentComplaintsHispanic != null && addDelinquentComplaintsHispanic !== '')
		vals['addDelinquentComplaintsHispanic'] = addDelinquentComplaintsHispanic;
	var removeDelinquentComplaintsHispanic = $formValues.find('.removeDelinquentComplaintsHispanic').val();
	if(removeDelinquentComplaintsHispanic != null && removeDelinquentComplaintsHispanic !== '')
		vals['removeDelinquentComplaintsHispanic'] = removeDelinquentComplaintsHispanic;

	var valueDelinquentComplaintsHispanicPercent = $formValues.find('.valueDelinquentComplaintsHispanicPercent').val();
	if(valueDelinquentComplaintsHispanicPercent != null && valueDelinquentComplaintsHispanicPercent !== '')
	var removeDelinquentComplaintsHispanicPercent = $formFilters.find('.removeDelinquentComplaintsHispanicPercent').val() === 'true';
	var setDelinquentComplaintsHispanicPercent = removeDelinquentComplaintsHispanicPercent ? null : $formValues.find('.setDelinquentComplaintsHispanicPercent').val();
	if(removeDelinquentComplaintsHispanicPercent || setDelinquentComplaintsHispanicPercent != null && setDelinquentComplaintsHispanicPercent !== '')
		vals['setDelinquentComplaintsHispanicPercent'] = setDelinquentComplaintsHispanicPercent;
	var addDelinquentComplaintsHispanicPercent = $formValues.find('.addDelinquentComplaintsHispanicPercent').val();
	if(addDelinquentComplaintsHispanicPercent != null && addDelinquentComplaintsHispanicPercent !== '')
		vals['addDelinquentComplaintsHispanicPercent'] = addDelinquentComplaintsHispanicPercent;
	var removeDelinquentComplaintsHispanicPercent = $formValues.find('.removeDelinquentComplaintsHispanicPercent').val();
	if(removeDelinquentComplaintsHispanicPercent != null && removeDelinquentComplaintsHispanicPercent !== '')
		vals['removeDelinquentComplaintsHispanicPercent'] = removeDelinquentComplaintsHispanicPercent;

	var valueDelinquentComplaintsMultiRacial = $formValues.find('.valueDelinquentComplaintsMultiRacial').val();
	if(valueDelinquentComplaintsMultiRacial != null && valueDelinquentComplaintsMultiRacial !== '')
	var removeDelinquentComplaintsMultiRacial = $formFilters.find('.removeDelinquentComplaintsMultiRacial').val() === 'true';
	var setDelinquentComplaintsMultiRacial = removeDelinquentComplaintsMultiRacial ? null : $formValues.find('.setDelinquentComplaintsMultiRacial').val();
	if(removeDelinquentComplaintsMultiRacial || setDelinquentComplaintsMultiRacial != null && setDelinquentComplaintsMultiRacial !== '')
		vals['setDelinquentComplaintsMultiRacial'] = setDelinquentComplaintsMultiRacial;
	var addDelinquentComplaintsMultiRacial = $formValues.find('.addDelinquentComplaintsMultiRacial').val();
	if(addDelinquentComplaintsMultiRacial != null && addDelinquentComplaintsMultiRacial !== '')
		vals['addDelinquentComplaintsMultiRacial'] = addDelinquentComplaintsMultiRacial;
	var removeDelinquentComplaintsMultiRacial = $formValues.find('.removeDelinquentComplaintsMultiRacial').val();
	if(removeDelinquentComplaintsMultiRacial != null && removeDelinquentComplaintsMultiRacial !== '')
		vals['removeDelinquentComplaintsMultiRacial'] = removeDelinquentComplaintsMultiRacial;

	var valueDelinquentComplaintsMultiRacialPercent = $formValues.find('.valueDelinquentComplaintsMultiRacialPercent').val();
	if(valueDelinquentComplaintsMultiRacialPercent != null && valueDelinquentComplaintsMultiRacialPercent !== '')
	var removeDelinquentComplaintsMultiRacialPercent = $formFilters.find('.removeDelinquentComplaintsMultiRacialPercent').val() === 'true';
	var setDelinquentComplaintsMultiRacialPercent = removeDelinquentComplaintsMultiRacialPercent ? null : $formValues.find('.setDelinquentComplaintsMultiRacialPercent').val();
	if(removeDelinquentComplaintsMultiRacialPercent || setDelinquentComplaintsMultiRacialPercent != null && setDelinquentComplaintsMultiRacialPercent !== '')
		vals['setDelinquentComplaintsMultiRacialPercent'] = setDelinquentComplaintsMultiRacialPercent;
	var addDelinquentComplaintsMultiRacialPercent = $formValues.find('.addDelinquentComplaintsMultiRacialPercent').val();
	if(addDelinquentComplaintsMultiRacialPercent != null && addDelinquentComplaintsMultiRacialPercent !== '')
		vals['addDelinquentComplaintsMultiRacialPercent'] = addDelinquentComplaintsMultiRacialPercent;
	var removeDelinquentComplaintsMultiRacialPercent = $formValues.find('.removeDelinquentComplaintsMultiRacialPercent').val();
	if(removeDelinquentComplaintsMultiRacialPercent != null && removeDelinquentComplaintsMultiRacialPercent !== '')
		vals['removeDelinquentComplaintsMultiRacialPercent'] = removeDelinquentComplaintsMultiRacialPercent;

	var valueDelinquentComplaintsIndian = $formValues.find('.valueDelinquentComplaintsIndian').val();
	if(valueDelinquentComplaintsIndian != null && valueDelinquentComplaintsIndian !== '')
	var removeDelinquentComplaintsIndian = $formFilters.find('.removeDelinquentComplaintsIndian').val() === 'true';
	var setDelinquentComplaintsIndian = removeDelinquentComplaintsIndian ? null : $formValues.find('.setDelinquentComplaintsIndian').val();
	if(removeDelinquentComplaintsIndian || setDelinquentComplaintsIndian != null && setDelinquentComplaintsIndian !== '')
		vals['setDelinquentComplaintsIndian'] = setDelinquentComplaintsIndian;
	var addDelinquentComplaintsIndian = $formValues.find('.addDelinquentComplaintsIndian').val();
	if(addDelinquentComplaintsIndian != null && addDelinquentComplaintsIndian !== '')
		vals['addDelinquentComplaintsIndian'] = addDelinquentComplaintsIndian;
	var removeDelinquentComplaintsIndian = $formValues.find('.removeDelinquentComplaintsIndian').val();
	if(removeDelinquentComplaintsIndian != null && removeDelinquentComplaintsIndian !== '')
		vals['removeDelinquentComplaintsIndian'] = removeDelinquentComplaintsIndian;

	var valueDelinquentComplaintsIndianPercent = $formValues.find('.valueDelinquentComplaintsIndianPercent').val();
	if(valueDelinquentComplaintsIndianPercent != null && valueDelinquentComplaintsIndianPercent !== '')
	var removeDelinquentComplaintsIndianPercent = $formFilters.find('.removeDelinquentComplaintsIndianPercent').val() === 'true';
	var setDelinquentComplaintsIndianPercent = removeDelinquentComplaintsIndianPercent ? null : $formValues.find('.setDelinquentComplaintsIndianPercent').val();
	if(removeDelinquentComplaintsIndianPercent || setDelinquentComplaintsIndianPercent != null && setDelinquentComplaintsIndianPercent !== '')
		vals['setDelinquentComplaintsIndianPercent'] = setDelinquentComplaintsIndianPercent;
	var addDelinquentComplaintsIndianPercent = $formValues.find('.addDelinquentComplaintsIndianPercent').val();
	if(addDelinquentComplaintsIndianPercent != null && addDelinquentComplaintsIndianPercent !== '')
		vals['addDelinquentComplaintsIndianPercent'] = addDelinquentComplaintsIndianPercent;
	var removeDelinquentComplaintsIndianPercent = $formValues.find('.removeDelinquentComplaintsIndianPercent').val();
	if(removeDelinquentComplaintsIndianPercent != null && removeDelinquentComplaintsIndianPercent !== '')
		vals['removeDelinquentComplaintsIndianPercent'] = removeDelinquentComplaintsIndianPercent;

	var valueDelinquentComplaintsWhite = $formValues.find('.valueDelinquentComplaintsWhite').val();
	if(valueDelinquentComplaintsWhite != null && valueDelinquentComplaintsWhite !== '')
	var removeDelinquentComplaintsWhite = $formFilters.find('.removeDelinquentComplaintsWhite').val() === 'true';
	var setDelinquentComplaintsWhite = removeDelinquentComplaintsWhite ? null : $formValues.find('.setDelinquentComplaintsWhite').val();
	if(removeDelinquentComplaintsWhite || setDelinquentComplaintsWhite != null && setDelinquentComplaintsWhite !== '')
		vals['setDelinquentComplaintsWhite'] = setDelinquentComplaintsWhite;
	var addDelinquentComplaintsWhite = $formValues.find('.addDelinquentComplaintsWhite').val();
	if(addDelinquentComplaintsWhite != null && addDelinquentComplaintsWhite !== '')
		vals['addDelinquentComplaintsWhite'] = addDelinquentComplaintsWhite;
	var removeDelinquentComplaintsWhite = $formValues.find('.removeDelinquentComplaintsWhite').val();
	if(removeDelinquentComplaintsWhite != null && removeDelinquentComplaintsWhite !== '')
		vals['removeDelinquentComplaintsWhite'] = removeDelinquentComplaintsWhite;

	var valueDelinquentComplaintsWhitePercent = $formValues.find('.valueDelinquentComplaintsWhitePercent').val();
	if(valueDelinquentComplaintsWhitePercent != null && valueDelinquentComplaintsWhitePercent !== '')
	var removeDelinquentComplaintsWhitePercent = $formFilters.find('.removeDelinquentComplaintsWhitePercent').val() === 'true';
	var setDelinquentComplaintsWhitePercent = removeDelinquentComplaintsWhitePercent ? null : $formValues.find('.setDelinquentComplaintsWhitePercent').val();
	if(removeDelinquentComplaintsWhitePercent || setDelinquentComplaintsWhitePercent != null && setDelinquentComplaintsWhitePercent !== '')
		vals['setDelinquentComplaintsWhitePercent'] = setDelinquentComplaintsWhitePercent;
	var addDelinquentComplaintsWhitePercent = $formValues.find('.addDelinquentComplaintsWhitePercent').val();
	if(addDelinquentComplaintsWhitePercent != null && addDelinquentComplaintsWhitePercent !== '')
		vals['addDelinquentComplaintsWhitePercent'] = addDelinquentComplaintsWhitePercent;
	var removeDelinquentComplaintsWhitePercent = $formValues.find('.removeDelinquentComplaintsWhitePercent').val();
	if(removeDelinquentComplaintsWhitePercent != null && removeDelinquentComplaintsWhitePercent !== '')
		vals['removeDelinquentComplaintsWhitePercent'] = removeDelinquentComplaintsWhitePercent;

	var valueDelinquentComplaintsPacificIslander = $formValues.find('.valueDelinquentComplaintsPacificIslander').val();
	if(valueDelinquentComplaintsPacificIslander != null && valueDelinquentComplaintsPacificIslander !== '')
	var removeDelinquentComplaintsPacificIslander = $formFilters.find('.removeDelinquentComplaintsPacificIslander').val() === 'true';
	var setDelinquentComplaintsPacificIslander = removeDelinquentComplaintsPacificIslander ? null : $formValues.find('.setDelinquentComplaintsPacificIslander').val();
	if(removeDelinquentComplaintsPacificIslander || setDelinquentComplaintsPacificIslander != null && setDelinquentComplaintsPacificIslander !== '')
		vals['setDelinquentComplaintsPacificIslander'] = setDelinquentComplaintsPacificIslander;
	var addDelinquentComplaintsPacificIslander = $formValues.find('.addDelinquentComplaintsPacificIslander').val();
	if(addDelinquentComplaintsPacificIslander != null && addDelinquentComplaintsPacificIslander !== '')
		vals['addDelinquentComplaintsPacificIslander'] = addDelinquentComplaintsPacificIslander;
	var removeDelinquentComplaintsPacificIslander = $formValues.find('.removeDelinquentComplaintsPacificIslander').val();
	if(removeDelinquentComplaintsPacificIslander != null && removeDelinquentComplaintsPacificIslander !== '')
		vals['removeDelinquentComplaintsPacificIslander'] = removeDelinquentComplaintsPacificIslander;

	var valueDelinquentComplaintsPacificIslanderPercent = $formValues.find('.valueDelinquentComplaintsPacificIslanderPercent').val();
	if(valueDelinquentComplaintsPacificIslanderPercent != null && valueDelinquentComplaintsPacificIslanderPercent !== '')
	var removeDelinquentComplaintsPacificIslanderPercent = $formFilters.find('.removeDelinquentComplaintsPacificIslanderPercent').val() === 'true';
	var setDelinquentComplaintsPacificIslanderPercent = removeDelinquentComplaintsPacificIslanderPercent ? null : $formValues.find('.setDelinquentComplaintsPacificIslanderPercent').val();
	if(removeDelinquentComplaintsPacificIslanderPercent || setDelinquentComplaintsPacificIslanderPercent != null && setDelinquentComplaintsPacificIslanderPercent !== '')
		vals['setDelinquentComplaintsPacificIslanderPercent'] = setDelinquentComplaintsPacificIslanderPercent;
	var addDelinquentComplaintsPacificIslanderPercent = $formValues.find('.addDelinquentComplaintsPacificIslanderPercent').val();
	if(addDelinquentComplaintsPacificIslanderPercent != null && addDelinquentComplaintsPacificIslanderPercent !== '')
		vals['addDelinquentComplaintsPacificIslanderPercent'] = addDelinquentComplaintsPacificIslanderPercent;
	var removeDelinquentComplaintsPacificIslanderPercent = $formValues.find('.removeDelinquentComplaintsPacificIslanderPercent').val();
	if(removeDelinquentComplaintsPacificIslanderPercent != null && removeDelinquentComplaintsPacificIslanderPercent !== '')
		vals['removeDelinquentComplaintsPacificIslanderPercent'] = removeDelinquentComplaintsPacificIslanderPercent;

	var valueShortTermSuspensionsTotal = $formValues.find('.valueShortTermSuspensionsTotal').val();
	if(valueShortTermSuspensionsTotal != null && valueShortTermSuspensionsTotal !== '')
	var removeShortTermSuspensionsTotal = $formFilters.find('.removeShortTermSuspensionsTotal').val() === 'true';
	var setShortTermSuspensionsTotal = removeShortTermSuspensionsTotal ? null : $formValues.find('.setShortTermSuspensionsTotal').val();
	if(removeShortTermSuspensionsTotal || setShortTermSuspensionsTotal != null && setShortTermSuspensionsTotal !== '')
		vals['setShortTermSuspensionsTotal'] = setShortTermSuspensionsTotal;
	var addShortTermSuspensionsTotal = $formValues.find('.addShortTermSuspensionsTotal').val();
	if(addShortTermSuspensionsTotal != null && addShortTermSuspensionsTotal !== '')
		vals['addShortTermSuspensionsTotal'] = addShortTermSuspensionsTotal;
	var removeShortTermSuspensionsTotal = $formValues.find('.removeShortTermSuspensionsTotal').val();
	if(removeShortTermSuspensionsTotal != null && removeShortTermSuspensionsTotal !== '')
		vals['removeShortTermSuspensionsTotal'] = removeShortTermSuspensionsTotal;

	var valueLongTermSuspensionsTotal = $formValues.find('.valueLongTermSuspensionsTotal').val();
	if(valueLongTermSuspensionsTotal != null && valueLongTermSuspensionsTotal !== '')
	var removeLongTermSuspensionsTotal = $formFilters.find('.removeLongTermSuspensionsTotal').val() === 'true';
	var setLongTermSuspensionsTotal = removeLongTermSuspensionsTotal ? null : $formValues.find('.setLongTermSuspensionsTotal').val();
	if(removeLongTermSuspensionsTotal || setLongTermSuspensionsTotal != null && setLongTermSuspensionsTotal !== '')
		vals['setLongTermSuspensionsTotal'] = setLongTermSuspensionsTotal;
	var addLongTermSuspensionsTotal = $formValues.find('.addLongTermSuspensionsTotal').val();
	if(addLongTermSuspensionsTotal != null && addLongTermSuspensionsTotal !== '')
		vals['addLongTermSuspensionsTotal'] = addLongTermSuspensionsTotal;
	var removeLongTermSuspensionsTotal = $formValues.find('.removeLongTermSuspensionsTotal').val();
	if(removeLongTermSuspensionsTotal != null && removeLongTermSuspensionsTotal !== '')
		vals['removeLongTermSuspensionsTotal'] = removeLongTermSuspensionsTotal;

	var valueExpulsionsTotal = $formValues.find('.valueExpulsionsTotal').val();
	if(valueExpulsionsTotal != null && valueExpulsionsTotal !== '')
	var removeExpulsionsTotal = $formFilters.find('.removeExpulsionsTotal').val() === 'true';
	var setExpulsionsTotal = removeExpulsionsTotal ? null : $formValues.find('.setExpulsionsTotal').val();
	if(removeExpulsionsTotal || setExpulsionsTotal != null && setExpulsionsTotal !== '')
		vals['setExpulsionsTotal'] = setExpulsionsTotal;
	var addExpulsionsTotal = $formValues.find('.addExpulsionsTotal').val();
	if(addExpulsionsTotal != null && addExpulsionsTotal !== '')
		vals['addExpulsionsTotal'] = addExpulsionsTotal;
	var removeExpulsionsTotal = $formValues.find('.removeExpulsionsTotal').val();
	if(removeExpulsionsTotal != null && removeExpulsionsTotal !== '')
		vals['removeExpulsionsTotal'] = removeExpulsionsTotal;

	var valueShortTermSuspensionsAsianFemale = $formValues.find('.valueShortTermSuspensionsAsianFemale').val();
	if(valueShortTermSuspensionsAsianFemale != null && valueShortTermSuspensionsAsianFemale !== '')
	var removeShortTermSuspensionsAsianFemale = $formFilters.find('.removeShortTermSuspensionsAsianFemale').val() === 'true';
	var setShortTermSuspensionsAsianFemale = removeShortTermSuspensionsAsianFemale ? null : $formValues.find('.setShortTermSuspensionsAsianFemale').val();
	if(removeShortTermSuspensionsAsianFemale || setShortTermSuspensionsAsianFemale != null && setShortTermSuspensionsAsianFemale !== '')
		vals['setShortTermSuspensionsAsianFemale'] = setShortTermSuspensionsAsianFemale;
	var addShortTermSuspensionsAsianFemale = $formValues.find('.addShortTermSuspensionsAsianFemale').val();
	if(addShortTermSuspensionsAsianFemale != null && addShortTermSuspensionsAsianFemale !== '')
		vals['addShortTermSuspensionsAsianFemale'] = addShortTermSuspensionsAsianFemale;
	var removeShortTermSuspensionsAsianFemale = $formValues.find('.removeShortTermSuspensionsAsianFemale').val();
	if(removeShortTermSuspensionsAsianFemale != null && removeShortTermSuspensionsAsianFemale !== '')
		vals['removeShortTermSuspensionsAsianFemale'] = removeShortTermSuspensionsAsianFemale;

	var valueShortTermSuspensionsAsianMale = $formValues.find('.valueShortTermSuspensionsAsianMale').val();
	if(valueShortTermSuspensionsAsianMale != null && valueShortTermSuspensionsAsianMale !== '')
	var removeShortTermSuspensionsAsianMale = $formFilters.find('.removeShortTermSuspensionsAsianMale').val() === 'true';
	var setShortTermSuspensionsAsianMale = removeShortTermSuspensionsAsianMale ? null : $formValues.find('.setShortTermSuspensionsAsianMale').val();
	if(removeShortTermSuspensionsAsianMale || setShortTermSuspensionsAsianMale != null && setShortTermSuspensionsAsianMale !== '')
		vals['setShortTermSuspensionsAsianMale'] = setShortTermSuspensionsAsianMale;
	var addShortTermSuspensionsAsianMale = $formValues.find('.addShortTermSuspensionsAsianMale').val();
	if(addShortTermSuspensionsAsianMale != null && addShortTermSuspensionsAsianMale !== '')
		vals['addShortTermSuspensionsAsianMale'] = addShortTermSuspensionsAsianMale;
	var removeShortTermSuspensionsAsianMale = $formValues.find('.removeShortTermSuspensionsAsianMale').val();
	if(removeShortTermSuspensionsAsianMale != null && removeShortTermSuspensionsAsianMale !== '')
		vals['removeShortTermSuspensionsAsianMale'] = removeShortTermSuspensionsAsianMale;

	var valueShortTermSuspensionsAsianTotal = $formValues.find('.valueShortTermSuspensionsAsianTotal').val();
	if(valueShortTermSuspensionsAsianTotal != null && valueShortTermSuspensionsAsianTotal !== '')
	var removeShortTermSuspensionsAsianTotal = $formFilters.find('.removeShortTermSuspensionsAsianTotal').val() === 'true';
	var setShortTermSuspensionsAsianTotal = removeShortTermSuspensionsAsianTotal ? null : $formValues.find('.setShortTermSuspensionsAsianTotal').val();
	if(removeShortTermSuspensionsAsianTotal || setShortTermSuspensionsAsianTotal != null && setShortTermSuspensionsAsianTotal !== '')
		vals['setShortTermSuspensionsAsianTotal'] = setShortTermSuspensionsAsianTotal;
	var addShortTermSuspensionsAsianTotal = $formValues.find('.addShortTermSuspensionsAsianTotal').val();
	if(addShortTermSuspensionsAsianTotal != null && addShortTermSuspensionsAsianTotal !== '')
		vals['addShortTermSuspensionsAsianTotal'] = addShortTermSuspensionsAsianTotal;
	var removeShortTermSuspensionsAsianTotal = $formValues.find('.removeShortTermSuspensionsAsianTotal').val();
	if(removeShortTermSuspensionsAsianTotal != null && removeShortTermSuspensionsAsianTotal !== '')
		vals['removeShortTermSuspensionsAsianTotal'] = removeShortTermSuspensionsAsianTotal;

	var valueShortTermSuspensionsAsianPercent = $formValues.find('.valueShortTermSuspensionsAsianPercent').val();
	if(valueShortTermSuspensionsAsianPercent != null && valueShortTermSuspensionsAsianPercent !== '')
	var removeShortTermSuspensionsAsianPercent = $formFilters.find('.removeShortTermSuspensionsAsianPercent').val() === 'true';
	var setShortTermSuspensionsAsianPercent = removeShortTermSuspensionsAsianPercent ? null : $formValues.find('.setShortTermSuspensionsAsianPercent').val();
	if(removeShortTermSuspensionsAsianPercent || setShortTermSuspensionsAsianPercent != null && setShortTermSuspensionsAsianPercent !== '')
		vals['setShortTermSuspensionsAsianPercent'] = setShortTermSuspensionsAsianPercent;
	var addShortTermSuspensionsAsianPercent = $formValues.find('.addShortTermSuspensionsAsianPercent').val();
	if(addShortTermSuspensionsAsianPercent != null && addShortTermSuspensionsAsianPercent !== '')
		vals['addShortTermSuspensionsAsianPercent'] = addShortTermSuspensionsAsianPercent;
	var removeShortTermSuspensionsAsianPercent = $formValues.find('.removeShortTermSuspensionsAsianPercent').val();
	if(removeShortTermSuspensionsAsianPercent != null && removeShortTermSuspensionsAsianPercent !== '')
		vals['removeShortTermSuspensionsAsianPercent'] = removeShortTermSuspensionsAsianPercent;

	var valueShortTermSuspensionsAsianRate = $formValues.find('.valueShortTermSuspensionsAsianRate').val();
	if(valueShortTermSuspensionsAsianRate != null && valueShortTermSuspensionsAsianRate !== '')
	var removeShortTermSuspensionsAsianRate = $formFilters.find('.removeShortTermSuspensionsAsianRate').val() === 'true';
	var setShortTermSuspensionsAsianRate = removeShortTermSuspensionsAsianRate ? null : $formValues.find('.setShortTermSuspensionsAsianRate').val();
	if(removeShortTermSuspensionsAsianRate || setShortTermSuspensionsAsianRate != null && setShortTermSuspensionsAsianRate !== '')
		vals['setShortTermSuspensionsAsianRate'] = setShortTermSuspensionsAsianRate;
	var addShortTermSuspensionsAsianRate = $formValues.find('.addShortTermSuspensionsAsianRate').val();
	if(addShortTermSuspensionsAsianRate != null && addShortTermSuspensionsAsianRate !== '')
		vals['addShortTermSuspensionsAsianRate'] = addShortTermSuspensionsAsianRate;
	var removeShortTermSuspensionsAsianRate = $formValues.find('.removeShortTermSuspensionsAsianRate').val();
	if(removeShortTermSuspensionsAsianRate != null && removeShortTermSuspensionsAsianRate !== '')
		vals['removeShortTermSuspensionsAsianRate'] = removeShortTermSuspensionsAsianRate;

	var valueShortTermSuspensionsBlackFemale = $formValues.find('.valueShortTermSuspensionsBlackFemale').val();
	if(valueShortTermSuspensionsBlackFemale != null && valueShortTermSuspensionsBlackFemale !== '')
	var removeShortTermSuspensionsBlackFemale = $formFilters.find('.removeShortTermSuspensionsBlackFemale').val() === 'true';
	var setShortTermSuspensionsBlackFemale = removeShortTermSuspensionsBlackFemale ? null : $formValues.find('.setShortTermSuspensionsBlackFemale').val();
	if(removeShortTermSuspensionsBlackFemale || setShortTermSuspensionsBlackFemale != null && setShortTermSuspensionsBlackFemale !== '')
		vals['setShortTermSuspensionsBlackFemale'] = setShortTermSuspensionsBlackFemale;
	var addShortTermSuspensionsBlackFemale = $formValues.find('.addShortTermSuspensionsBlackFemale').val();
	if(addShortTermSuspensionsBlackFemale != null && addShortTermSuspensionsBlackFemale !== '')
		vals['addShortTermSuspensionsBlackFemale'] = addShortTermSuspensionsBlackFemale;
	var removeShortTermSuspensionsBlackFemale = $formValues.find('.removeShortTermSuspensionsBlackFemale').val();
	if(removeShortTermSuspensionsBlackFemale != null && removeShortTermSuspensionsBlackFemale !== '')
		vals['removeShortTermSuspensionsBlackFemale'] = removeShortTermSuspensionsBlackFemale;

	var valueShortTermSuspensionsBlackMale = $formValues.find('.valueShortTermSuspensionsBlackMale').val();
	if(valueShortTermSuspensionsBlackMale != null && valueShortTermSuspensionsBlackMale !== '')
	var removeShortTermSuspensionsBlackMale = $formFilters.find('.removeShortTermSuspensionsBlackMale').val() === 'true';
	var setShortTermSuspensionsBlackMale = removeShortTermSuspensionsBlackMale ? null : $formValues.find('.setShortTermSuspensionsBlackMale').val();
	if(removeShortTermSuspensionsBlackMale || setShortTermSuspensionsBlackMale != null && setShortTermSuspensionsBlackMale !== '')
		vals['setShortTermSuspensionsBlackMale'] = setShortTermSuspensionsBlackMale;
	var addShortTermSuspensionsBlackMale = $formValues.find('.addShortTermSuspensionsBlackMale').val();
	if(addShortTermSuspensionsBlackMale != null && addShortTermSuspensionsBlackMale !== '')
		vals['addShortTermSuspensionsBlackMale'] = addShortTermSuspensionsBlackMale;
	var removeShortTermSuspensionsBlackMale = $formValues.find('.removeShortTermSuspensionsBlackMale').val();
	if(removeShortTermSuspensionsBlackMale != null && removeShortTermSuspensionsBlackMale !== '')
		vals['removeShortTermSuspensionsBlackMale'] = removeShortTermSuspensionsBlackMale;

	var valueShortTermSuspensionsBlackTotal = $formValues.find('.valueShortTermSuspensionsBlackTotal').val();
	if(valueShortTermSuspensionsBlackTotal != null && valueShortTermSuspensionsBlackTotal !== '')
	var removeShortTermSuspensionsBlackTotal = $formFilters.find('.removeShortTermSuspensionsBlackTotal').val() === 'true';
	var setShortTermSuspensionsBlackTotal = removeShortTermSuspensionsBlackTotal ? null : $formValues.find('.setShortTermSuspensionsBlackTotal').val();
	if(removeShortTermSuspensionsBlackTotal || setShortTermSuspensionsBlackTotal != null && setShortTermSuspensionsBlackTotal !== '')
		vals['setShortTermSuspensionsBlackTotal'] = setShortTermSuspensionsBlackTotal;
	var addShortTermSuspensionsBlackTotal = $formValues.find('.addShortTermSuspensionsBlackTotal').val();
	if(addShortTermSuspensionsBlackTotal != null && addShortTermSuspensionsBlackTotal !== '')
		vals['addShortTermSuspensionsBlackTotal'] = addShortTermSuspensionsBlackTotal;
	var removeShortTermSuspensionsBlackTotal = $formValues.find('.removeShortTermSuspensionsBlackTotal').val();
	if(removeShortTermSuspensionsBlackTotal != null && removeShortTermSuspensionsBlackTotal !== '')
		vals['removeShortTermSuspensionsBlackTotal'] = removeShortTermSuspensionsBlackTotal;

	var valueShortTermSuspensionsBlackPercent = $formValues.find('.valueShortTermSuspensionsBlackPercent').val();
	if(valueShortTermSuspensionsBlackPercent != null && valueShortTermSuspensionsBlackPercent !== '')
	var removeShortTermSuspensionsBlackPercent = $formFilters.find('.removeShortTermSuspensionsBlackPercent').val() === 'true';
	var setShortTermSuspensionsBlackPercent = removeShortTermSuspensionsBlackPercent ? null : $formValues.find('.setShortTermSuspensionsBlackPercent').val();
	if(removeShortTermSuspensionsBlackPercent || setShortTermSuspensionsBlackPercent != null && setShortTermSuspensionsBlackPercent !== '')
		vals['setShortTermSuspensionsBlackPercent'] = setShortTermSuspensionsBlackPercent;
	var addShortTermSuspensionsBlackPercent = $formValues.find('.addShortTermSuspensionsBlackPercent').val();
	if(addShortTermSuspensionsBlackPercent != null && addShortTermSuspensionsBlackPercent !== '')
		vals['addShortTermSuspensionsBlackPercent'] = addShortTermSuspensionsBlackPercent;
	var removeShortTermSuspensionsBlackPercent = $formValues.find('.removeShortTermSuspensionsBlackPercent').val();
	if(removeShortTermSuspensionsBlackPercent != null && removeShortTermSuspensionsBlackPercent !== '')
		vals['removeShortTermSuspensionsBlackPercent'] = removeShortTermSuspensionsBlackPercent;

	var valueShortTermSuspensionsBlackRate = $formValues.find('.valueShortTermSuspensionsBlackRate').val();
	if(valueShortTermSuspensionsBlackRate != null && valueShortTermSuspensionsBlackRate !== '')
	var removeShortTermSuspensionsBlackRate = $formFilters.find('.removeShortTermSuspensionsBlackRate').val() === 'true';
	var setShortTermSuspensionsBlackRate = removeShortTermSuspensionsBlackRate ? null : $formValues.find('.setShortTermSuspensionsBlackRate').val();
	if(removeShortTermSuspensionsBlackRate || setShortTermSuspensionsBlackRate != null && setShortTermSuspensionsBlackRate !== '')
		vals['setShortTermSuspensionsBlackRate'] = setShortTermSuspensionsBlackRate;
	var addShortTermSuspensionsBlackRate = $formValues.find('.addShortTermSuspensionsBlackRate').val();
	if(addShortTermSuspensionsBlackRate != null && addShortTermSuspensionsBlackRate !== '')
		vals['addShortTermSuspensionsBlackRate'] = addShortTermSuspensionsBlackRate;
	var removeShortTermSuspensionsBlackRate = $formValues.find('.removeShortTermSuspensionsBlackRate').val();
	if(removeShortTermSuspensionsBlackRate != null && removeShortTermSuspensionsBlackRate !== '')
		vals['removeShortTermSuspensionsBlackRate'] = removeShortTermSuspensionsBlackRate;

	var valueShortTermSuspensionsHispanicFemale = $formValues.find('.valueShortTermSuspensionsHispanicFemale').val();
	if(valueShortTermSuspensionsHispanicFemale != null && valueShortTermSuspensionsHispanicFemale !== '')
	var removeShortTermSuspensionsHispanicFemale = $formFilters.find('.removeShortTermSuspensionsHispanicFemale').val() === 'true';
	var setShortTermSuspensionsHispanicFemale = removeShortTermSuspensionsHispanicFemale ? null : $formValues.find('.setShortTermSuspensionsHispanicFemale').val();
	if(removeShortTermSuspensionsHispanicFemale || setShortTermSuspensionsHispanicFemale != null && setShortTermSuspensionsHispanicFemale !== '')
		vals['setShortTermSuspensionsHispanicFemale'] = setShortTermSuspensionsHispanicFemale;
	var addShortTermSuspensionsHispanicFemale = $formValues.find('.addShortTermSuspensionsHispanicFemale').val();
	if(addShortTermSuspensionsHispanicFemale != null && addShortTermSuspensionsHispanicFemale !== '')
		vals['addShortTermSuspensionsHispanicFemale'] = addShortTermSuspensionsHispanicFemale;
	var removeShortTermSuspensionsHispanicFemale = $formValues.find('.removeShortTermSuspensionsHispanicFemale').val();
	if(removeShortTermSuspensionsHispanicFemale != null && removeShortTermSuspensionsHispanicFemale !== '')
		vals['removeShortTermSuspensionsHispanicFemale'] = removeShortTermSuspensionsHispanicFemale;

	var valueShortTermSuspensionsHispanicMale = $formValues.find('.valueShortTermSuspensionsHispanicMale').val();
	if(valueShortTermSuspensionsHispanicMale != null && valueShortTermSuspensionsHispanicMale !== '')
	var removeShortTermSuspensionsHispanicMale = $formFilters.find('.removeShortTermSuspensionsHispanicMale').val() === 'true';
	var setShortTermSuspensionsHispanicMale = removeShortTermSuspensionsHispanicMale ? null : $formValues.find('.setShortTermSuspensionsHispanicMale').val();
	if(removeShortTermSuspensionsHispanicMale || setShortTermSuspensionsHispanicMale != null && setShortTermSuspensionsHispanicMale !== '')
		vals['setShortTermSuspensionsHispanicMale'] = setShortTermSuspensionsHispanicMale;
	var addShortTermSuspensionsHispanicMale = $formValues.find('.addShortTermSuspensionsHispanicMale').val();
	if(addShortTermSuspensionsHispanicMale != null && addShortTermSuspensionsHispanicMale !== '')
		vals['addShortTermSuspensionsHispanicMale'] = addShortTermSuspensionsHispanicMale;
	var removeShortTermSuspensionsHispanicMale = $formValues.find('.removeShortTermSuspensionsHispanicMale').val();
	if(removeShortTermSuspensionsHispanicMale != null && removeShortTermSuspensionsHispanicMale !== '')
		vals['removeShortTermSuspensionsHispanicMale'] = removeShortTermSuspensionsHispanicMale;

	var valueShortTermSuspensionsHispanicTotal = $formValues.find('.valueShortTermSuspensionsHispanicTotal').val();
	if(valueShortTermSuspensionsHispanicTotal != null && valueShortTermSuspensionsHispanicTotal !== '')
	var removeShortTermSuspensionsHispanicTotal = $formFilters.find('.removeShortTermSuspensionsHispanicTotal').val() === 'true';
	var setShortTermSuspensionsHispanicTotal = removeShortTermSuspensionsHispanicTotal ? null : $formValues.find('.setShortTermSuspensionsHispanicTotal').val();
	if(removeShortTermSuspensionsHispanicTotal || setShortTermSuspensionsHispanicTotal != null && setShortTermSuspensionsHispanicTotal !== '')
		vals['setShortTermSuspensionsHispanicTotal'] = setShortTermSuspensionsHispanicTotal;
	var addShortTermSuspensionsHispanicTotal = $formValues.find('.addShortTermSuspensionsHispanicTotal').val();
	if(addShortTermSuspensionsHispanicTotal != null && addShortTermSuspensionsHispanicTotal !== '')
		vals['addShortTermSuspensionsHispanicTotal'] = addShortTermSuspensionsHispanicTotal;
	var removeShortTermSuspensionsHispanicTotal = $formValues.find('.removeShortTermSuspensionsHispanicTotal').val();
	if(removeShortTermSuspensionsHispanicTotal != null && removeShortTermSuspensionsHispanicTotal !== '')
		vals['removeShortTermSuspensionsHispanicTotal'] = removeShortTermSuspensionsHispanicTotal;

	var valueShortTermSuspensionsHispanicPercent = $formValues.find('.valueShortTermSuspensionsHispanicPercent').val();
	if(valueShortTermSuspensionsHispanicPercent != null && valueShortTermSuspensionsHispanicPercent !== '')
	var removeShortTermSuspensionsHispanicPercent = $formFilters.find('.removeShortTermSuspensionsHispanicPercent').val() === 'true';
	var setShortTermSuspensionsHispanicPercent = removeShortTermSuspensionsHispanicPercent ? null : $formValues.find('.setShortTermSuspensionsHispanicPercent').val();
	if(removeShortTermSuspensionsHispanicPercent || setShortTermSuspensionsHispanicPercent != null && setShortTermSuspensionsHispanicPercent !== '')
		vals['setShortTermSuspensionsHispanicPercent'] = setShortTermSuspensionsHispanicPercent;
	var addShortTermSuspensionsHispanicPercent = $formValues.find('.addShortTermSuspensionsHispanicPercent').val();
	if(addShortTermSuspensionsHispanicPercent != null && addShortTermSuspensionsHispanicPercent !== '')
		vals['addShortTermSuspensionsHispanicPercent'] = addShortTermSuspensionsHispanicPercent;
	var removeShortTermSuspensionsHispanicPercent = $formValues.find('.removeShortTermSuspensionsHispanicPercent').val();
	if(removeShortTermSuspensionsHispanicPercent != null && removeShortTermSuspensionsHispanicPercent !== '')
		vals['removeShortTermSuspensionsHispanicPercent'] = removeShortTermSuspensionsHispanicPercent;

	var valueShortTermSuspensionsHispanicRate = $formValues.find('.valueShortTermSuspensionsHispanicRate').val();
	if(valueShortTermSuspensionsHispanicRate != null && valueShortTermSuspensionsHispanicRate !== '')
	var removeShortTermSuspensionsHispanicRate = $formFilters.find('.removeShortTermSuspensionsHispanicRate').val() === 'true';
	var setShortTermSuspensionsHispanicRate = removeShortTermSuspensionsHispanicRate ? null : $formValues.find('.setShortTermSuspensionsHispanicRate').val();
	if(removeShortTermSuspensionsHispanicRate || setShortTermSuspensionsHispanicRate != null && setShortTermSuspensionsHispanicRate !== '')
		vals['setShortTermSuspensionsHispanicRate'] = setShortTermSuspensionsHispanicRate;
	var addShortTermSuspensionsHispanicRate = $formValues.find('.addShortTermSuspensionsHispanicRate').val();
	if(addShortTermSuspensionsHispanicRate != null && addShortTermSuspensionsHispanicRate !== '')
		vals['addShortTermSuspensionsHispanicRate'] = addShortTermSuspensionsHispanicRate;
	var removeShortTermSuspensionsHispanicRate = $formValues.find('.removeShortTermSuspensionsHispanicRate').val();
	if(removeShortTermSuspensionsHispanicRate != null && removeShortTermSuspensionsHispanicRate !== '')
		vals['removeShortTermSuspensionsHispanicRate'] = removeShortTermSuspensionsHispanicRate;

	var valueShortTermSuspensionsIndianFemale = $formValues.find('.valueShortTermSuspensionsIndianFemale').val();
	if(valueShortTermSuspensionsIndianFemale != null && valueShortTermSuspensionsIndianFemale !== '')
	var removeShortTermSuspensionsIndianFemale = $formFilters.find('.removeShortTermSuspensionsIndianFemale').val() === 'true';
	var setShortTermSuspensionsIndianFemale = removeShortTermSuspensionsIndianFemale ? null : $formValues.find('.setShortTermSuspensionsIndianFemale').val();
	if(removeShortTermSuspensionsIndianFemale || setShortTermSuspensionsIndianFemale != null && setShortTermSuspensionsIndianFemale !== '')
		vals['setShortTermSuspensionsIndianFemale'] = setShortTermSuspensionsIndianFemale;
	var addShortTermSuspensionsIndianFemale = $formValues.find('.addShortTermSuspensionsIndianFemale').val();
	if(addShortTermSuspensionsIndianFemale != null && addShortTermSuspensionsIndianFemale !== '')
		vals['addShortTermSuspensionsIndianFemale'] = addShortTermSuspensionsIndianFemale;
	var removeShortTermSuspensionsIndianFemale = $formValues.find('.removeShortTermSuspensionsIndianFemale').val();
	if(removeShortTermSuspensionsIndianFemale != null && removeShortTermSuspensionsIndianFemale !== '')
		vals['removeShortTermSuspensionsIndianFemale'] = removeShortTermSuspensionsIndianFemale;

	var valueShortTermSuspensionsIndianMale = $formValues.find('.valueShortTermSuspensionsIndianMale').val();
	if(valueShortTermSuspensionsIndianMale != null && valueShortTermSuspensionsIndianMale !== '')
	var removeShortTermSuspensionsIndianMale = $formFilters.find('.removeShortTermSuspensionsIndianMale').val() === 'true';
	var setShortTermSuspensionsIndianMale = removeShortTermSuspensionsIndianMale ? null : $formValues.find('.setShortTermSuspensionsIndianMale').val();
	if(removeShortTermSuspensionsIndianMale || setShortTermSuspensionsIndianMale != null && setShortTermSuspensionsIndianMale !== '')
		vals['setShortTermSuspensionsIndianMale'] = setShortTermSuspensionsIndianMale;
	var addShortTermSuspensionsIndianMale = $formValues.find('.addShortTermSuspensionsIndianMale').val();
	if(addShortTermSuspensionsIndianMale != null && addShortTermSuspensionsIndianMale !== '')
		vals['addShortTermSuspensionsIndianMale'] = addShortTermSuspensionsIndianMale;
	var removeShortTermSuspensionsIndianMale = $formValues.find('.removeShortTermSuspensionsIndianMale').val();
	if(removeShortTermSuspensionsIndianMale != null && removeShortTermSuspensionsIndianMale !== '')
		vals['removeShortTermSuspensionsIndianMale'] = removeShortTermSuspensionsIndianMale;

	var valueShortTermSuspensionsIndianTotal = $formValues.find('.valueShortTermSuspensionsIndianTotal').val();
	if(valueShortTermSuspensionsIndianTotal != null && valueShortTermSuspensionsIndianTotal !== '')
	var removeShortTermSuspensionsIndianTotal = $formFilters.find('.removeShortTermSuspensionsIndianTotal').val() === 'true';
	var setShortTermSuspensionsIndianTotal = removeShortTermSuspensionsIndianTotal ? null : $formValues.find('.setShortTermSuspensionsIndianTotal').val();
	if(removeShortTermSuspensionsIndianTotal || setShortTermSuspensionsIndianTotal != null && setShortTermSuspensionsIndianTotal !== '')
		vals['setShortTermSuspensionsIndianTotal'] = setShortTermSuspensionsIndianTotal;
	var addShortTermSuspensionsIndianTotal = $formValues.find('.addShortTermSuspensionsIndianTotal').val();
	if(addShortTermSuspensionsIndianTotal != null && addShortTermSuspensionsIndianTotal !== '')
		vals['addShortTermSuspensionsIndianTotal'] = addShortTermSuspensionsIndianTotal;
	var removeShortTermSuspensionsIndianTotal = $formValues.find('.removeShortTermSuspensionsIndianTotal').val();
	if(removeShortTermSuspensionsIndianTotal != null && removeShortTermSuspensionsIndianTotal !== '')
		vals['removeShortTermSuspensionsIndianTotal'] = removeShortTermSuspensionsIndianTotal;

	var valueShortTermSuspensionsIndianPercent = $formValues.find('.valueShortTermSuspensionsIndianPercent').val();
	if(valueShortTermSuspensionsIndianPercent != null && valueShortTermSuspensionsIndianPercent !== '')
	var removeShortTermSuspensionsIndianPercent = $formFilters.find('.removeShortTermSuspensionsIndianPercent').val() === 'true';
	var setShortTermSuspensionsIndianPercent = removeShortTermSuspensionsIndianPercent ? null : $formValues.find('.setShortTermSuspensionsIndianPercent').val();
	if(removeShortTermSuspensionsIndianPercent || setShortTermSuspensionsIndianPercent != null && setShortTermSuspensionsIndianPercent !== '')
		vals['setShortTermSuspensionsIndianPercent'] = setShortTermSuspensionsIndianPercent;
	var addShortTermSuspensionsIndianPercent = $formValues.find('.addShortTermSuspensionsIndianPercent').val();
	if(addShortTermSuspensionsIndianPercent != null && addShortTermSuspensionsIndianPercent !== '')
		vals['addShortTermSuspensionsIndianPercent'] = addShortTermSuspensionsIndianPercent;
	var removeShortTermSuspensionsIndianPercent = $formValues.find('.removeShortTermSuspensionsIndianPercent').val();
	if(removeShortTermSuspensionsIndianPercent != null && removeShortTermSuspensionsIndianPercent !== '')
		vals['removeShortTermSuspensionsIndianPercent'] = removeShortTermSuspensionsIndianPercent;

	var valueShortTermSuspensionsIndianRate = $formValues.find('.valueShortTermSuspensionsIndianRate').val();
	if(valueShortTermSuspensionsIndianRate != null && valueShortTermSuspensionsIndianRate !== '')
	var removeShortTermSuspensionsIndianRate = $formFilters.find('.removeShortTermSuspensionsIndianRate').val() === 'true';
	var setShortTermSuspensionsIndianRate = removeShortTermSuspensionsIndianRate ? null : $formValues.find('.setShortTermSuspensionsIndianRate').val();
	if(removeShortTermSuspensionsIndianRate || setShortTermSuspensionsIndianRate != null && setShortTermSuspensionsIndianRate !== '')
		vals['setShortTermSuspensionsIndianRate'] = setShortTermSuspensionsIndianRate;
	var addShortTermSuspensionsIndianRate = $formValues.find('.addShortTermSuspensionsIndianRate').val();
	if(addShortTermSuspensionsIndianRate != null && addShortTermSuspensionsIndianRate !== '')
		vals['addShortTermSuspensionsIndianRate'] = addShortTermSuspensionsIndianRate;
	var removeShortTermSuspensionsIndianRate = $formValues.find('.removeShortTermSuspensionsIndianRate').val();
	if(removeShortTermSuspensionsIndianRate != null && removeShortTermSuspensionsIndianRate !== '')
		vals['removeShortTermSuspensionsIndianRate'] = removeShortTermSuspensionsIndianRate;

	var valueShortTermSuspensionsMultiRacialFemale = $formValues.find('.valueShortTermSuspensionsMultiRacialFemale').val();
	if(valueShortTermSuspensionsMultiRacialFemale != null && valueShortTermSuspensionsMultiRacialFemale !== '')
	var removeShortTermSuspensionsMultiRacialFemale = $formFilters.find('.removeShortTermSuspensionsMultiRacialFemale').val() === 'true';
	var setShortTermSuspensionsMultiRacialFemale = removeShortTermSuspensionsMultiRacialFemale ? null : $formValues.find('.setShortTermSuspensionsMultiRacialFemale').val();
	if(removeShortTermSuspensionsMultiRacialFemale || setShortTermSuspensionsMultiRacialFemale != null && setShortTermSuspensionsMultiRacialFemale !== '')
		vals['setShortTermSuspensionsMultiRacialFemale'] = setShortTermSuspensionsMultiRacialFemale;
	var addShortTermSuspensionsMultiRacialFemale = $formValues.find('.addShortTermSuspensionsMultiRacialFemale').val();
	if(addShortTermSuspensionsMultiRacialFemale != null && addShortTermSuspensionsMultiRacialFemale !== '')
		vals['addShortTermSuspensionsMultiRacialFemale'] = addShortTermSuspensionsMultiRacialFemale;
	var removeShortTermSuspensionsMultiRacialFemale = $formValues.find('.removeShortTermSuspensionsMultiRacialFemale').val();
	if(removeShortTermSuspensionsMultiRacialFemale != null && removeShortTermSuspensionsMultiRacialFemale !== '')
		vals['removeShortTermSuspensionsMultiRacialFemale'] = removeShortTermSuspensionsMultiRacialFemale;

	var valueShortTermSuspensionsMultiRacialMale = $formValues.find('.valueShortTermSuspensionsMultiRacialMale').val();
	if(valueShortTermSuspensionsMultiRacialMale != null && valueShortTermSuspensionsMultiRacialMale !== '')
	var removeShortTermSuspensionsMultiRacialMale = $formFilters.find('.removeShortTermSuspensionsMultiRacialMale').val() === 'true';
	var setShortTermSuspensionsMultiRacialMale = removeShortTermSuspensionsMultiRacialMale ? null : $formValues.find('.setShortTermSuspensionsMultiRacialMale').val();
	if(removeShortTermSuspensionsMultiRacialMale || setShortTermSuspensionsMultiRacialMale != null && setShortTermSuspensionsMultiRacialMale !== '')
		vals['setShortTermSuspensionsMultiRacialMale'] = setShortTermSuspensionsMultiRacialMale;
	var addShortTermSuspensionsMultiRacialMale = $formValues.find('.addShortTermSuspensionsMultiRacialMale').val();
	if(addShortTermSuspensionsMultiRacialMale != null && addShortTermSuspensionsMultiRacialMale !== '')
		vals['addShortTermSuspensionsMultiRacialMale'] = addShortTermSuspensionsMultiRacialMale;
	var removeShortTermSuspensionsMultiRacialMale = $formValues.find('.removeShortTermSuspensionsMultiRacialMale').val();
	if(removeShortTermSuspensionsMultiRacialMale != null && removeShortTermSuspensionsMultiRacialMale !== '')
		vals['removeShortTermSuspensionsMultiRacialMale'] = removeShortTermSuspensionsMultiRacialMale;

	var valueShortTermSuspensionsMultiRacialTotal = $formValues.find('.valueShortTermSuspensionsMultiRacialTotal').val();
	if(valueShortTermSuspensionsMultiRacialTotal != null && valueShortTermSuspensionsMultiRacialTotal !== '')
	var removeShortTermSuspensionsMultiRacialTotal = $formFilters.find('.removeShortTermSuspensionsMultiRacialTotal').val() === 'true';
	var setShortTermSuspensionsMultiRacialTotal = removeShortTermSuspensionsMultiRacialTotal ? null : $formValues.find('.setShortTermSuspensionsMultiRacialTotal').val();
	if(removeShortTermSuspensionsMultiRacialTotal || setShortTermSuspensionsMultiRacialTotal != null && setShortTermSuspensionsMultiRacialTotal !== '')
		vals['setShortTermSuspensionsMultiRacialTotal'] = setShortTermSuspensionsMultiRacialTotal;
	var addShortTermSuspensionsMultiRacialTotal = $formValues.find('.addShortTermSuspensionsMultiRacialTotal').val();
	if(addShortTermSuspensionsMultiRacialTotal != null && addShortTermSuspensionsMultiRacialTotal !== '')
		vals['addShortTermSuspensionsMultiRacialTotal'] = addShortTermSuspensionsMultiRacialTotal;
	var removeShortTermSuspensionsMultiRacialTotal = $formValues.find('.removeShortTermSuspensionsMultiRacialTotal').val();
	if(removeShortTermSuspensionsMultiRacialTotal != null && removeShortTermSuspensionsMultiRacialTotal !== '')
		vals['removeShortTermSuspensionsMultiRacialTotal'] = removeShortTermSuspensionsMultiRacialTotal;

	var valueShortTermSuspensionsMultiRacialPercent = $formValues.find('.valueShortTermSuspensionsMultiRacialPercent').val();
	if(valueShortTermSuspensionsMultiRacialPercent != null && valueShortTermSuspensionsMultiRacialPercent !== '')
	var removeShortTermSuspensionsMultiRacialPercent = $formFilters.find('.removeShortTermSuspensionsMultiRacialPercent').val() === 'true';
	var setShortTermSuspensionsMultiRacialPercent = removeShortTermSuspensionsMultiRacialPercent ? null : $formValues.find('.setShortTermSuspensionsMultiRacialPercent').val();
	if(removeShortTermSuspensionsMultiRacialPercent || setShortTermSuspensionsMultiRacialPercent != null && setShortTermSuspensionsMultiRacialPercent !== '')
		vals['setShortTermSuspensionsMultiRacialPercent'] = setShortTermSuspensionsMultiRacialPercent;
	var addShortTermSuspensionsMultiRacialPercent = $formValues.find('.addShortTermSuspensionsMultiRacialPercent').val();
	if(addShortTermSuspensionsMultiRacialPercent != null && addShortTermSuspensionsMultiRacialPercent !== '')
		vals['addShortTermSuspensionsMultiRacialPercent'] = addShortTermSuspensionsMultiRacialPercent;
	var removeShortTermSuspensionsMultiRacialPercent = $formValues.find('.removeShortTermSuspensionsMultiRacialPercent').val();
	if(removeShortTermSuspensionsMultiRacialPercent != null && removeShortTermSuspensionsMultiRacialPercent !== '')
		vals['removeShortTermSuspensionsMultiRacialPercent'] = removeShortTermSuspensionsMultiRacialPercent;

	var valueShortTermSuspensionsMultiRacialRate = $formValues.find('.valueShortTermSuspensionsMultiRacialRate').val();
	if(valueShortTermSuspensionsMultiRacialRate != null && valueShortTermSuspensionsMultiRacialRate !== '')
	var removeShortTermSuspensionsMultiRacialRate = $formFilters.find('.removeShortTermSuspensionsMultiRacialRate').val() === 'true';
	var setShortTermSuspensionsMultiRacialRate = removeShortTermSuspensionsMultiRacialRate ? null : $formValues.find('.setShortTermSuspensionsMultiRacialRate').val();
	if(removeShortTermSuspensionsMultiRacialRate || setShortTermSuspensionsMultiRacialRate != null && setShortTermSuspensionsMultiRacialRate !== '')
		vals['setShortTermSuspensionsMultiRacialRate'] = setShortTermSuspensionsMultiRacialRate;
	var addShortTermSuspensionsMultiRacialRate = $formValues.find('.addShortTermSuspensionsMultiRacialRate').val();
	if(addShortTermSuspensionsMultiRacialRate != null && addShortTermSuspensionsMultiRacialRate !== '')
		vals['addShortTermSuspensionsMultiRacialRate'] = addShortTermSuspensionsMultiRacialRate;
	var removeShortTermSuspensionsMultiRacialRate = $formValues.find('.removeShortTermSuspensionsMultiRacialRate').val();
	if(removeShortTermSuspensionsMultiRacialRate != null && removeShortTermSuspensionsMultiRacialRate !== '')
		vals['removeShortTermSuspensionsMultiRacialRate'] = removeShortTermSuspensionsMultiRacialRate;

	var valueShortTermSuspensionsPacificIslanderFemale = $formValues.find('.valueShortTermSuspensionsPacificIslanderFemale').val();
	if(valueShortTermSuspensionsPacificIslanderFemale != null && valueShortTermSuspensionsPacificIslanderFemale !== '')
	var removeShortTermSuspensionsPacificIslanderFemale = $formFilters.find('.removeShortTermSuspensionsPacificIslanderFemale').val() === 'true';
	var setShortTermSuspensionsPacificIslanderFemale = removeShortTermSuspensionsPacificIslanderFemale ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderFemale').val();
	if(removeShortTermSuspensionsPacificIslanderFemale || setShortTermSuspensionsPacificIslanderFemale != null && setShortTermSuspensionsPacificIslanderFemale !== '')
		vals['setShortTermSuspensionsPacificIslanderFemale'] = setShortTermSuspensionsPacificIslanderFemale;
	var addShortTermSuspensionsPacificIslanderFemale = $formValues.find('.addShortTermSuspensionsPacificIslanderFemale').val();
	if(addShortTermSuspensionsPacificIslanderFemale != null && addShortTermSuspensionsPacificIslanderFemale !== '')
		vals['addShortTermSuspensionsPacificIslanderFemale'] = addShortTermSuspensionsPacificIslanderFemale;
	var removeShortTermSuspensionsPacificIslanderFemale = $formValues.find('.removeShortTermSuspensionsPacificIslanderFemale').val();
	if(removeShortTermSuspensionsPacificIslanderFemale != null && removeShortTermSuspensionsPacificIslanderFemale !== '')
		vals['removeShortTermSuspensionsPacificIslanderFemale'] = removeShortTermSuspensionsPacificIslanderFemale;

	var valueShortTermSuspensionsPacificIslanderMale = $formValues.find('.valueShortTermSuspensionsPacificIslanderMale').val();
	if(valueShortTermSuspensionsPacificIslanderMale != null && valueShortTermSuspensionsPacificIslanderMale !== '')
	var removeShortTermSuspensionsPacificIslanderMale = $formFilters.find('.removeShortTermSuspensionsPacificIslanderMale').val() === 'true';
	var setShortTermSuspensionsPacificIslanderMale = removeShortTermSuspensionsPacificIslanderMale ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderMale').val();
	if(removeShortTermSuspensionsPacificIslanderMale || setShortTermSuspensionsPacificIslanderMale != null && setShortTermSuspensionsPacificIslanderMale !== '')
		vals['setShortTermSuspensionsPacificIslanderMale'] = setShortTermSuspensionsPacificIslanderMale;
	var addShortTermSuspensionsPacificIslanderMale = $formValues.find('.addShortTermSuspensionsPacificIslanderMale').val();
	if(addShortTermSuspensionsPacificIslanderMale != null && addShortTermSuspensionsPacificIslanderMale !== '')
		vals['addShortTermSuspensionsPacificIslanderMale'] = addShortTermSuspensionsPacificIslanderMale;
	var removeShortTermSuspensionsPacificIslanderMale = $formValues.find('.removeShortTermSuspensionsPacificIslanderMale').val();
	if(removeShortTermSuspensionsPacificIslanderMale != null && removeShortTermSuspensionsPacificIslanderMale !== '')
		vals['removeShortTermSuspensionsPacificIslanderMale'] = removeShortTermSuspensionsPacificIslanderMale;

	var valueShortTermSuspensionsPacificIslanderTotal = $formValues.find('.valueShortTermSuspensionsPacificIslanderTotal').val();
	if(valueShortTermSuspensionsPacificIslanderTotal != null && valueShortTermSuspensionsPacificIslanderTotal !== '')
	var removeShortTermSuspensionsPacificIslanderTotal = $formFilters.find('.removeShortTermSuspensionsPacificIslanderTotal').val() === 'true';
	var setShortTermSuspensionsPacificIslanderTotal = removeShortTermSuspensionsPacificIslanderTotal ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderTotal').val();
	if(removeShortTermSuspensionsPacificIslanderTotal || setShortTermSuspensionsPacificIslanderTotal != null && setShortTermSuspensionsPacificIslanderTotal !== '')
		vals['setShortTermSuspensionsPacificIslanderTotal'] = setShortTermSuspensionsPacificIslanderTotal;
	var addShortTermSuspensionsPacificIslanderTotal = $formValues.find('.addShortTermSuspensionsPacificIslanderTotal').val();
	if(addShortTermSuspensionsPacificIslanderTotal != null && addShortTermSuspensionsPacificIslanderTotal !== '')
		vals['addShortTermSuspensionsPacificIslanderTotal'] = addShortTermSuspensionsPacificIslanderTotal;
	var removeShortTermSuspensionsPacificIslanderTotal = $formValues.find('.removeShortTermSuspensionsPacificIslanderTotal').val();
	if(removeShortTermSuspensionsPacificIslanderTotal != null && removeShortTermSuspensionsPacificIslanderTotal !== '')
		vals['removeShortTermSuspensionsPacificIslanderTotal'] = removeShortTermSuspensionsPacificIslanderTotal;

	var valueShortTermSuspensionsPacificIslanderPercent = $formValues.find('.valueShortTermSuspensionsPacificIslanderPercent').val();
	if(valueShortTermSuspensionsPacificIslanderPercent != null && valueShortTermSuspensionsPacificIslanderPercent !== '')
	var removeShortTermSuspensionsPacificIslanderPercent = $formFilters.find('.removeShortTermSuspensionsPacificIslanderPercent').val() === 'true';
	var setShortTermSuspensionsPacificIslanderPercent = removeShortTermSuspensionsPacificIslanderPercent ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderPercent').val();
	if(removeShortTermSuspensionsPacificIslanderPercent || setShortTermSuspensionsPacificIslanderPercent != null && setShortTermSuspensionsPacificIslanderPercent !== '')
		vals['setShortTermSuspensionsPacificIslanderPercent'] = setShortTermSuspensionsPacificIslanderPercent;
	var addShortTermSuspensionsPacificIslanderPercent = $formValues.find('.addShortTermSuspensionsPacificIslanderPercent').val();
	if(addShortTermSuspensionsPacificIslanderPercent != null && addShortTermSuspensionsPacificIslanderPercent !== '')
		vals['addShortTermSuspensionsPacificIslanderPercent'] = addShortTermSuspensionsPacificIslanderPercent;
	var removeShortTermSuspensionsPacificIslanderPercent = $formValues.find('.removeShortTermSuspensionsPacificIslanderPercent').val();
	if(removeShortTermSuspensionsPacificIslanderPercent != null && removeShortTermSuspensionsPacificIslanderPercent !== '')
		vals['removeShortTermSuspensionsPacificIslanderPercent'] = removeShortTermSuspensionsPacificIslanderPercent;

	var valueShortTermSuspensionsPacificIslanderRate = $formValues.find('.valueShortTermSuspensionsPacificIslanderRate').val();
	if(valueShortTermSuspensionsPacificIslanderRate != null && valueShortTermSuspensionsPacificIslanderRate !== '')
	var removeShortTermSuspensionsPacificIslanderRate = $formFilters.find('.removeShortTermSuspensionsPacificIslanderRate').val() === 'true';
	var setShortTermSuspensionsPacificIslanderRate = removeShortTermSuspensionsPacificIslanderRate ? null : $formValues.find('.setShortTermSuspensionsPacificIslanderRate').val();
	if(removeShortTermSuspensionsPacificIslanderRate || setShortTermSuspensionsPacificIslanderRate != null && setShortTermSuspensionsPacificIslanderRate !== '')
		vals['setShortTermSuspensionsPacificIslanderRate'] = setShortTermSuspensionsPacificIslanderRate;
	var addShortTermSuspensionsPacificIslanderRate = $formValues.find('.addShortTermSuspensionsPacificIslanderRate').val();
	if(addShortTermSuspensionsPacificIslanderRate != null && addShortTermSuspensionsPacificIslanderRate !== '')
		vals['addShortTermSuspensionsPacificIslanderRate'] = addShortTermSuspensionsPacificIslanderRate;
	var removeShortTermSuspensionsPacificIslanderRate = $formValues.find('.removeShortTermSuspensionsPacificIslanderRate').val();
	if(removeShortTermSuspensionsPacificIslanderRate != null && removeShortTermSuspensionsPacificIslanderRate !== '')
		vals['removeShortTermSuspensionsPacificIslanderRate'] = removeShortTermSuspensionsPacificIslanderRate;

	var valueShortTermSuspensionsWhiteFemale = $formValues.find('.valueShortTermSuspensionsWhiteFemale').val();
	if(valueShortTermSuspensionsWhiteFemale != null && valueShortTermSuspensionsWhiteFemale !== '')
	var removeShortTermSuspensionsWhiteFemale = $formFilters.find('.removeShortTermSuspensionsWhiteFemale').val() === 'true';
	var setShortTermSuspensionsWhiteFemale = removeShortTermSuspensionsWhiteFemale ? null : $formValues.find('.setShortTermSuspensionsWhiteFemale').val();
	if(removeShortTermSuspensionsWhiteFemale || setShortTermSuspensionsWhiteFemale != null && setShortTermSuspensionsWhiteFemale !== '')
		vals['setShortTermSuspensionsWhiteFemale'] = setShortTermSuspensionsWhiteFemale;
	var addShortTermSuspensionsWhiteFemale = $formValues.find('.addShortTermSuspensionsWhiteFemale').val();
	if(addShortTermSuspensionsWhiteFemale != null && addShortTermSuspensionsWhiteFemale !== '')
		vals['addShortTermSuspensionsWhiteFemale'] = addShortTermSuspensionsWhiteFemale;
	var removeShortTermSuspensionsWhiteFemale = $formValues.find('.removeShortTermSuspensionsWhiteFemale').val();
	if(removeShortTermSuspensionsWhiteFemale != null && removeShortTermSuspensionsWhiteFemale !== '')
		vals['removeShortTermSuspensionsWhiteFemale'] = removeShortTermSuspensionsWhiteFemale;

	var valueShortTermSuspensionsWhiteMale = $formValues.find('.valueShortTermSuspensionsWhiteMale').val();
	if(valueShortTermSuspensionsWhiteMale != null && valueShortTermSuspensionsWhiteMale !== '')
	var removeShortTermSuspensionsWhiteMale = $formFilters.find('.removeShortTermSuspensionsWhiteMale').val() === 'true';
	var setShortTermSuspensionsWhiteMale = removeShortTermSuspensionsWhiteMale ? null : $formValues.find('.setShortTermSuspensionsWhiteMale').val();
	if(removeShortTermSuspensionsWhiteMale || setShortTermSuspensionsWhiteMale != null && setShortTermSuspensionsWhiteMale !== '')
		vals['setShortTermSuspensionsWhiteMale'] = setShortTermSuspensionsWhiteMale;
	var addShortTermSuspensionsWhiteMale = $formValues.find('.addShortTermSuspensionsWhiteMale').val();
	if(addShortTermSuspensionsWhiteMale != null && addShortTermSuspensionsWhiteMale !== '')
		vals['addShortTermSuspensionsWhiteMale'] = addShortTermSuspensionsWhiteMale;
	var removeShortTermSuspensionsWhiteMale = $formValues.find('.removeShortTermSuspensionsWhiteMale').val();
	if(removeShortTermSuspensionsWhiteMale != null && removeShortTermSuspensionsWhiteMale !== '')
		vals['removeShortTermSuspensionsWhiteMale'] = removeShortTermSuspensionsWhiteMale;

	var valueShortTermSuspensionsWhiteTotal = $formValues.find('.valueShortTermSuspensionsWhiteTotal').val();
	if(valueShortTermSuspensionsWhiteTotal != null && valueShortTermSuspensionsWhiteTotal !== '')
	var removeShortTermSuspensionsWhiteTotal = $formFilters.find('.removeShortTermSuspensionsWhiteTotal').val() === 'true';
	var setShortTermSuspensionsWhiteTotal = removeShortTermSuspensionsWhiteTotal ? null : $formValues.find('.setShortTermSuspensionsWhiteTotal').val();
	if(removeShortTermSuspensionsWhiteTotal || setShortTermSuspensionsWhiteTotal != null && setShortTermSuspensionsWhiteTotal !== '')
		vals['setShortTermSuspensionsWhiteTotal'] = setShortTermSuspensionsWhiteTotal;
	var addShortTermSuspensionsWhiteTotal = $formValues.find('.addShortTermSuspensionsWhiteTotal').val();
	if(addShortTermSuspensionsWhiteTotal != null && addShortTermSuspensionsWhiteTotal !== '')
		vals['addShortTermSuspensionsWhiteTotal'] = addShortTermSuspensionsWhiteTotal;
	var removeShortTermSuspensionsWhiteTotal = $formValues.find('.removeShortTermSuspensionsWhiteTotal').val();
	if(removeShortTermSuspensionsWhiteTotal != null && removeShortTermSuspensionsWhiteTotal !== '')
		vals['removeShortTermSuspensionsWhiteTotal'] = removeShortTermSuspensionsWhiteTotal;

	var valueShortTermSuspensionsWhitePercent = $formValues.find('.valueShortTermSuspensionsWhitePercent').val();
	if(valueShortTermSuspensionsWhitePercent != null && valueShortTermSuspensionsWhitePercent !== '')
	var removeShortTermSuspensionsWhitePercent = $formFilters.find('.removeShortTermSuspensionsWhitePercent').val() === 'true';
	var setShortTermSuspensionsWhitePercent = removeShortTermSuspensionsWhitePercent ? null : $formValues.find('.setShortTermSuspensionsWhitePercent').val();
	if(removeShortTermSuspensionsWhitePercent || setShortTermSuspensionsWhitePercent != null && setShortTermSuspensionsWhitePercent !== '')
		vals['setShortTermSuspensionsWhitePercent'] = setShortTermSuspensionsWhitePercent;
	var addShortTermSuspensionsWhitePercent = $formValues.find('.addShortTermSuspensionsWhitePercent').val();
	if(addShortTermSuspensionsWhitePercent != null && addShortTermSuspensionsWhitePercent !== '')
		vals['addShortTermSuspensionsWhitePercent'] = addShortTermSuspensionsWhitePercent;
	var removeShortTermSuspensionsWhitePercent = $formValues.find('.removeShortTermSuspensionsWhitePercent').val();
	if(removeShortTermSuspensionsWhitePercent != null && removeShortTermSuspensionsWhitePercent !== '')
		vals['removeShortTermSuspensionsWhitePercent'] = removeShortTermSuspensionsWhitePercent;

	var valueShortTermSuspensionsWhiteRate = $formValues.find('.valueShortTermSuspensionsWhiteRate').val();
	if(valueShortTermSuspensionsWhiteRate != null && valueShortTermSuspensionsWhiteRate !== '')
	var removeShortTermSuspensionsWhiteRate = $formFilters.find('.removeShortTermSuspensionsWhiteRate').val() === 'true';
	var setShortTermSuspensionsWhiteRate = removeShortTermSuspensionsWhiteRate ? null : $formValues.find('.setShortTermSuspensionsWhiteRate').val();
	if(removeShortTermSuspensionsWhiteRate || setShortTermSuspensionsWhiteRate != null && setShortTermSuspensionsWhiteRate !== '')
		vals['setShortTermSuspensionsWhiteRate'] = setShortTermSuspensionsWhiteRate;
	var addShortTermSuspensionsWhiteRate = $formValues.find('.addShortTermSuspensionsWhiteRate').val();
	if(addShortTermSuspensionsWhiteRate != null && addShortTermSuspensionsWhiteRate !== '')
		vals['addShortTermSuspensionsWhiteRate'] = addShortTermSuspensionsWhiteRate;
	var removeShortTermSuspensionsWhiteRate = $formValues.find('.removeShortTermSuspensionsWhiteRate').val();
	if(removeShortTermSuspensionsWhiteRate != null && removeShortTermSuspensionsWhiteRate !== '')
		vals['removeShortTermSuspensionsWhiteRate'] = removeShortTermSuspensionsWhiteRate;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

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

		var filterAgencyKey = $formFilters.find('.valueAgencyKey').val();
		if(filterAgencyKey != null && filterAgencyKey !== '')
			filters.push({ name: 'fq', value: 'agencyKey:' + filterAgencyKey });

		var filterPupilsIndianMale = $formFilters.find('.valuePupilsIndianMale').val();
		if(filterPupilsIndianMale != null && filterPupilsIndianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianMale:' + filterPupilsIndianMale });

		var filterPupilsIndianFemale = $formFilters.find('.valuePupilsIndianFemale').val();
		if(filterPupilsIndianFemale != null && filterPupilsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianFemale:' + filterPupilsIndianFemale });

		var filterPupilsIndianTotal = $formFilters.find('.valuePupilsIndianTotal').val();
		if(filterPupilsIndianTotal != null && filterPupilsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianTotal:' + filterPupilsIndianTotal });

		var filterPupilsIndianPercent = $formFilters.find('.valuePupilsIndianPercent').val();
		if(filterPupilsIndianPercent != null && filterPupilsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianPercent:' + filterPupilsIndianPercent });

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

		var filterPupilsHispanicMale = $formFilters.find('.valuePupilsHispanicMale').val();
		if(filterPupilsHispanicMale != null && filterPupilsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicMale:' + filterPupilsHispanicMale });

		var filterPupilsHispanicFemale = $formFilters.find('.valuePupilsHispanicFemale').val();
		if(filterPupilsHispanicFemale != null && filterPupilsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicFemale:' + filterPupilsHispanicFemale });

		var filterPupilsHispanicTotal = $formFilters.find('.valuePupilsHispanicTotal').val();
		if(filterPupilsHispanicTotal != null && filterPupilsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicTotal:' + filterPupilsHispanicTotal });

		var filterPupilsHispanicPercent = $formFilters.find('.valuePupilsHispanicPercent').val();
		if(filterPupilsHispanicPercent != null && filterPupilsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicPercent:' + filterPupilsHispanicPercent });

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

		var filterDelinquentComplaintsHispanic = $formFilters.find('.valueDelinquentComplaintsHispanic').val();
		if(filterDelinquentComplaintsHispanic != null && filterDelinquentComplaintsHispanic !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsHispanic:' + filterDelinquentComplaintsHispanic });

		var filterDelinquentComplaintsHispanicPercent = $formFilters.find('.valueDelinquentComplaintsHispanicPercent').val();
		if(filterDelinquentComplaintsHispanicPercent != null && filterDelinquentComplaintsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsHispanicPercent:' + filterDelinquentComplaintsHispanicPercent });

		var filterDelinquentComplaintsMultiRacial = $formFilters.find('.valueDelinquentComplaintsMultiRacial').val();
		if(filterDelinquentComplaintsMultiRacial != null && filterDelinquentComplaintsMultiRacial !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacial:' + filterDelinquentComplaintsMultiRacial });

		var filterDelinquentComplaintsMultiRacialPercent = $formFilters.find('.valueDelinquentComplaintsMultiRacialPercent').val();
		if(filterDelinquentComplaintsMultiRacialPercent != null && filterDelinquentComplaintsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacialPercent:' + filterDelinquentComplaintsMultiRacialPercent });

		var filterDelinquentComplaintsIndian = $formFilters.find('.valueDelinquentComplaintsIndian').val();
		if(filterDelinquentComplaintsIndian != null && filterDelinquentComplaintsIndian !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndian:' + filterDelinquentComplaintsIndian });

		var filterDelinquentComplaintsIndianPercent = $formFilters.find('.valueDelinquentComplaintsIndianPercent').val();
		if(filterDelinquentComplaintsIndianPercent != null && filterDelinquentComplaintsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndianPercent:' + filterDelinquentComplaintsIndianPercent });

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

		var filterShortTermSuspensionsHispanicFemale = $formFilters.find('.valueShortTermSuspensionsHispanicFemale').val();
		if(filterShortTermSuspensionsHispanicFemale != null && filterShortTermSuspensionsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicFemale:' + filterShortTermSuspensionsHispanicFemale });

		var filterShortTermSuspensionsHispanicMale = $formFilters.find('.valueShortTermSuspensionsHispanicMale').val();
		if(filterShortTermSuspensionsHispanicMale != null && filterShortTermSuspensionsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicMale:' + filterShortTermSuspensionsHispanicMale });

		var filterShortTermSuspensionsHispanicTotal = $formFilters.find('.valueShortTermSuspensionsHispanicTotal').val();
		if(filterShortTermSuspensionsHispanicTotal != null && filterShortTermSuspensionsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicTotal:' + filterShortTermSuspensionsHispanicTotal });

		var filterShortTermSuspensionsHispanicPercent = $formFilters.find('.valueShortTermSuspensionsHispanicPercent').val();
		if(filterShortTermSuspensionsHispanicPercent != null && filterShortTermSuspensionsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicPercent:' + filterShortTermSuspensionsHispanicPercent });

		var filterShortTermSuspensionsHispanicRate = $formFilters.find('.valueShortTermSuspensionsHispanicRate').val();
		if(filterShortTermSuspensionsHispanicRate != null && filterShortTermSuspensionsHispanicRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicRate:' + filterShortTermSuspensionsHispanicRate });

		var filterShortTermSuspensionsIndianFemale = $formFilters.find('.valueShortTermSuspensionsIndianFemale').val();
		if(filterShortTermSuspensionsIndianFemale != null && filterShortTermSuspensionsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianFemale:' + filterShortTermSuspensionsIndianFemale });

		var filterShortTermSuspensionsIndianMale = $formFilters.find('.valueShortTermSuspensionsIndianMale').val();
		if(filterShortTermSuspensionsIndianMale != null && filterShortTermSuspensionsIndianMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianMale:' + filterShortTermSuspensionsIndianMale });

		var filterShortTermSuspensionsIndianTotal = $formFilters.find('.valueShortTermSuspensionsIndianTotal').val();
		if(filterShortTermSuspensionsIndianTotal != null && filterShortTermSuspensionsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianTotal:' + filterShortTermSuspensionsIndianTotal });

		var filterShortTermSuspensionsIndianPercent = $formFilters.find('.valueShortTermSuspensionsIndianPercent').val();
		if(filterShortTermSuspensionsIndianPercent != null && filterShortTermSuspensionsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianPercent:' + filterShortTermSuspensionsIndianPercent });

		var filterShortTermSuspensionsIndianRate = $formFilters.find('.valueShortTermSuspensionsIndianRate').val();
		if(filterShortTermSuspensionsIndianRate != null && filterShortTermSuspensionsIndianRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianRate:' + filterShortTermSuspensionsIndianRate });

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

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterAgencyCompleteName = $formFilters.find('.valueAgencyCompleteName').val();
		if(filterAgencyCompleteName != null && filterAgencyCompleteName !== '')
			filters.push({ name: 'fq', value: 'agencyCompleteName:' + filterAgencyCompleteName });
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

		var filterPupilsIndianMale = $formFilters.find('.valuePupilsIndianMale').val();
		if(filterPupilsIndianMale != null && filterPupilsIndianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianMale:' + filterPupilsIndianMale });

		var filterPupilsIndianFemale = $formFilters.find('.valuePupilsIndianFemale').val();
		if(filterPupilsIndianFemale != null && filterPupilsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianFemale:' + filterPupilsIndianFemale });

		var filterPupilsIndianTotal = $formFilters.find('.valuePupilsIndianTotal').val();
		if(filterPupilsIndianTotal != null && filterPupilsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianTotal:' + filterPupilsIndianTotal });

		var filterPupilsIndianPercent = $formFilters.find('.valuePupilsIndianPercent').val();
		if(filterPupilsIndianPercent != null && filterPupilsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianPercent:' + filterPupilsIndianPercent });

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

		var filterPupilsHispanicMale = $formFilters.find('.valuePupilsHispanicMale').val();
		if(filterPupilsHispanicMale != null && filterPupilsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicMale:' + filterPupilsHispanicMale });

		var filterPupilsHispanicFemale = $formFilters.find('.valuePupilsHispanicFemale').val();
		if(filterPupilsHispanicFemale != null && filterPupilsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicFemale:' + filterPupilsHispanicFemale });

		var filterPupilsHispanicTotal = $formFilters.find('.valuePupilsHispanicTotal').val();
		if(filterPupilsHispanicTotal != null && filterPupilsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicTotal:' + filterPupilsHispanicTotal });

		var filterPupilsHispanicPercent = $formFilters.find('.valuePupilsHispanicPercent').val();
		if(filterPupilsHispanicPercent != null && filterPupilsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicPercent:' + filterPupilsHispanicPercent });

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

		var filterDelinquentComplaintsHispanic = $formFilters.find('.valueDelinquentComplaintsHispanic').val();
		if(filterDelinquentComplaintsHispanic != null && filterDelinquentComplaintsHispanic !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsHispanic:' + filterDelinquentComplaintsHispanic });

		var filterDelinquentComplaintsHispanicPercent = $formFilters.find('.valueDelinquentComplaintsHispanicPercent').val();
		if(filterDelinquentComplaintsHispanicPercent != null && filterDelinquentComplaintsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsHispanicPercent:' + filterDelinquentComplaintsHispanicPercent });

		var filterDelinquentComplaintsMultiRacial = $formFilters.find('.valueDelinquentComplaintsMultiRacial').val();
		if(filterDelinquentComplaintsMultiRacial != null && filterDelinquentComplaintsMultiRacial !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacial:' + filterDelinquentComplaintsMultiRacial });

		var filterDelinquentComplaintsMultiRacialPercent = $formFilters.find('.valueDelinquentComplaintsMultiRacialPercent').val();
		if(filterDelinquentComplaintsMultiRacialPercent != null && filterDelinquentComplaintsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacialPercent:' + filterDelinquentComplaintsMultiRacialPercent });

		var filterDelinquentComplaintsIndian = $formFilters.find('.valueDelinquentComplaintsIndian').val();
		if(filterDelinquentComplaintsIndian != null && filterDelinquentComplaintsIndian !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndian:' + filterDelinquentComplaintsIndian });

		var filterDelinquentComplaintsIndianPercent = $formFilters.find('.valueDelinquentComplaintsIndianPercent').val();
		if(filterDelinquentComplaintsIndianPercent != null && filterDelinquentComplaintsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndianPercent:' + filterDelinquentComplaintsIndianPercent });

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

		var filterShortTermSuspensionsHispanicFemale = $formFilters.find('.valueShortTermSuspensionsHispanicFemale').val();
		if(filterShortTermSuspensionsHispanicFemale != null && filterShortTermSuspensionsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicFemale:' + filterShortTermSuspensionsHispanicFemale });

		var filterShortTermSuspensionsHispanicMale = $formFilters.find('.valueShortTermSuspensionsHispanicMale').val();
		if(filterShortTermSuspensionsHispanicMale != null && filterShortTermSuspensionsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicMale:' + filterShortTermSuspensionsHispanicMale });

		var filterShortTermSuspensionsHispanicTotal = $formFilters.find('.valueShortTermSuspensionsHispanicTotal').val();
		if(filterShortTermSuspensionsHispanicTotal != null && filterShortTermSuspensionsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicTotal:' + filterShortTermSuspensionsHispanicTotal });

		var filterShortTermSuspensionsHispanicPercent = $formFilters.find('.valueShortTermSuspensionsHispanicPercent').val();
		if(filterShortTermSuspensionsHispanicPercent != null && filterShortTermSuspensionsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicPercent:' + filterShortTermSuspensionsHispanicPercent });

		var filterShortTermSuspensionsHispanicRate = $formFilters.find('.valueShortTermSuspensionsHispanicRate').val();
		if(filterShortTermSuspensionsHispanicRate != null && filterShortTermSuspensionsHispanicRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicRate:' + filterShortTermSuspensionsHispanicRate });

		var filterShortTermSuspensionsIndianFemale = $formFilters.find('.valueShortTermSuspensionsIndianFemale').val();
		if(filterShortTermSuspensionsIndianFemale != null && filterShortTermSuspensionsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianFemale:' + filterShortTermSuspensionsIndianFemale });

		var filterShortTermSuspensionsIndianMale = $formFilters.find('.valueShortTermSuspensionsIndianMale').val();
		if(filterShortTermSuspensionsIndianMale != null && filterShortTermSuspensionsIndianMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianMale:' + filterShortTermSuspensionsIndianMale });

		var filterShortTermSuspensionsIndianTotal = $formFilters.find('.valueShortTermSuspensionsIndianTotal').val();
		if(filterShortTermSuspensionsIndianTotal != null && filterShortTermSuspensionsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianTotal:' + filterShortTermSuspensionsIndianTotal });

		var filterShortTermSuspensionsIndianPercent = $formFilters.find('.valueShortTermSuspensionsIndianPercent').val();
		if(filterShortTermSuspensionsIndianPercent != null && filterShortTermSuspensionsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianPercent:' + filterShortTermSuspensionsIndianPercent });

		var filterShortTermSuspensionsIndianRate = $formFilters.find('.valueShortTermSuspensionsIndianRate').val();
		if(filterShortTermSuspensionsIndianRate != null && filterShortTermSuspensionsIndianRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianRate:' + filterShortTermSuspensionsIndianRate });

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

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterAgencyCompleteName = $formFilters.find('.valueAgencyCompleteName').val();
		if(filterAgencyCompleteName != null && filterAgencyCompleteName !== '')
			filters.push({ name: 'fq', value: 'agencyCompleteName:' + filterAgencyCompleteName });
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
			var $span = $('<span>').attr('class', '').text(o['agencyCompleteName']);
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

		var filterPupilsIndianMale = $formFilters.find('.valuePupilsIndianMale').val();
		if(filterPupilsIndianMale != null && filterPupilsIndianMale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianMale:' + filterPupilsIndianMale });

		var filterPupilsIndianFemale = $formFilters.find('.valuePupilsIndianFemale').val();
		if(filterPupilsIndianFemale != null && filterPupilsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianFemale:' + filterPupilsIndianFemale });

		var filterPupilsIndianTotal = $formFilters.find('.valuePupilsIndianTotal').val();
		if(filterPupilsIndianTotal != null && filterPupilsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianTotal:' + filterPupilsIndianTotal });

		var filterPupilsIndianPercent = $formFilters.find('.valuePupilsIndianPercent').val();
		if(filterPupilsIndianPercent != null && filterPupilsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsIndianPercent:' + filterPupilsIndianPercent });

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

		var filterPupilsHispanicMale = $formFilters.find('.valuePupilsHispanicMale').val();
		if(filterPupilsHispanicMale != null && filterPupilsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicMale:' + filterPupilsHispanicMale });

		var filterPupilsHispanicFemale = $formFilters.find('.valuePupilsHispanicFemale').val();
		if(filterPupilsHispanicFemale != null && filterPupilsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicFemale:' + filterPupilsHispanicFemale });

		var filterPupilsHispanicTotal = $formFilters.find('.valuePupilsHispanicTotal').val();
		if(filterPupilsHispanicTotal != null && filterPupilsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicTotal:' + filterPupilsHispanicTotal });

		var filterPupilsHispanicPercent = $formFilters.find('.valuePupilsHispanicPercent').val();
		if(filterPupilsHispanicPercent != null && filterPupilsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'pupilsHispanicPercent:' + filterPupilsHispanicPercent });

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

		var filterDelinquentComplaintsHispanic = $formFilters.find('.valueDelinquentComplaintsHispanic').val();
		if(filterDelinquentComplaintsHispanic != null && filterDelinquentComplaintsHispanic !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsHispanic:' + filterDelinquentComplaintsHispanic });

		var filterDelinquentComplaintsHispanicPercent = $formFilters.find('.valueDelinquentComplaintsHispanicPercent').val();
		if(filterDelinquentComplaintsHispanicPercent != null && filterDelinquentComplaintsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsHispanicPercent:' + filterDelinquentComplaintsHispanicPercent });

		var filterDelinquentComplaintsMultiRacial = $formFilters.find('.valueDelinquentComplaintsMultiRacial').val();
		if(filterDelinquentComplaintsMultiRacial != null && filterDelinquentComplaintsMultiRacial !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacial:' + filterDelinquentComplaintsMultiRacial });

		var filterDelinquentComplaintsMultiRacialPercent = $formFilters.find('.valueDelinquentComplaintsMultiRacialPercent').val();
		if(filterDelinquentComplaintsMultiRacialPercent != null && filterDelinquentComplaintsMultiRacialPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsMultiRacialPercent:' + filterDelinquentComplaintsMultiRacialPercent });

		var filterDelinquentComplaintsIndian = $formFilters.find('.valueDelinquentComplaintsIndian').val();
		if(filterDelinquentComplaintsIndian != null && filterDelinquentComplaintsIndian !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndian:' + filterDelinquentComplaintsIndian });

		var filterDelinquentComplaintsIndianPercent = $formFilters.find('.valueDelinquentComplaintsIndianPercent').val();
		if(filterDelinquentComplaintsIndianPercent != null && filterDelinquentComplaintsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'delinquentComplaintsIndianPercent:' + filterDelinquentComplaintsIndianPercent });

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

		var filterShortTermSuspensionsHispanicFemale = $formFilters.find('.valueShortTermSuspensionsHispanicFemale').val();
		if(filterShortTermSuspensionsHispanicFemale != null && filterShortTermSuspensionsHispanicFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicFemale:' + filterShortTermSuspensionsHispanicFemale });

		var filterShortTermSuspensionsHispanicMale = $formFilters.find('.valueShortTermSuspensionsHispanicMale').val();
		if(filterShortTermSuspensionsHispanicMale != null && filterShortTermSuspensionsHispanicMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicMale:' + filterShortTermSuspensionsHispanicMale });

		var filterShortTermSuspensionsHispanicTotal = $formFilters.find('.valueShortTermSuspensionsHispanicTotal').val();
		if(filterShortTermSuspensionsHispanicTotal != null && filterShortTermSuspensionsHispanicTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicTotal:' + filterShortTermSuspensionsHispanicTotal });

		var filterShortTermSuspensionsHispanicPercent = $formFilters.find('.valueShortTermSuspensionsHispanicPercent').val();
		if(filterShortTermSuspensionsHispanicPercent != null && filterShortTermSuspensionsHispanicPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicPercent:' + filterShortTermSuspensionsHispanicPercent });

		var filterShortTermSuspensionsHispanicRate = $formFilters.find('.valueShortTermSuspensionsHispanicRate').val();
		if(filterShortTermSuspensionsHispanicRate != null && filterShortTermSuspensionsHispanicRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsHispanicRate:' + filterShortTermSuspensionsHispanicRate });

		var filterShortTermSuspensionsIndianFemale = $formFilters.find('.valueShortTermSuspensionsIndianFemale').val();
		if(filterShortTermSuspensionsIndianFemale != null && filterShortTermSuspensionsIndianFemale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianFemale:' + filterShortTermSuspensionsIndianFemale });

		var filterShortTermSuspensionsIndianMale = $formFilters.find('.valueShortTermSuspensionsIndianMale').val();
		if(filterShortTermSuspensionsIndianMale != null && filterShortTermSuspensionsIndianMale !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianMale:' + filterShortTermSuspensionsIndianMale });

		var filterShortTermSuspensionsIndianTotal = $formFilters.find('.valueShortTermSuspensionsIndianTotal').val();
		if(filterShortTermSuspensionsIndianTotal != null && filterShortTermSuspensionsIndianTotal !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianTotal:' + filterShortTermSuspensionsIndianTotal });

		var filterShortTermSuspensionsIndianPercent = $formFilters.find('.valueShortTermSuspensionsIndianPercent').val();
		if(filterShortTermSuspensionsIndianPercent != null && filterShortTermSuspensionsIndianPercent !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianPercent:' + filterShortTermSuspensionsIndianPercent });

		var filterShortTermSuspensionsIndianRate = $formFilters.find('.valueShortTermSuspensionsIndianRate').val();
		if(filterShortTermSuspensionsIndianRate != null && filterShortTermSuspensionsIndianRate !== '')
			filters.push({ name: 'fq', value: 'shortTermSuspensionsIndianRate:' + filterShortTermSuspensionsIndianRate });

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

		var filterAgencyName = $formFilters.find('.valueAgencyName').val();
		if(filterAgencyName != null && filterAgencyName !== '')
			filters.push({ name: 'fq', value: 'agencyName:' + filterAgencyName });

		var filterAgencyCompleteName = $formFilters.find('.valueAgencyCompleteName').val();
		if(filterAgencyCompleteName != null && filterAgencyCompleteName !== '')
			filters.push({ name: 'fq', value: 'agencyCompleteName:' + filterAgencyCompleteName });
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
			var $span = $('<span>').attr('class', '').text(o['agencyCompleteName']);
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
			var val = o['delinquentComplaintsHispanic'];
			if(vars.includes('delinquentComplaintsHispanic')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsHispanic').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsHispanic').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsHispanic'));
			}
			var val = o['delinquentComplaintsHispanicPercent'];
			if(vars.includes('delinquentComplaintsHispanicPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsHispanicPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsHispanicPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsHispanicPercent'));
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
			var val = o['delinquentComplaintsIndian'];
			if(vars.includes('delinquentComplaintsIndian')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsIndian').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsIndian').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsIndian'));
			}
			var val = o['delinquentComplaintsIndianPercent'];
			if(vars.includes('delinquentComplaintsIndianPercent')) {
				$('.inputReportCard' + pk + 'DelinquentComplaintsIndianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'DelinquentComplaintsIndianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'DelinquentComplaintsIndianPercent'));
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
			var val = o['shortTermSuspensionsHispanicFemale'];
			if(vars.includes('shortTermSuspensionsHispanicFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsHispanicFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicFemale'));
			}
			var val = o['shortTermSuspensionsHispanicMale'];
			if(vars.includes('shortTermSuspensionsHispanicMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsHispanicMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicMale'));
			}
			var val = o['shortTermSuspensionsHispanicTotal'];
			if(vars.includes('shortTermSuspensionsHispanicTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsHispanicTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicTotal'));
			}
			var val = o['shortTermSuspensionsHispanicPercent'];
			if(vars.includes('shortTermSuspensionsHispanicPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsHispanicPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicPercent'));
			}
			var val = o['shortTermSuspensionsHispanicRate'];
			if(vars.includes('shortTermSuspensionsHispanicRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsHispanicRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsHispanicRate'));
			}
			var val = o['shortTermSuspensionsIndianFemale'];
			if(vars.includes('shortTermSuspensionsIndianFemale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndianFemale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndianFemale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndianFemale'));
			}
			var val = o['shortTermSuspensionsIndianMale'];
			if(vars.includes('shortTermSuspensionsIndianMale')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndianMale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndianMale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndianMale'));
			}
			var val = o['shortTermSuspensionsIndianTotal'];
			if(vars.includes('shortTermSuspensionsIndianTotal')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndianTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndianTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndianTotal'));
			}
			var val = o['shortTermSuspensionsIndianPercent'];
			if(vars.includes('shortTermSuspensionsIndianPercent')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndianPercent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndianPercent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndianPercent'));
			}
			var val = o['shortTermSuspensionsIndianRate'];
			if(vars.includes('shortTermSuspensionsIndianRate')) {
				$('.inputReportCard' + pk + 'ShortTermSuspensionsIndianRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'ShortTermSuspensionsIndianRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'ShortTermSuspensionsIndianRate'));
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
			var val = o['agencyCompleteName'];
			if(vars.includes('agencyCompleteName')) {
				$('.inputReportCard' + pk + 'AgencyCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportCard' + pk + 'AgencyCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportCard' + pk + 'AgencyCompleteName'));
			}
		});
	}
}
