class Shared::NavLinkComponent
  def initialize(href:, text:)
    @href = href
    @text = text
  end

  def render_in(_view_context)
    <<~HTML
      <li><a href="#{@href}">#{@text}</a></li>
    HTML
  end
end
