function skillsMember() {
    console.log('Skills member');
    let member = document.querySelector('.member');
    let memberSkills = document.querySelector('.member-skills');
    let memberSkillsList = document.querySelector('.member-skills__list');
    let memberSkillsBtn = document.querySelector('.member-skills__btn');
    let memberSkillsBtnArrow = document.querySelector('.member-skills__btn-arrow');
    let memberSkillsBtnText = document.querySelector('.member-skills__btn-text');
    let memberSkillsBtnTextHidden = document.querySelector('.member-skills__btn-text-hidden');
    let memberSkillsBtnTextHiddenText = document.querySelector('.member-skills__btn-text-hidden-text');

    memberSkillsBtn.addEventListener('click', function() {
        memberSkillsList.classList.toggle('member-skills__list--active');
        memberSkillsBtnArrow.classList.toggle('member-skills__btn-arrow--active');
        memberSkillsBtnText.classList.toggle('member-skills__btn-text--active');
        memberSkillsBtnTextHidden.classList.toggle('member-skills__btn-text-hidden--active');
        memberSkillsBtnTextHiddenText.classList.toggle('member-skills__btn-text-hidden-text--active');
        memberSkills.classList.toggle('member-skills--active');
        member.classList.toggle('member--active');
    });
}