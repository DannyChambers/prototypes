/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Container from '../../02-molecules/00-container/container.vue'
import Form from './form.vue'
import Label from '../../01-atoms/03-label/label.vue'
import TextInput from '../../01-atoms/04-text_input/text_input.vue'
import Textarea from '../../01-atoms/05-textarea/textarea.vue'
import RadioButton from '../../01-atoms/06-radio_button/radio_button.vue'
import Checkbox from '../../01-atoms/07-checkbox/checkbox.vue'
import ButtonGroup from '../../02-molecules/01-button_group/button_group.vue'
import Button from '../../01-atoms/00-button/button.vue'

storiesOf('Components/Organisms/Form', module)
  .add('Linear', () => ({
    components: { Container, Form, Label, TextInput, Textarea, RadioButton, Checkbox, ButtonGroup, Button },
    template: `
    	<Container>
	        <div class="layout layout_medium-centred">
	          <div class="column">

				<Form variant="linear">
					<fieldset class="fieldset">
						<legend class="legend">Personal details</legend>
				    	<Label text="First name" data-valid="Complete.">
				    		<TextInput value="Marla" />
				    	</Label>
				    	<Label text="Last name" data-invalid="This field is required">
				    		<TextInput />
				    	</Label>
				    	<Label text="Email address">
				    		<TextInput type="email" />
				    	</Label>
				    	<Label text="Confirm email address">
				    		<TextInput type="email" />
				    	</Label>
				    	<Label text="Notes">
				    		<Textarea />
				    	</Label>
					</fieldset>

					<fieldset class="fieldset">
						<legend class="legend">Marketing preferences</legend>
						<fieldset class="fieldgroup">
					    	<Label text="Recieve offers from us" class="label--radio">
					    		<RadioButton groupname="group_1" />
					    	</Label>
					    	<Label text="Recieve offers from us and third parties" class="label--radio">
					    		<RadioButton groupname="group_1" />
					    	</Label>
					    	<Label text="Recieve no marketing" class="label--radio">
					    		<RadioButton groupname="group_1" />
					    	</Label>
						</fieldset>
					</fieldset>

					<fieldset class="fieldset">
						<legend class="legend visually-hidden">Terms and Conditions</legend>
				    	<Label text="I agree to the Terms and Conditions" class="label--checkbox">
				    		<Checkbox groupname="group_1" />
				    	</Label>
					</fieldset>

				   	<ButtonGroup alignment="left">
						<Button type="submit" variant="primary" text="Submit" />
						<Button type="link" variant="secondary" text="Cancel" />
				   	</ButtonGroup>

				</Form>

			   </div>
			</div>
		</Container>
    `
  }))
  .add('Infield', () => ({
    components: { Form, Label, TextInput, Textarea, RadioButton, Checkbox, ButtonGroup, Button },
    template: `

    	<Container>
	        <div class="layout layout_medium-centred">
	          <div class="column">

				    <Form variant="infield">
				    	<fieldset class="fieldset">
				    		<legend class="legend">Personal details</legend>
					    	<Label text="First name" data-valid="Complete.">
					    		<TextInput value="Marla" />
					    	</Label>
					    	<Label text="Last name" data-invalid="This field is required">
					    		<TextInput />
					    	</Label>
					    	<Label text="Email address">
					    		<TextInput type="email" />
					    	</Label>
					    	<Label text="Email address">
					    		<TextInput type="email" />
					    	</Label>
					    	<Label text="Notes">
					    		<Textarea />
					    	</Label>
						</fieldset>

				    	<fieldset class="fieldset">
				    		<legend class="legend">Marketing preferences</legend>
							<fieldset class="fieldgroup">
						    	<Label text="Recieve offers from us" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve offers from us and third parties" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve no marketing" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
							</fieldset>
						</fieldset>

				    	<fieldset class="fieldset">
				    		<legend class="legend visually-hidden">Terms and Conditions</legend>
					    	<Label text="I agree to the Terms and Conditions" class="label--checkbox">
					    		<Checkbox groupname="group_1" />
					    	</Label>
						</fieldset>

					   	<ButtonGroup alignment="left">
							<Button type="submit" variant="primary" text="Submit" />
							<Button type="link" variant="secondary" text="Cancel" />
					   	</ButtonGroup>

				    </Form>

				</div>
			</div>

		</Container>
    `
  }))
  .add('Infield grouped', () => ({
    components: { Form, Label, TextInput, Textarea, RadioButton, Checkbox, ButtonGroup, Button },
    template: `

    	<Container>
	        <div class="layout layout_medium-centred">
	          <div class="column">

				    <Form variant="infield">
				    	<fieldset class="fieldset">
				    		<legend class="legend">Personal details</legend>
				    		<div class="grouped_fields">
						    	<Label text="First name" data-valid="Complete.">
						    		<TextInput value="Marla" />
						    	</Label>
						    	<Label text="Last name" data-invalid="This field is required">
						    		<TextInput />
						    	</Label>
						    </div>
				    		<div class="grouped_fields">
						    	<Label text="Email address">
						    		<TextInput type="email" />
						    	</Label>
						    	<Label text="Confirm email address">
						    		<TextInput type="email" />
						    	</Label>
						    </div>
					    	<Label text="Notes">
					    		<Textarea />
					    	</Label>
						</fieldset>

				    	<fieldset class="fieldset">
				    		<legend class="legend">Marketing preferences</legend>
							<fieldset class="fieldgroup">
						    	<Label text="Recieve offers from us" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve offers from us and third parties" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
						    	<Label text="Recieve no marketing" class="label--radio">
						    		<RadioButton groupname="group_1" />
						    	</Label>
							</fieldset>
						</fieldset>

				    	<fieldset class="fieldset">
				    		<legend class="legend visually-hidden">Terms and Conditions</legend>
					    	<Label text="I agree to the Terms and Conditions" class="label--checkbox">
					    		<Checkbox groupname="group_1" />
					    	</Label>
						</fieldset>

					   	<ButtonGroup alignment="left">
							<Button type="submit" variant="primary" text="Submit" />
							<Button type="link" variant="secondary" text="Cancel" />
					   	</ButtonGroup>

				    </Form>

				</div>
			</div>

		</Container>
    `
  }));