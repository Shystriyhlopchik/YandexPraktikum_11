    import './style.css';

    import Api from './scripts/api.js';


    // ---------------------------------- Свойства -----------------------------------------------------  //
    // Окно с формой новой карточки
    const newCardPopupProps = {
        id: 'new-card',
        title: 'Новое место',
        formName: 'new',
        firstFormFieldType: 'text',
        firstFormFieldName: 'name',
        secondFieldType: 'url',
        secondFieldName: 'link',
        firstFormFieldPlaceholder: 'Название',
        secondFormFieldPlaceholder: 'Ссылка на картинку',
        buttonName: 'submit',
        buttonText: '+',
        path: '/cards'
    }

    // Окно с формой редактирования профиля
    const editProfilePopupProps = {
        id: 'edit-profile',
        title: 'Редактирование профиля',
        formName: 'edit',
        firstFormFieldType: 'text',
        firstFormFieldName: 'username',
        secondFieldType: 'text',
        secondFieldName: 'userdesc',
        firstFormFieldPlaceholder: 'Имя',
        secondFormFieldPlaceholder: 'О себе',
        buttonName: 'submit',
        buttonText: 'Сохранить',
        path: '/users/me'
    }