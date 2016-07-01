
label_qa = function(name,object){
            if (!name){
                html = '<span class="label label-warning fsqc -1">Not Checked</span>'
                return Spacebars.SafeString(html)
                }
            else{
                if (name.QC == "1"){
                    html = '<span class="label label-success fsqc 1">Pass</span>'
                    return Spacebars.SafeString(html)
                }
                else if (name.QC=="0"){
                    html = '<span class="label label-danger fsqc 0">Fail</span>'
                    return Spacebars.SafeString(html)
                }
                else if (name.QC=="2"){
                    html = '<span class="label label-primary fsqc 2">Needs Edits</span>'
                    return Spacebars.SafeString(html)
                }
                else if (name.QC=="3"){
                    html = '<span class="label label-info fsqc 3">Edited</span>'
                    return Spacebars.SafeString(html)
                }
                else{
                    html = '<span class="label label-warning fsqc -1">Not Checked</span>'
                    return Spacebars.SafeString(html)
                }

            }
        }// end of function

/*Tabular Table Setup*/

tableFields = {
    
    "msid": {data:"msid", title:"Subject", render: function(val, type, doc){
            html = '<a class="exam msid '+val+'">'+val+'</a>'
	        return Spacebars.SafeString(html)
        }},
        
    "subject_id": {data:"subject_id", title: "Exam ID", render: function(val, type, doc){
	        html = '<a class="exam subject_id '+val+'">'+val+'</a>'
	        return Spacebars.SafeString(html)
        }},
        
    "Study Tag": {data:"Study Tag", title:"Study Tag", render: function(val, type, doc){
            if (val == null){
                return null
                }
            html = '<a class="exam study_tag '+val+'">'+val+'</a>'
            return Spacebars.SafeString(html)
        }},
        
    "Site": {data:"DCM_InstitutionName", title:"Site", render: function(val, type, doc){
            if (val == null){
                return null
                }
            html = '<a class="exam site '+val+'">'+val+'</a>'
            return Spacebars.SafeString(html)
        }},
        
    "viewNifti": {data:"name", title:"nifti filename", render: function(val, type, doc){
	                  html = '<a target="_blank" href="/viewImage/'+val+'/mseID/'+val.split("-")[1]+'">'+val+'</a>'
	                  return Spacebars.SafeString(html)
	              }},

	"viewMNI": {data:"_id", title:"file", render: function(val, type,doc){

	html = '<a target="_blank" href="/viewImage_mni/'+val+'/mseID/'+val.split("-")[1]+'">'+val+'</a>'
	                  return Spacebars.SafeString(html)
	}},
	              
    "Date": {data:"DCM_StudyDate", title:"Date"},

    "checkedBy": {data: "checkedBy", title:"checkedBy", render: function(val, type, doc){
        if (val == null){
            return null
        }
        return '<a class="fs checkedBy '+val+'">'+val+'</a>'
    }},
    "assignedTo": {data: "quality_check.user_assign", title:"assignedTo", render: function(val, type, doc){
        if (val == null){
            return null
        }
        return '<a class="fs quality_check.user_assign '+val+'">'+val+'</a>'
    }},

    "QC": {data:"quality_check", title:"QC", render: label_qa },
    
    "viewFS": {data:"name", title:"Freesurfer Subject ID", render: function(val, type, doc){
	        html = '<a target="_blank" href="/viewImage_fs/'+val+'/mseID/'+val.split("-")[1]+'">'+val+'</a>'
	        //console.log(html)
	        return Spacebars.SafeString(html)
        }},  
        
    "completeFS": {data:"complete", title:"done", render:function(val, type, doc){
            if (val == true){
                html = '<a class="fs complete true"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> yes</a>'
                return Spacebars.SafeString(html)
            }
            else{
            html = '<a class="fs complete false"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> no</a>'
                return Spacebars.SafeString(html)}
        }},
        
    "percentFS": {data:"subject_id", title:"% FS", render: function(val, type, doc){
	        total = doc["freesurfer_t1s"].length
	        count = 0.0
	        for(i=0;i<doc["freesurfer_t1s"].length;i++){
		        if (doc["freesurfer_t1s"][i]["complete"]){
			        count +=1.0
		        }
	        }
	        return count/total*100
        }},
        
    "totalFS": {data:"subject_id", title:"Total FS", render: function(val, type, doc){
	        return doc["freesurfer_t1s"].length
        }},
        
    "numNifti": {data:"num_nii", title:"# nifti", render: function(val, type, doc){
	        return doc["nifti_files"].length
        }}
    
}


