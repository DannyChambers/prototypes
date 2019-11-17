/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Form from './form.vue'
import Label from '../../00-atoms/03-label/label.vue'
import TextInput from '../../00-atoms/04-text_input/text_input.vue'
import Textarea from '../../00-atoms/05-textarea/textarea.vue'
import RadioButton from '../../00-atoms/06-radio_button/radio_button.vue'
import Checkbox from '../../00-atoms/07-checkbox/checkbox.vue'
import ButtonGroup from '../../01-molecules/01-button_group/button_group.vue'
import Button from '../../00-atoms/00-button/button.vue'

storiesOf('Components/Organisms/Form', module)
  .add('Linear', () => ({
    components: { Form, Label, TextInput, Textarea, RadioButton, Checkbox, ButtonGroup, Button },
    template: `
			    <Form variant="linear">
			    	<fieldset class="fieldset">
			    		<legend class="legend">Personal details</legend>
			    		<div class="fieldset_inner">
					    	<Label text="First name" data-valid="Complete.">
					    		<TextInput value="Marla" />
					    	</Label>
					    	<Label text="Last name" data-invalid="This field is required">
					    		<TextInput />
					    	</Label>
					    	<Label text="Email address">
					    		<TextInput type="email" />
					    	</Label>
					    	<Label text="Notes">
					    		<Textarea />
					    	</Label>
						</div>
					</fieldset>

			    	<fieldset class="fieldset">
			    		<legend class="legend">Marketing preferences</legend>
			    		<div class="fieldset_inner">
							<fieldset class="fieldgroup">
						    	<Label text="Recieve offers from us" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve offers from third parties" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve no marketing" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
							</fieldset>
						</div>
					</fieldset>

			    	<fieldset class="fieldset">
			    		<legend class="legend visually-hidden">Terms and Conditions</legend>
			    		<div class="fieldset_inner">
					    	<Label text="I agree to the Terms and Conditions" class="label--checkbox">
					    		<Checkbox groupname="group_1" />
					    	</Label>
						</div>
					</fieldset>

				   	<ButtonGroup alignment="centre">
						<Button type="submit" variant="primary" text="Submit" />
						<Button type="link" variant="secondary" text="Cancel" />
				   	</ButtonGroup>

			    </Form>
    `
  }))
  .add('Infield', () => ({
    components: { Form, Label, TextInput, Textarea, RadioButton, Checkbox, ButtonGroup, Button },
    template: `
			    <Form variant="infield">
			    	<fieldset class="fieldset">
			    		<legend class="legend">Personal details</legend>
			    		<div class="fieldset_inner">
					    	<Label text="First name" data-valid="Complete.">
					    		<TextInput value="Marla" />
					    	</Label>
					    	<Label text="Last name" data-invalid="This field is required">
					    		<TextInput />
					    	</Label>
					    	<Label text="Email address">
					    		<TextInput type="email" />
					    	</Label>
					    	<Label text="Notes">
					    		<Textarea />
					    	</Label>
						</div>
					</fieldset>

			    	<fieldset class="fieldset">
			    		<legend class="legend">Marketing preferences</legend>
			    		<div class="fieldset_inner">
							<fieldset class="fieldgroup">
						    	<Label text="Recieve offers from us" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve offers from third parties" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve no marketing" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
							</fieldset>
						</div>
					</fieldset>

			    	<fieldset class="fieldset">
			    		<legend class="legend visually-hidden">Terms and Conditions</legend>
			    		<div class="fieldset_inner">
					    	<Label text="I agree to the Terms and Conditions" class="label--checkbox">
					    		<Checkbox groupname="group_1" />
					    	</Label>
						</div>
					</fieldset>

				   	<ButtonGroup alignment="centre">
						<Button type="submit" variant="primary" text="Submit" />
						<Button type="link" variant="secondary" text="Cancel" />
				   	</ButtonGroup>

			    </Form>
    `
  }));