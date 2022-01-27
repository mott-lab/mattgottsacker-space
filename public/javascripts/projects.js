// Functionality for project category filters
$('.proj-cat').on('click', function() {
  
  // console.log(this.id);
  // console.log($(this).is('#proj-no-cats'));

  if ($(this).hasClass('proj-cat-selected')) {
    $(this).removeClass('proj-cat-selected');
    $(this).addClass('proj-cat-unselected');
    projects_state['categories'][this.id] = false;
    countSelectedCategories();
    displaySelectedCats();
  } else if ($(this).hasClass('proj-cat-unselected')) {
    $(this).removeClass('proj-cat-unselected');
    $(this).addClass('proj-cat-selected');
    projects_state['categories'][this.id] = true;
    countSelectedCategories();
    displaySelectedCats();
  }
});

$('.all-proj-control').on('click', function() {
  if ($(this).is('#proj-all-cats')) {
    $('.proj-cat').removeClass('proj-cat-unselected');
    $('.proj-cat').addClass('proj-cat-selected');
    // Set to OR mode
    projects_state['filter_mode'] = 'OR';
    $('#proj-OR-mode').addClass('filter-mode-selected');
    $('#proj-AND-mode').removeClass('filter-mode-selected');

    allProjectsSelected();
    countSelectedCategories();
    displaySelectedCats();
  } else if ($(this).is('#proj-no-cats')) {
    $('.proj-cat').removeClass('proj-cat-selected');
    $('.proj-cat').addClass('proj-cat-unselected');
    noProjectsSelected();
    countSelectedCategories();
    displaySelectedCats();
  }
});

$('.filter-mode-control').on('click', function() {
  if ($(this).is('#proj-OR-mode')) {
    projects_state['filter_mode'] = 'OR';
    $(this).addClass('filter-mode-selected');
    $('#proj-AND-mode').removeClass('filter-mode-selected');
    displaySelectedCats();
  } else if ($(this).is('#proj-AND-mode')) {
    projects_state['filter_mode'] = 'AND';
    $(this).addClass('filter-mode-selected');
    $('#proj-OR-mode').removeClass('filter-mode-selected');
    displaySelectedCats();
  }
});

let projects_state = {
  'filter_mode': 'OR',
  'selected_cats': 0,
  'total_cats': 0,
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
    'vr_interruptions': {
      display: true,
      categories: ['ongoing', 'research', 'XR']
    },
    'vr_interrupters': {
      display: true,
      categories: ['ongoing', 'research', 'XR']
    },
    'arplacemaking': {
      display: true,
      categories: ['completed', 'school', 'XR']
    },
    'are': {
      display: true,
      categories: ['completed', 'school', 'XR']
    },
    'vre': {
      display: true,
      categories: ['completed', 'school', 'XR']
    },
    'data_eng_nintex': {
      display: true,
      categories: ['completed', 'professional', 'data']
    },
    'the_alta_files': {
      display: true,
      categories: ['ongoing', 'freetime', 'web', 'creative']
    },
    'space_muse': {
      display: true,
      categories: ['ongoing', 'freetime', 'XR', 'web', 'creative']
    },
    'wikilearn': {
      display: true,
      categories: ['ongoing', 'freetime', 'web']
    },
    'compass_lab': {
      display: true,
      categories: ['completed', 'professional', 'web', 'XR']
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
      categories: ['completed', 'school', 'data']
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

  // go through all projects, checking whether they should be displayed
  let projects_displayed = 0;
  let projects_count = 0;

  for (const project_key in projects_state['projects']) {

    projects_count += 1;
    let project_active_cats_count = 0;
    let display_project = false;

    // check project's categories, update project's display if enough categories are true
    let category_list = projects_state['projects'][project_key]['categories'];
    category_list.forEach(category_key => {
      // check if category is active in the categories object
      if (projects_state['categories'][category_key]) {
        if (projects_state['filter_mode'] == 'OR') {
          display_project = true;
        } else if (projects_state['filter_mode'] == 'AND') {
          project_active_cats_count += 1;
        }
      }
    });

    if (projects_state['filter_mode'] == 'AND' 
        && project_active_cats_count == projects_state['selected_cats']
        && projects_state['selected_cats'] != 0
      ) {
        display_project = true;
    }

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
  let num_displayed_txt = projects_displayed + '/' + projects_count;
  $('#num_displayed').text(num_displayed_txt);
}

function countSelectedCategories() {
  let selected_cats = 0;
  let total_cats = 0;
  for (const key in projects_state['categories']) {
    total_cats += 1;
    if (projects_state['categories'][key] == true) {
      selected_cats += 1;
    }
  }
  projects_state['selected_cats'] = selected_cats;
  projects_state['total_cats'] = total_cats;
}

noProjectsSelected();
displaySelectedCats();