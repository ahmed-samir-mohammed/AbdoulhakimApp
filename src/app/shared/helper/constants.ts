
export class Globals {
  public static isRtl: boolean = false;
  public static formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}

export class Locales {

  public static getCulture(): string {
    let language: string = localStorage.getItem("lang");
    switch (language) {
      case 'ar':
        return 'ar-AE';
      case 'en':
        return 'en-US';
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }
  }

  public static getLocaleObjects(): Object {
    let language: string = localStorage.getItem("lang");
    switch (language) {
      case 'ar':
        return {
          'ar-AE': {
            grid: {
              Add: 'إضافة',
              Edit: 'تعديل',
              Cancel: 'إلغاء',
              Update: 'تحديث',
              Delete: 'حذف',
              Print: 'طباعة',
              Pdfexport: 'تصدير PDF',
              Excelexport: 'تصدير Excel',
              Wordexport: 'تصدير Word',
              Search: 'بحث',
              Save: 'حفظ',
              Item: 'عنصر',
              Items: 'عناصر',
              ConfirmDelete: 'هل أنت متأكد من حذف هذا السجل؟',
              Matchs: 'م يتم العثور على نتائج',
              FilterButton: 'فلتر',
              ClearButton: 'تفريغ',
              StartsWith: 'يبدأ بـ',
              EndsWith: 'ينتهي بـ',
              Contains: 'يحتوي على',
              Equal: 'يساوي',
              NotEqual: 'لا يساوي',
              LessThan: 'أقل من',
              LessThanOrEqual: 'أقل من أو يساوي',
              GreaterThan: 'أكبر من',
              GreaterThanOrEqual: 'أكبر من أو يساوي',
              ChooseDate: 'اختر تاريخ',
              EnterValue: 'إدخل القيمة',
              EmptyRecord: 'لا توجد سجلات لعرضها',
              Copy: 'نسخ',
              Group: 'جميع حسب هذا العمود',
              Ungroup: 'فك التجميع حسب هذا العمود',
              Export: 'تصدير',
              FirstPage: 'الصفحة الأولى',
              LastPage: 'الصفحة الأخيره',
              PreviousPage: 'الصفحة السابقة',
              NextPage: 'الصفحة التالية',
              SortAscending: 'ترتيب تصاعدي',
              SortDescending: 'ترتيب تنازلي',
              EditRecord: 'تعديل السجل',
              DeleteRecord: 'حذف السجل',
              FilterMenu: 'فلتر',
              SelectAll: 'تحديد الكل',
              Blanks: 'فراغات',
              FilterTrue: 'صحيح',
              FilterFalse: 'خاطئ',
              NoResult: 'لا توجد نتائج',
              ClearFilter: 'تفريغ الفلاتر',
              NumberFilter: 'فلاتر رقمية',
              TextFilter: 'فلاتر نصية',
              DateFilter: 'فلاتر تاريخ',
              MatchCase: 'حالة التطابق',
              Between: 'بين',
              CustomFilter: 'فلتر مخصص',
              CustomFilterPlaceHolder: 'أدخل القيمة',
              CustomFilterDatePlaceHolder: 'اختر تاريخ',
              AND: 'و',
              OR: 'أو',
              ShowRowsWhere: 'Show rows where:',
              currentPageInfo: '{0} من {1} صفحات',
              totalItemsInfo: '({0} عناصر)',
              totalItemInfo: '({0} عنصر)',
              firstPageTooltip: 'اذهب للصفحة الأولى',
              lastPageTooltip: 'اذهب للصفحة الأخيرة',
              nextPageTooltip: 'اذهب للصفحة التالية',
              previousPageTooltip: 'اذهب للصفحة السابقة',
              nextPagerTooltip: 'Go to next pager',
              previousPagerTooltip: 'Go to previous pager',
              pagerDropDown: 'عناصر لكل صفحة',
              pagerAllDropDown: 'عناصر',
              All: 'الكل',
              ExpandAll: 'توسيع الكل',
              CollapseAll: 'طي الكل',
              SaveButton: 'حفظ',
              OKButton: 'تطبيق',
              CancelButton: 'إلغاء',
            },
            treegrid: {
              Add: 'إضافة',
              Edit: 'تعديل',
              Cancel: 'إلغاء',
              Update: 'تحديث',
              Delete: 'حذف',
              Print: 'طباعة',
              Pdfexport: 'تصدير PDF',
              Excelexport: 'تصدير Excel',
              Wordexport: 'تصدير Word',
              Search: 'بحث',
              Save: 'حفظ',
              Item: 'عنصر',
              Items: 'عناصر',
              ConfirmDelete: 'هل أنت متأكد من حذف هذا السجل؟',
              Matchs: 'م يتم العثور على نتائج',
              FilterButton: 'فلتر',
              ClearButton: 'تفريغ',
              StartsWith: 'يبدأ بـ',
              EndsWith: 'ينتهي بـ',
              Contains: 'يحتوي على',
              Equal: 'يساوي',
              NotEqual: 'لا يساوي',
              LessThan: 'أقل من',
              LessThanOrEqual: 'أقل من أو يساوي',
              GreaterThan: 'أكبر من',
              GreaterThanOrEqual: 'أكبر من أو يساوي',
              ChooseDate: 'اختر تاريخ',
              EnterValue: 'إدخل القيمة',
              EmptyRecord: 'لا توجد سجلات لعرضها',
              Copy: 'نسخ',
              Group: 'جميع حسب هذا العمود',
              Ungroup: 'فك التجميع حسب هذا العمود',
              Export: 'تصدير',
              FirstPage: 'الصفحة الأولى',
              LastPage: 'الصفحة الأخيره',
              PreviousPage: 'الصفحة السابقة',
              NextPage: 'الصفحة التالية',
              SortAscending: 'ترتيب تصاعدي',
              SortDescending: 'ترتيب تنازلي',
              EditRecord: 'تعديل السجل',
              DeleteRecord: 'حذف السجل',
              FilterMenu: 'فلتر',
              SelectAll: 'تحديد الكل',
              Blanks: 'فراغات',
              FilterTrue: 'صحيح',
              FilterFalse: 'خاطئ',
              NoResult: 'لا توجد نتائج',
              ClearFilter: 'تفريغ الفلاتر',
              NumberFilter: 'فلاتر رقمية',
              TextFilter: 'فلاتر نصية',
              DateFilter: 'فلاتر تاريخ',
              MatchCase: 'حالة التطابق',
              Between: 'بين',
              CustomFilter: 'فلتر مخصص',
              CustomFilterPlaceHolder: 'أدخل القيمة',
              CustomFilterDatePlaceHolder: 'اختر تاريخ',
              AND: 'و',
              OR: 'أو',
              ShowRowsWhere: 'أظهر السجلات حيث:',
              currentPageInfo: '{0} من {1} صفحات',
              totalItemsInfo: '({0} عناصر)',
              totalItemInfo: '({0} عنصر)',
              firstPageTooltip: 'اذهب للصفحة الأولى',
              lastPageTooltip: 'اذهب للصفحة الأخيرة',
              nextPageTooltip: 'اذهب للصفحة التالية',
              previousPageTooltip: 'اذهب للصفحة السابقة',
              nextPagerTooltip: 'Go to next pager',
              previousPagerTooltip: 'Go to previous pager',
              pagerDropDown: 'عناصر لكل صفحة',
              pagerAllDropDown: 'عناصر',
              All: 'الكل',
              ExpandAll: 'توسيع الكل',
              CollapseAll: 'طي الكل',
              SaveButton: 'حفظ',
              OKButton: 'تطبيق',
              CancelButton: 'إلغاء',
            },
            'datetimepicker': {
              placeholder: 'حدد التاريخ والوقت',
              today: "اليوم"
            },
            'richtexteditor': {
              alignments: "محاذاة",
              justifyLeft: "محاذاة لليسار",
              justifyCenter: "توسيط المحاذاة",
              justifyRight: "محاذاة لليمين",
              justifyFull: "Align Justify",
              fontName: "اسم الخط",
              fontSize: "حجم الخط",
              fontColor: "لون الخط",
              backgroundColor: "لون الخلفية",
              bold: "خط عريض",
              italic: "مائل",
              underline: "تسطير",
              strikethrough: "شطب",
              clearFormat: "Clear Format",
              clearAll: "Clear All",
              cut: "قص",
              copy: "نسخ",
              paste: "لصق",
              unorderedList: "قائمة نقطية",
              orderedList: "قائمة مرقمة",
              indent: "زيادة المسافة البادئة",
              outdent: "تقليل المسافة البادئة",
              undo: "تراجع",
              redo: "إعادة",
              superscript: "Superscript",
              subscript: "Subscript",
              createLink: "Insert Link",
              openLink: "Open Link",
              editLink: "Edit Link",
              removeLink: "Remove Link",
              image: "إضافة صورة",
              replace: "استبدال",
              align: "Align",
              caption: "Image Caption",
              remove: "Remove",
              insertLink: "إضافة رابط",
              display: "عرض",
              altText: "Alternative Text",
              dimension: "تعديل الحجم",
              fullscreen: "تكبير",
              maximize: "تكبير",
              minimize: "تصغير",
              lowerCase: "Lower Case",
              upperCase: "Upper Case",
              print: "طباعة",
              formats: "Formats",
              sourcecode: "عرض الكود",
              preview: "Preview",
              viewside: "ViewSide",
              insertCode: "Insert Code",
              linkText: "Display Text",
              linkTooltipLabel: "Title",
              linkWebUrl: "Web Address",
              linkTitle: "Enter a title",
              linkurl: "http://example.com",
              linkOpenInNewWindow: "Open Link in New Window",
              linkHeader: "Insert Link",
              dialogInsert: "Insert",
              dialogCancel: "Cancel",
              dialogUpdate: "Update",
              imageHeader: "Insert Image",
              imageLinkHeader: "You can also provide a link from the web",
              mdimageLink: "Please provide a URL for your image",
              imageUploadMessage: "Drop image here or browse to upload",
              imageDeviceUploadMessage: "Click here to upload",
              imageAlternateText: "Alternate Text",
              alternateHeader: "Alternative Text",
              browse: "Browse",
              imageUrl: "http://example.com/image.png",
              imageCaption: "Caption",
              imageSizeHeader: "Image Size",
              imageHeight: "Height",
              imageWidth: "Width",
              textPlaceholder: "Enter Text",
              inserttablebtn: "Insert Table",
              tabledialogHeader: "Insert Table",
              tableWidth: "Width",
              cellpadding: "Cell Padding",
              cellspacing: "Cell Spacing",
              columns: "Number of columns",
              rows: "Number of rows",
              tableRows: "Table Rows",
              tableColumns: "Table Columns",
              tableCellHorizontalAlign: "Table Cell Horizontal Align",
              tableCellVerticalAlign: "Table Cell Vertical Align",
              createTable: "Create Table",
              removeTable: "Remove Table",
              tableHeader: "Table Header",
              tableRemove: "Table Remove",
              tableCellBackground: "Table Cell Background",
              tableEditProperties: "Table Edit Properties",
              styles: "Styles",
              insertColumnLeft: "Insert Column Left",
              insertColumnRight: "Insert Column Right",
              deleteColumn: "Delete Column",
              insertRowBefore: "Insert Row Before",
              insertRowAfter: "Insert Row After",
              deleteRow: "Delete Row",
              tableEditHeader: "Edit Table",
              TableHeadingText: "Heading",
              TableColText: "Col",
              imageInsertLinkHeader: "Insert Link",
              editImageHeader: "Edit Image",
              alignmentsDropDownLeft: "Align Left",
              alignmentsDropDownCenter: "Align Center",
              alignmentsDropDownRight: "Align Right",
              alignmentsDropDownJustify: "Align Justify",
              imageDisplayDropDownInline: "Inline",
              imageDisplayDropDownBreak: "Break",
              tableInsertRowDropDownBefore: "Insert row before",
              tableInsertRowDropDownAfter: "Insert row after",
              tableInsertRowDropDownDelete: "Delete row",
              tableInsertColumnDropDownLeft: "Insert column left",
              tableInsertColumnDropDownRight: "Insert column right",
              tableInsertColumnDropDownDelete: "Delete column",
              tableVerticalAlignDropDownTop: "Align Top",
              tableVerticalAlignDropDownMiddle: "Align Middle",
              tableVerticalAlignDropDownBottom: "Align Bottom",
              tableStylesDropDownDashedBorder: "Dashed Borders",
              tableStylesDropDownAlternateRows: "Alternate Rows",
              pasteFormat: "Paste Format",
              pasteFormatContent: "Choose the formatting action",
              plainText: "Plain Text",
              cleanFormat: "Clean",
              keepFormat: "Keep",
              formatsDropDownParagraph: "Paragraph",
              formatsDropDownCode: "Code",
              formatsDropDownQuotation: "Quotation",
              formatsDropDownHeading1: "Heading 1",
              formatsDropDownHeading2: "Heading 2",
              formatsDropDownHeading3: "Heading 3",
              formatsDropDownHeading4: "Heading 4",
              fontNameSegoeUI: "Segoe UI",
              fontNameArial: "Arial",
              fontNameGeorgia: "Georgia",
              fontNameImpact: "Impact",
              fontNameTahoma: "Tahoma",
              fontNameTimesNewRoman: "Times New Roman",
              fontNameVerdana: "Verdana"
            }
          }
        }
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }

  }
  public static getLocalescheduleObjects(): Object {
    let language: string = localStorage.getItem("lang");
    switch (language) {
      case 'ar':
        return {
          'ar-AE': {

            schedule: {
              day: "يوم",
              week: "اسبوع",
              workWeek: "اسبوع عمل",
              month: "شهر",
              year: "عام",
              "agenda": "Agenda",
              "weekAgenda": "Week Agenda",
              "workWeekAgenda": "Work Week Agenda",
              "monthAgenda": "Month Agenda",
              "today": "اليوم",
              "noEvents": "No events",
              "emptyContainer": "There are no events scheduled on this day.",
              "allDay": "All day",
              "start": "Start",
              "end": "End",
              "more": "more",
              "close": "Close",
              "cancel": "Cancel",
              "noTitle": "(No Title)",
              "delete": "Delete",
              "deleteEvent": "This Event",
              "deleteMultipleEvent": "Delete Multiple Events",
              "selectedItems": "Items selected",
              "deleteSeries": "Entire Series",
              "edit": "Edit",
              "editSeries": "Entire Series",
              "editEvent": "This Event",
              "createEvent": "Create",
              "subject": "Subject",
              "addTitle": "Add title",
              "moreDetails": "More Details",
              "save": "Save",
              "editContent": "How would you like to change the appointment in the series?",
              "deleteContent": "Are you sure you want to delete this event?",
              "deleteMultipleContent": "Are you sure you want to delete the selected events?",
              "newEvent": "New Event",
              "title": "Title",
              "location": "Location",
              "description": "Description",
              "timezone": "Timezone",
              "startTimezone": "Start Timezone",
              "endTimezone": "End Timezone",
              "repeat": "Repeat",
              "saveButton": "Save",
              "cancelButton": "Cancel",
              "deleteButton": "Delete",
              "recurrence": "Recurrence",
              "wrongPattern": "The recurrence pattern is not valid.",
              "seriesChangeAlert": "Do you want to cancel the changes made to specific instances of this series and match it to the whole series again?",
              "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
              "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
              "editRecurrence": "Edit Recurrence",
              "repeats": "Repeats",
              "alert": "Alert",
              "startEndError": "The selected end date occurs before the start date.",
              "invalidDateError": "The entered date value is invalid.",
              "blockAlert": "Events cannot be scheduled within the blocked time range.",
              "ok": "Ok",
              "yes": "Yes",
              "no": "No",
              "occurrence": "Occurrence",
              "series": "Series",
              "previous": "Previous",
              "next": "Next",
              "timelineDay": "يوم المخطط الزمني",
              "timelineWeek": "اسبوع المخطط الزمني",
              "timelineWorkWeek": "Timeline Work Week",
              "timelineMonth": "شهر المخطط الزمني",
              "timelineYear": "عام المخطط الزمني",
              "editFollowingEvent": "Following Events",
              "deleteTitle": "Delete Event",
              "editTitle": "Edit Event",
              "beginFrom": "Begin From",
              "endAt": "End At",
              "expandAllDaySection": "Expand-all-day-section",
              "collapseAllDaySection": "Collapse-all-day-section"
            },
            "recurrenceeditor": {
              "none": "None",
              "daily": "Daily",
              "weekly": "Weekly",
              "monthly": "Monthly",
              "month": "Month",
              "yearly": "Yearly",
              "never": "Never",
              "until": "Until",
              "count": "Count",
              "first": "First",
              "second": "Second",
              "third": "Third",
              "fourth": "Fourth",
              "last": "Last",
              "repeat": "Repeat",
              "repeatEvery": "Repeat every",
              "on": "Repeat On",
              "end": "End",
              "onDay": "Day",
              "days": "Day(s)",
              "weeks": "Week(s)",
              "months": "Month(s)",
              "years": "Year(s)",
              "every": "every",
              "summaryTimes": "time(s)",
              "summaryOn": "on",
              "summaryUntil": "until",
              "summaryRepeat": "Repeats",
              "summaryDay": "day(s)",
              "summaryWeek": "week(s)",
              "summaryMonth": "month(s)",
              "summaryYear": "year(s)",
              "monthWeek": "Month Week",
              "monthPosition": "Month Position",
              "monthExpander": "Month Expander",
              "yearExpander": "Year Expander",
              "repeatInterval": "Repeat Interval"
            }


          }
        }
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }

  }
  public static getTreeGridLocaleObjects(): Object {
    let language: string = localStorage.getItem("lang");
    switch (language) {
      case 'ar':
        return {
          'ar-AE': {
            treegrid: {
              Add: 'إضافة',
              Edit: 'تعديل',
              Cancel: 'إلغاء',
              Update: 'تحديث',
              Delete: 'حذف',
              Print: 'طباعة',
              Pdfexport: 'تصدير PDF',
              Excelexport: 'تصدير Excel',
              Wordexport: 'تصدير Word',
              Search: 'بحث',
              Save: 'حفظ',
              Item: 'عنصر',
              Items: 'عناصر',
              ConfirmDelete: 'هل أنت متأكد من حذف هذا السجل؟',
              Matchs: 'م يتم العثور على نتائج',
              FilterButton: 'فلتر',
              ClearButton: 'تفريغ',
              StartsWith: 'يبدأ بـ',
              EndsWith: 'ينتهي بـ',
              Contains: 'يحتوي على',
              Equal: 'يساوي',
              NotEqual: 'لا يساوي',
              LessThan: 'أقل من',
              LessThanOrEqual: 'أقل من أو يساوي',
              GreaterThan: 'أكبر من',
              GreaterThanOrEqual: 'أكبر من أو يساوي',
              ChooseDate: 'اختر تاريخ',
              EnterValue: 'إدخل القيمة',
              EmptyRecord: 'لا توجد سجلات لعرضها',
              Copy: 'نسخ',
              Group: 'جميع حسب هذا العمود',
              Ungroup: 'فك التجميع حسب هذا العمود',
              Export: 'تصدير',
              FirstPage: 'الصفحة الأولى',
              LastPage: 'الصفحة الأخيره',
              PreviousPage: 'الصفحة السابقة',
              NextPage: 'الصفحة التالية',
              SortAscending: 'ترتيب تصاعدي',
              SortDescending: 'ترتيب تنازلي',
              EditRecord: 'تعديل السجل',
              DeleteRecord: 'حذف السجل',
              FilterMenu: 'فلتر',
              SelectAll: 'تحديد الكل',
              Blanks: 'فراغات',
              FilterTrue: 'صحيح',
              FilterFalse: 'خاطئ',
              NoResult: 'لا توجد نتائج',
              ClearFilter: 'تفريغ الفلاتر',
              NumberFilter: 'فلاتر رقمية',
              TextFilter: 'فلاتر نصية',
              DateFilter: 'فلاتر تاريخ',
              MatchCase: 'حالة التطابق',
              Between: 'بين',
              CustomFilter: 'فلتر مخصص',
              CustomFilterPlaceHolder: 'أدخل القيمة',
              CustomFilterDatePlaceHolder: 'اختر تاريخ',
              AND: 'و',
              OR: 'أو',
              ShowRowsWhere: 'أظهر السجلات حيث:',
              currentPageInfo: '{0} من {1} صفحات',
              totalItemsInfo: '({0} عناصر)',
              totalItemInfo: '({0} عنصر)',
              firstPageTooltip: 'اذهب للصفحة الأولى',
              lastPageTooltip: 'اذهب للصفحة الأخيرة',
              nextPageTooltip: 'اذهب للصفحة التالية',
              previousPageTooltip: 'اذهب للصفحة السابقة',
              nextPagerTooltip: 'Go to next pager',
              previousPagerTooltip: 'Go to previous pager',
              pagerDropDown: 'عناصر لكل صفحة',
              pagerAllDropDown: 'عناصر',
              All: 'الكل',
              ExpandAll: 'توسيع الكل',
              CollapseAll: 'طي الكل',
              SaveButton: 'حفظ',
              OKButton: 'تطبيق',
              CancelButton: 'إلغاء',
            },
          }
        }
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }

  }
  public static getLocaleColor(): Object {
    let language: string = localStorage.getItem("lang");
    switch (language) {
      case 'ar':
        return {
          'ar-AE': {
            'colorpicker': {
              'Apply': 'تطبيق',
              'Cancel': 'إلغاء',
              'ModeSwitcher': 'مفتاح كهربائي الوضع'
            }
          }
        }
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }

  }
  public static getLocaleUploader(): Object {
    let language: string = localStorage.getItem("lang");
    switch (language) {
      case 'ar':
        return {
          'ar-AE': {
            "uploader": {
              "invalidMinFileSize" : "La taille du fichier est trop petite! S'il vous plaît télécharger des fichiers avec une taille minimale de 10 Ko",
              "invalidMaxFileSize" : "La taille du fichier dépasse 28 Mo",
              "invalidFileType" : "Le type de fichier n'est pas autorisé",
              "Browse"  : "تصفح",
              "Clear" : "حذف",
              "Upload" : "تحميل",
              "dropFilesHint" : "ou Déposer des fichiers ici",
              "uploadFailedMessage" : "Impossible d'importer le fichier",
              "uploadSuccessMessage" : "تم التحميل بنجاح",
              "removedSuccessMessage": "Fichier supprimé avec succès",
              "removedFailedMessage": "Le fichier n'a pas pu être supprimé",
              "inProgress": "جاري التحميل",
              "readyToUploadMessage": "Prêt à télécharger",
              "remove": "حذف",
              "cancel": "الغاء",
              "delete": "حذف"
          }
          }
        }
      case 'fr':
        return 'fr-FR';
      case 'tr':
        return 'tr-TR';
      case 'es':
        return 'es-ES';
      case 'fa':
        return 'fa-IR';
      case 'de':
        return 'de-DE';
      case 'hi':
        return 'hi-IN';
      case 'id':
        return 'id-ID';
      case 'pt':
        return 'pt-PT';
      case 'ur':
        return 'ur-PK';
      default:
        return 'en-US';
    }

  }
}
