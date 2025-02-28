<script lang="ts">
    import { enhance } from '$app/forms';
    import './survey.css';
    import audio_1 from '$lib/assets/0044-3.mp3';
</script>

<svelte:head>
    <title>Anticlone&ndash;Survey</title>
    <meta name="description" content="A listening test survey for a research project by students at FCS Innovation Academy focused on preventing the cloning of voices by altering reference audio.">
</svelte:head>

<div class="wrapper survey">
    <header>
        <h1>Anticlone Survey</h1>
        <p>This is a listening test survey for our research project Anticlone. By completing this survey, you're responses will be used within our research to evaluate the performance of our product. You can visit our design portfolio <a href="/">here</a>.</p>
        <p style="font-size: 6rem; text-transform: uppercase; font-weight: bold;">This page is currently incomplete.</p>
    </header>
    <main>
        <h2>Survey</h2>
        <form action="POST" use:enhance>
            <p>If you are a minor and completing this survey, you must complete <a href="/">this consent form</a>. Please complete the form and submit it in a JPEG, PNG, or PDF format below.</p>
            <div class="input-group">
                <label for="consent-form">Consent Form</label>
                <input type="file" id="consent-form" name="consent-form">
            </div>
            <div class="input-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="input-group">
                <label for="age">Age</label>
                <input type="number" name="age" id="age" min="1" required>
            </div>
            <div class="input-group">
                <label for="name">Gender</label>
                <select name="gender" id="gender" required>
                    <option value="none">Please select an option</option>
                    <option value="male">Male</option><option value="female">Female</option><option value="other">Other</option><option value="prefer">Prefer not to answer</option>
                </select>
            </div>
            <div class="input-group">
                <p>Audio Pair 1</p>
                <div class="audio-pair">
                    <div class="audio-wrapper">
                        <p>Audio 1</p>
                        <audio controls>
                            <source src={audio_1}>
                        </audio>
                    </div>
                    <div class="audio-wrapper">
                        <p>Audio 1</p>
                        <audio controls>
                            <source src={audio_1}>
                        </audio>
                    </div>
                </div>
                <p>Rate the similarity of the voices on a scale of 1 to 5. 1 indicates that the voices come from entirely different people, and 5 indicates that th voices are from the same person under the same exact conditions.</p>
                <select name="comp_1" id="comp_1" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </form>
    </main>
</div>