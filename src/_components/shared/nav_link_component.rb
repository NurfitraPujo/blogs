class Shared::NavLinkComponent < Bridgetown::Component
  def initialize(href:, text:, resource:)
    @href = href
    @text = text
    @resource = resource
  end

  def is_active?
    return @href == @resource.data.link unless @resource.data.link.nil?

    @href[1..-1] == @resource.data.slug.downcase
  end
end
