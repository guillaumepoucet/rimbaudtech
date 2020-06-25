!-- The defi Modal -->
<div id="quizModal" class="modal">

    <!-- Modal content -->
    <div id="question" class="modal-content">
        <span class="close">&times;</span>
        <p class="question">Question n°<?= $id ?></p>
        <p><?= $question ?></p>
    </div>

<!--On bloque l input ENTRER -->
<script type="text/javascript">
    noPressEnter(document.modal);
</script>
</div>