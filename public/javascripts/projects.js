// $('.proj-cat').addClass('proj-cat-unselected');


// Functionality for project category filters
$('.proj-cat').on('click', function() {
  
  // console.log(this.id);
  // console.log($(this).is('#proj-no-cats'));

  if ($(this).hasClass('proj-cat-selected')) {
    $(this).removeClass('proj-cat-selected');
    $(this).addClass('proj-cat-unselected');
    projects_state['categories'][this.id] = false;
    displaySelectedCats();
  } else if ($(this).hasClass('proj-cat-unselected')) {
    $(this).removeClass('proj-cat-unselected');
    $(this).addClass('proj-cat-selected');
    projects_state['categories'][this.id] = true;
    displaySelectedCats();
  }
});

$('.all-proj-control').on('click', function() {
  if ($(this).is('#proj-all-cats')) {
    $('.proj-cat').removeClass('proj-cat-unselected');
    $('.proj-cat').addClass('proj-cat-selected');
    allProjectsSelected();
    displaySelectedCats();
  } else if ($(this).is('#proj-no-cats')) {
    $('.proj-cat').removeClass('proj-cat-selected');
    $('.proj-cat').addClass('proj-cat-unselected');
    noProjectsSelected();
    displaySelectedCats();
  }
});

// // Clear selected filters
// $('.proj-clear-filters').on('click', function() {
//   $('.proj-cat').removeClass('proj-cat-selected');
//   // Line below is problematic
//   $('.proj-cat').addClass('proj-cat-unselected');
//   displaySelectedCats();
// })

// function displaySelectedCats() {
//   $('.proj-cat-selected').each(function() {
//     if ($(this).is('#ongoing')) {
//       console.log("YEAH");
//       $('.ongoing').css('display', 'block');
//     } else if ($(this).is('#completed')) {
//       $('.completed').css('display', 'initial');
//     } else if ($(this).is('#backburner')) {
//       $('.backburner').css('display', 'initial');
//     } else if ($(this).is('#research')) {
//       $('.research').css('display', 'initial');
//     } else if ($(this).is('#freetime')) {
//       $('.freetime').css('display', 'initial');
//     }
//   });

//   $('.proj-cat-unselected').each(function() {
//     if ($(this).is('#ongoing')) {
//       console.log("OH NO");
//       $('.ongoing').css('display', 'none');
//     } else if ($(this).is('#completed')) {
//       $('.completed').css('display', 'none');
//     } else if ($(this).is('#backburner')) {
//       $('.backburner').css('display', 'none');
//     } else if ($(this).is('#research')) {
//       $('.research').css('display', 'none');
//     } else if ($(this).is('#freetime')) {
//       $('.freetime').css('display', 'none');
//     }
//   })
// }

let projects_state = {
  'categories': {
    'ongoing': true,
    'completed': true,
    'backburner': true,
    'research': true,
    'school': true,
    'professional': true,
    'freetime': true,
    'data': true,
    'XR': true,
    'web': true,
    'creative': true
  },
  'projects': {
    'data_eng_nintex': {
      display: true,
      categories: ['completed', 'professional', 'data']
    },
    'the_alta_files': {
      display: true,
      categories: ['ongoing', 'freetime', 'creative']
    },
    'space_muse': {
      display: true,
      categories: ['ongoing', 'freetime', 'creative']
    },
    'wikilearn': {
      display: true,
      categories: ['ongoing', 'freetime', 'web']
    },
    'compass_lab': {
      display: true,
      categories: ['completed', 'professional', 'web']
    },
    'digital_native': {
      display: true,
      categories: ['completed', 'school', 'web', 'XR']
    },
    'mit_ll_viz': {
      display: true,
      categories: ['completed', 'research', 'professional', 'data', 'web']
    },
    'stl_parcel_data': {
      display: true,
      categories: ['completed', 'research', 'data']
    },
    'slu_plus': {
      display: true,
      categories: ['completed', 'school', 'XR']
    },
    'workplace_bias': {
      display: true,
      categories: ['completed', 'backburner', 'school', 'data']
    },
    'safe_bot': {
      display: true,
      categories: ['backburner', 'professional', 'web']
    }    
  }
};

function allProjectsSelected() {
  for (const key in projects_state['categories']) {
    projects_state['categories'][key] = true;
  }
  for (const key in projects_state['projects']) {
    projects_state['projects'][key]['display'] = true;
  }
}

function noProjectsSelected() {
  for (const key in projects_state['categories']) {
    projects_state['categories'][key] = false;
  }
  for (const key in projects_state['projects']) {
    projects_state['projects'][key]['display'] = false;
  }
}

function displaySelectedCats() {
  // for (const category_key in projects_state['categories']) {
  //   let key_tag = '.' + category_key;
  //   // console.log(key_tag);
  //   if (projects_state['categories'][category_key])
  //   if (projects_state[key] == false) {
  //     console.log('turning off ' + key + ', ' + key_tag + ' ' + projects_state[key]);
  //     // $(key_tag).css('display', 'none');
  //   } else {
  //     // $(key_tag).css('display', 'block');
  //   }
  // }

  // go through all projects, checking whether they should be displayed
  let projects_displayed = 0;
  for (const project_key in projects_state['projects']) {
    let display_project = false;
    // check project's categories, update project's display if one category is true
    let category_list = projects_state['projects'][project_key]['categories'];
    category_list.forEach(category_key => {
      // check if category is active in the categories object
      // console.log(category_key  + ' : ' + projects_state['categories'][category_key]);
      if (projects_state['categories'][category_key]) {
        display_project = true;
      }
    });

    // update display property of project
    projects_state['projects'][project_key]['display'] = display_project;

    let project_id = '#' + project_key;
    if (display_project) {
      projects_displayed += 1;
      $(project_id).css('display', 'initial');
    } else {
      $(project_id).css('display', 'none');
    }
  }
  let num_displayed_txt = projects_displayed + '/11';
  $('#num_displayed').text(num_displayed_txt);
}

noProjectsSelected();
displaySelectedCats();