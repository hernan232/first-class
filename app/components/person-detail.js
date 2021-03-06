import Component from '@ember/component';

export default Component.extend({

  didRender() {
    this._super(...arguments);
    const person = this.get('person');
    this.$('.person')
      .css(
        'background-color',
        this.getColorByGender(person.gender)
      );
  },

  getColorByGender(gender) {
    if(gender === 'M') {
      return 'rgba(25, 128, 200, 0.5)';
    } else {
      return 'rgba(255, 0, 0, 0.3)';
    }
  },
});
